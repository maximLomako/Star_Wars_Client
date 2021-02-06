import axios from "axios";

const instance = axios.create({
  baseURL: 'https://swapi.dev/api',
});

const getRecourse = (url: string) => instance.get(url).then(res =>
  res.data.results)
  .catch(() => console.error(`Could not fetch url ${URL}`))

export const dataAPI = {
  getAllFilms: (inputValue: string) => getRecourse(`/films/?search=${inputValue}`),
  getAllPeople: (inputValue: string) => getRecourse(`/people/?search=${inputValue}`),
  getAllPlanets: (inputValue: string) => getRecourse(`/planets/?search=${inputValue}`),
  getAllSpecies: (inputValue: string) => getRecourse(`/species/?search=${inputValue}`),
  getAllStarships: (inputValue: string) => getRecourse(`/starships/?search=${inputValue}`),
  getAllVehicles: (inputValue: string) => getRecourse(`/vehicles/?search=${inputValue}`)
}