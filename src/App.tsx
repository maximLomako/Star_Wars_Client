import React, {useEffect, useMemo, useState} from 'react';
import {TextAreaField} from "./components/TextAreaField/TextAreaField";
import {ItemsList} from "./components/ItemsList/ItemsList";
import {dataAPI} from "./api/api";
import Alert from '@material-ui/lab/Alert';
import {CardInfo} from "./components/CardInfo/CardInfo";
import {getDateForRenderDetailView, getHighlightedText} from "./utils/utils";
import {ListItemsValueType} from "./types/ListItemsValueType";
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [listItemsValue, setListItemsValue] = useState<Array<ListItemsValueType>>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [error, setError] = useState<boolean>(false)
  const changeInputValue = (newValue: string) => {
    setInputValue(newValue);
  }
  const selectItem = (element: ListItemsValueType) => {
    setSelectedItem(element);
  }
  const hideItemList = () => {
    setListItemsValue([]);
  }
  const hideSelectedItem = () => {
    setSelectedItem(null);
  }
  const addGroupProperty = (groupName: string, arr: ListItemsValueType[]) => {
    return arr.map((el: ListItemsValueType) => ({...el, group: groupName}));
  }
  useEffect(() => {
    if (inputValue.length >= 3) {
      const p1 = dataAPI.getAllFilms(inputValue)
        .then((data) => addGroupProperty('films', data));
      const p2 = dataAPI.getAllPeople(inputValue)
        .then((data) => addGroupProperty('people', data));
      const p3 = dataAPI.getAllPlanets(inputValue)
        .then((data) => addGroupProperty('planets', data));
      const p4 = dataAPI.getAllSpecies(inputValue)
        .then((data) => addGroupProperty('species', data));
      const p5 = dataAPI.getAllStarships(inputValue)
        .then((data) => addGroupProperty('starships', data));
      const p6 = dataAPI.getAllVehicles(inputValue)
        .then((data) => addGroupProperty('vehicles', data));

      Promise.all([p1, p2, p3, p4, p5, p6])
        .then(values => {
          setListItemsValue(values.flat());
        })
        .catch(() => {
          setError(true)
        })
    }
  }, [inputValue])
  const renderDetailedView = useMemo(() => (selectedItem: any) => {
    const {row1, row2, row3, row4} = getDateForRenderDetailView(selectedItem);
    return <CardInfo
      row1={row1}
      row2={row2}
      row3={row3}
      row4={row4}
    />
  }, [])
  return (
    <div className="App">
      {error
        ? <Alert variant="filled" severity="error">
          We have a problem, reload the page please!
        </Alert>
        : <div className="AppWrapper">
            <TextAreaField
              value={inputValue}
              changeInputValue={changeInputValue}
              hideSelectedItem={hideSelectedItem}
            />
            <div className="AppList">
              <ItemsList
                inputValue={inputValue}
                listItemsValue={listItemsValue}
                selectItem={selectItem}
                hideItemList={hideItemList}
                changeInputValue={changeInputValue}
                getHighlightedText={getHighlightedText}
              />
            </div>
          <div className="AppItem">
            {selectedItem && renderDetailedView(selectedItem)}
          </div>
        </div>
      }
    </div>
  );
}
export default App;
