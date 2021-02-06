import React, {useEffect, useState} from 'react';
import {TextAreaField} from "./components/TextAreaField/TextAreaField";
import {ItemsList} from "./components/ItemsList/ItemsList";
import {dataAPI} from "./api/api";
import Alert from '@material-ui/lab/Alert';
import './App.css';
import {CardInfo} from "./components/CardInfo/CardInfo";

export interface ListItemsValueType {
  name?: string
  title?: string
  group: string
  episode_id?: number
  opening_crawl?: string
  director?: string
  producer?: string
  release_date?: Date
  species?: string[]
  starships?: string[]
  vehicles?: string[]
  characters?: string[]
  planets?: string[]
  url?: string
  created?: string
  MGLT?: string
  model?: string
  starship_class?: string
  manufacturer?: string
  cost_in_credits?: string
  length?: string
  crew?: string
  passengers?: string
  max_atmosphering_speed?: string
  hyperdrive_rating?: string
  cargo_capacity?: string
  consumables?: string
  films?: string[]
  pilots?: string[]
  edited?: string
  vehicle_class?: string
  classification?: string
  designation?: string
  average_height?: string
  average_lifespan?: string
  eye_colors?: string
  hair_colors?: string
  skin_colors?: string
  language?: string
  homeworld?: string
  people?: string[]
  diameter?: string
  rotation_period?: string
  orbital_period?: string
  gravity?: string
  population?: string
  climate?: string
  terrain?: string
  surface_water?: string
  residents?: string[]
}

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
  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? <b key={i}>{part}</b> : part);
  }
  const renderView = (selectedItem: any) => {
    if (selectedItem) {
      const {group, name} = selectedItem;
      switch (group) {
        case 'films': {
          const {title, director, producer, episode_id: episodId} = selectedItem;
          return  <CardInfo
            row1={title}
            row2={director}
            row3={producer}
            row4={episodId}
          />
        }
        case 'people': {
          const {gender, height, hair_color: hairColor} = selectedItem;
          return  <CardInfo
            row1={name}
            row2={gender}
            row3={height}
            row4={hairColor}
          />
        }
        case 'planets': {
          const {diameter, rotation_period: rotationPeriod, orbital_period: orbitalPeriod} = selectedItem;
          return  <CardInfo
            row1={name}
            row2={diameter}
            row3={rotationPeriod}
            row4={orbitalPeriod}
          />
        }
        case 'species': {
          const {classification, designation, average_height: averageHeight} = selectedItem;
          return <CardInfo
            row1={name}
            row2={classification}
            row3={designation}
            row4={averageHeight}
          />
        }
        case 'starships': {
          const {consumables, crew, manufacturer} = selectedItem;
          return <CardInfo
            row1={name}
            row2={consumables}
            row3={crew}
            row4={manufacturer}
          />
        }
        case 'vehicles': {
          const {model, vehicle_class: vehicleClass, manufacturer} = selectedItem;
          return  <CardInfo
            row1={name}
            row2={model}
            row3={vehicleClass}
            row4={manufacturer}
          />
        }
        default:
          return <></>;
      }
    }
  }

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
          {renderView(selectedItem)}
        </div>
      }
    </div>
  );
}

export default App;
