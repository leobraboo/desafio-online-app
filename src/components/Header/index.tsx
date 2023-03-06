import { Button, Form } from 'react-bootstrap';
import { Header } from './style';
import { useContext } from 'react';
import { GlobalContext } from '../../context/WeatherContext';

export function CHeader() {

  const { dataWeather } = useContext(GlobalContext) as { dataWeather: any };

  return (
    <Header>
      <img src={dataWeather.icon} />
      { dataWeather.city ?  <p> {dataWeather.city} </p> : "-"  }
      
      {dataWeather.temperature ? <p> {dataWeather.temperature} ºC </p> : "-"}

      {dataWeather.main ? <p>{dataWeather.main}</p> : "-" }


    </Header>
  )
}