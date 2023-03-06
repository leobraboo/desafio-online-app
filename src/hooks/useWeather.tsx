import { useState } from "react";
import { apiOpenWeather } from "../utils/apis";
import { apiPokemon } from "../utils/apis";

export function useWeather() {
  const [infoPoke, setInfoPoke] = useState("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0bedb362-1325-47fe-8fb8-8a1224de0221/deu1op2-796441d1-4cce-4527-a3c3-d27011691fbd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBiZWRiMzYyLTEzMjUtNDdmZS04ZmI4LThhMTIyNGRlMDIyMVwvZGV1MW9wMi03OTY0NDFkMS00Y2NlLTQ1MjctYTNjMy1kMjcwMTE2OTFmYmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XsnsmjXK0ae5YpGfZoEHwLHpaCbLMoMXu6EpxL1UG0w");
  const [namePoke, setNamePoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [ idPoke, setIdPoke] = useState("");
  const [dataWeather, setDataWeather] = useState({
    city: "",
    temperature: "",
    icon: "",
    main: ""
  })

  const handleCity = (e: any) => {
    setDataWeather({ ...dataWeather, city: e.target.value });
  };

  const answerToPokemon = (temperature: number, weather: string) => {
    if (weather === "Rain") {
      return "electric";
    } else if (temperature < 5) {
      return "ice";
    } else if (temperature >= 5 && temperature < 10) {
      return "water";
    } else if (temperature >= 12 && temperature < 15) {
      return "grass";
    } else if (temperature >= 15 && temperature < 21) {
      return "ground";
    } else if (temperature >= 23 && temperature < 27) {
      return "bug";
    } else if (temperature >= 27 && temperature <= 33) {
      return "rock";
    } else if (temperature > 33) {
      return "fire";
    } else {
      return "normal";
    }
  };

  const handleWeather = async () => {
    const coordResults = await getCoorder();
    await getInfoCity(coordResults.lat, coordResults.lon);
  };

  const getCoorder = async () => {
    const coordResponse = await apiOpenWeather.get(`/geo/1.0/direct?q=${dataWeather.city}&limit=1&appid=${import.meta.env.VITE_APIKEY}`);
    const { lat, lon } = coordResponse.data[0]

    setDataWeather({
      ...dataWeather,
      city: coordResponse.data[0].name
    })

    return { lat, lon }
  }

  const getInfoCity = async (lat: string, lon: string) => {
    const weatherResponse = await apiOpenWeather.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_APIKEY}&units=metric`);
    const { main: { temp }, weather: [{ icon, main }] } = weatherResponse.data;

    handlePokemon(answerToPokemon(temp, main))

    setDataWeather({
      ...dataWeather,
      temperature: temp,
      icon: `http://openweathermap.org/img/w/${icon}.png`,
      main: main
    })

  }

  const getRandomPoke = async (weather: string) => {
    const typeResponse = await apiPokemon.get(`/type/${weather}`);

    const pokemons = typeResponse.data.pokemon;
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    const name = pokemons[randomIndex].pokemon.name;
    
    return name;
  }

  const handlePokemon = async (weather: string): Promise<void> => {
    try {
      let pokeRandom = await getRandomPoke(weather)
      const existsPoke = localStorage.getItem("namePoke")

      if (pokeRandom === existsPoke) {
        return handlePokemon(weather)
      }

      localStorage.setItem("namePoke", pokeRandom)
      setLoading(true)
      const infoPokeResponse = await apiPokemon.get(`/pokemon/${pokeRandom}`);
      setLoading(false)
      setNamePoke(pokeRandom);
      setInfoPoke(infoPokeResponse.data.sprites.front_default);
      setIdPoke(infoPokeResponse.data.id);

    } catch (error) {
      console.error(error);
    }
  }

  return { idPoke, infoPoke, namePoke, loading, dataWeather, handleWeather, handleCity, getInfoCity }
}