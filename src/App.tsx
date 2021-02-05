import React, {useEffect, useState} from 'react';
import './App.css';
import {TextAreaField} from "./components/TextAreaField/TextAreaField";
import {dataAPI} from "./api/api";
import {ItemsList} from "./components/ItemsList/ItemsList";

export interface listItemsValueType {
  name: string
  group: string
}

const App = () => {

  const [state, setState] = useState<string>('');
  const [listItemsValue, setListItemsValue] = useState<Array<listItemsValueType>>([]);
  const changeInputValue = (newValue: string) => {
    setState(newValue);
  }

  useEffect(() => {
    if (state.length >= 3) {
      const p1 = dataAPI.getAllFilms(state).then((data) => data.map((el: any)  => ({...el, group: 'Films'})));
      const p2 = dataAPI.getAllPeople(state).then((data) => data.map((el: any)  => ({...el, group: 'People'})));
      const p3 = dataAPI.getAllPlanets(state).then((data) => data.map((el: any)  => ({...el, group: 'Planets'})));
      const p4 = dataAPI.getAllSpecies(state).then((data) => data.map((el: any)  => ({...el, group: 'Species'})));
      const p5 = dataAPI.getAllStarships(state).then((data) => data.map((el: any)  => ({...el, group: 'Starships'})));
      const p6 = dataAPI.getAllVehicles(state).then((data) => data.map((el: any)  => ({...el, group: 'Vehicles'})));
      Promise.all([p1, p2, p3, p4, p5, p6]).then(values => {
        setListItemsValue(values.flat().map((el: any)  => ({name: el.name || el.title, group: el.group})));
      })
    }
  }, [state])

  return (
    <div className="App">
      <div className="AppWrapper">
        <TextAreaField
          value={state}
          changeInputValue={changeInputValue}
        />
        <ItemsList listItemsValue={listItemsValue}/>
      </div>
    </div>
  );
}

export default App;
