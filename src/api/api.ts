import axios from "axios";
import {log} from "util";

const instance = axios.create({
  baseURL: 'https://swapi.dev/api',
});

export const dataAPI = {
  getData: () => {
    return instance.get('')
      .then(res =>
        res.data
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getAllFilms: () => {
    return instance.get(`/films/`)
      .then(res =>
        res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getFilm: (id: number) => {
    return instance.get(`/films/${id}/`)
      .then(res =>
        res.data
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },

  getAllPeople: () => {
    return instance.get(`/people/`)
      .then(res =>
        res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getPerson: (id: number) => {
    return instance.get(`/people/${id}/`)
      .then(res =>
        console.log(res.data)
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getAllPlanets: () => {
    return instance.get(`/planets/`)
      .then(res =>
        res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getPlanet: (id: number) => {
    return instance.get(`/planets/${id}/`)
      .then(res =>
        res.data
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getAllSpecies: () => {
    return instance.get(`/species/`)
      .then(res =>
        res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getSpecie: (id: number) => {
    return instance.get(`/species/${id}/`)
      .then(res =>
        res.data
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getAllStarships: () => {
    return instance.get(`/starships/`)
      .then(res =>
        res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getStarship: (id: number) => {
    return instance.get(`/starships/${id}/`)
      .then(res =>
        res.data
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getAllVehicles: () => {
    return instance.get(`/vehicles/`)
      .then(res =>
        res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getVehicles: (id: number) => {
    return instance.get(`/vehicles/${id}/`)
      .then(res =>
        res.data
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  }
}