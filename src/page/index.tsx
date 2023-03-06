import { GeneralHome } from "../components/Home";
import { Navbar } from "../components/NavBar";
import { GlobalProvider } from "../context/WeatherContext";

export function Home() {
  return (
    <>
      <GlobalProvider>
        <Navbar />
        <GeneralHome />
      </GlobalProvider>
    </>
  )
}