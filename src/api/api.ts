import axios from "axios";

const instance = axios.create({
  baseURL: 'https://swapi.dev/api',
});

export const dataAPI = {
  getAllFilms: (inputValue: string) => {
    return instance.get(`/films/?search=${inputValue}`)
      .then(res =>
        res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getAllPeople: (inputValue: string) => {
    return instance.get(`/people/?search=${inputValue}`)
      .then(res =>
        res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getAllPlanets: (inputValue: string) => {
    return instance.get(`/planets/?search=${inputValue}`)
      .then(res =>
        res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },

  getAllSpecies: (inputValue: string) => {
    return instance.get(`/species/?search=${inputValue}`)
      .then(res =>
        res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getAllStarships: (inputValue: string) => {
    return instance.get(`/starships/?search=${inputValue}`)
      .then(res =>
        res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getAllVehicles: (inputValue: string) => {
    return instance.get(`/vehicles/?search=${inputValue}`)
      .then(res =>
        res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },
  getSelectedItem: (group: string, name: string) => {
    return instance.get(`/${group}/?search=${name}`)
      .then(res =>
       res.data.results
      )
      .catch(() => console.error(`Could not fetch url ${URL}`))
  },

}
