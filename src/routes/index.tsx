import {Routes, Route } from "react-router-dom";
import { Home } from "../page";


export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="*" element={<Home/>}></Route>
    </Routes>
  )
}