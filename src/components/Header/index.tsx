import { Spinner } from 'react-bootstrap';
import { ContentHeader, Header } from './style';
import { useContext } from 'react';
import { GlobalContext } from '../../context/WeatherContext';

export function CHeader() {

  const { dataWeather, loading } = useContext(GlobalContext) as { dataWeather: any, loading: string };

  return (
    <Header>
      {loading &&
        <div style={{ width: "35%", height: "60px", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Spinner animation="border" style={{}} />
        </div>
      }
      <ContentHeader>
        <img src={dataWeather.icon} />
        {dataWeather.city ? <p> {dataWeather.city} </p> : "-"}

        {dataWeather.temperature ? <p> {dataWeather.temperature} ºC </p> : "-"}

        {dataWeather.description ? <p>{dataWeather.description}</p> : "-"}
      </ContentHeader>
    </Header>
  )
}