import { PokeCard } from "../PokeCard";
import { CHeader } from "../Header";

export function GeneralHome() {
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"50px" }}>
      <CHeader />
      <PokeCard/>
    </div>
  )
}