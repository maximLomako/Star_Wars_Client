import React, {useEffect, useState} from 'react';
import './App.css';
import {TextAreaField} from "./components/TextAreaField/TextAreaField";
import {dataAPI} from "./api/api";
import {ItemsList} from "./components/ItemsList/ItemsList";
import {FilmDetail} from "./components/FilmDetail/FilmDetail";
import {PersonDetail} from "./components/PersonDetail/PersonDetail";
import {PlanetDetail} from "./components/PlanetDetail/PlanetDetail";
import {StarshipDetail} from "./components/StarshipDetail/StarshipDetail";
import {VehicleDetail} from "./components/VehicleDetail/VehicleDetail";
import {SpecieDetail} from "./components/SpecieDetail/SpecieDetail";

export interface listItemsValueType {
  name: string
  group: string
}

const App = () => {

  const [state, setState] = useState<string>('');
  const [listItemsValue, setListItemsValue] = useState<Array<listItemsValueType>>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null)
  let view;

  const changeInputValue = (newValue: string) => {
    setState(newValue);
  }
  const selectItem = (group: string, name: string) => {
    dataAPI.getSelectedItem(group, name)
      .then((data) => data.map((el: any) => ({...el, group})))
      .then((res) => setSelectedItem(res));
  }

  useEffect(() => {
    if (state.length >= 3) {
      const p1 = dataAPI.getAllFilms(state)
        .then((data) => data.map((el: any) => ({...el, group: 'films'})));
      const p2 = dataAPI.getAllPeople(state)
        .then((data) => data.map((el: any) => ({...el, group: 'people'})));
      const p3 = dataAPI.getAllPlanets(state)
        .then((data) => data.map((el: any) => ({...el, group: 'planets'})));
      const p4 = dataAPI.getAllSpecies(state)
        .then((data) => data.map((el: any) => ({...el, group: 'species'})));
      const p5 = dataAPI.getAllStarships(state)
        .then((data) => data.map((el: any) => ({...el, group: 'starships'})));
      const p6 = dataAPI.getAllVehicles(state)
        .then((data) => data.map((el: any) => ({...el, group: 'vehicles'})));
      Promise.all([p1, p2, p3, p4, p5, p6]).then(values => {
        setListItemsValue(values.flat().map((el: any) => ({name: el.name || el.title, group: el.group})));
      })
    }
  }, [state])

  if (selectedItem) {
    const {group, name} = selectedItem[0];
    switch (group) {
      case 'films': {
        const {title, director, producer, episode_id: episodId} = selectedItem[0];
        view = <FilmDetail
          title={title}
          director={director}
          producer={producer}
          episodId={episodId}
        />
      }
        break;
      case 'people': {
        const {gender, height, hair_color: hairColor} = selectedItem[0];
        view = <PersonDetail
          name={name}
          gender={gender}
          height={height}
          hairColor={hairColor}
        />
      }
        break;
      case 'planets': {
        const {diameter, rotation_period: rotationPeriod, orbital_period: orbitalPeriod} = selectedItem[0];
        view = <PlanetDetail
          name={name}
          diameter={diameter}
          rotationPeriod={rotationPeriod}
          orbitalPeriod={orbitalPeriod}
        />
      }
        break;
      case 'species': {
        const {classification, designation, average_height: averageHeight} = selectedItem[0];
        view = <SpecieDetail
          name={name}
          classification={classification}
          designation={designation}
          averageHeight={averageHeight}
        />
      }
        break;
      case 'starships': {
        const {consumables, crew, manufacturer} = selectedItem[0];
        view = <StarshipDetail
          name={name}
          consumables={consumables}
          crew={crew}
          manufacturer={manufacturer}
        />
      }
        break;
      case 'vehicles': {
        const {model, vehicle_class: vehicleClass, manufacturer} = selectedItem[0];
        view = <VehicleDetail
          name={name}
          model={model}
          vehicleClass={vehicleClass}
          manufacturer={manufacturer}
        />
      }
        break;
      default:
        view = null;
        break;
    }
  }

  return (
    <div className="App">
      <div className="AppWrapper">
        <TextAreaField
          value={state}
          changeInputValue={changeInputValue}
        />
        <ItemsList
          listItemsValue={listItemsValue}
          selectItem={selectItem}
        />
        {view}
      </div>
    </div>
  );
}

export default App;
