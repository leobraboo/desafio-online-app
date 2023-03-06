import axios from "axios";
const apiPokemon =axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

const apiOpenWeather = axios.create({
  baseURL: 'https://api.openweathermap.org'
});

export { apiPokemon, apiOpenWeather }