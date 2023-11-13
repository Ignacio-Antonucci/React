import { BrowserRouter, Routes, Route} from "react-router-dom"


import "./App.css"

import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import { Error404 } from "./components/Error404"

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Productos"/>}></Route>
        <Route path="/category/:id" element={<ItemListContainer greeting="Productos"/>}></Route>
        <Route path="/items/:id" element={<div>Detalle</div>}></Route>
        <Route path="*" element={<Error404 />}/>
      </Routes>
    
    </BrowserRouter>
    )
}

export default App