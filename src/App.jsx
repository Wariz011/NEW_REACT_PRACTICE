import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headerpage from "./headerpage";
import Homepage from "./homepage";
import Gallerypage from "./gallery";
import Servicepage from "./servicepage";
import Aboutpage from "./about";
import './App.css'
import Contactpage from "./contact";
import Footerpage from "./footer";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
function App() {
  const [isOpen, setIsopen] = useState(true)
  return (
    <>
    <button className="button-clicked" onClick={function(){
      setIsopen(true)
    }}><CiMenuBurger /></button>
    {
      isOpen && (<Headerpage isOpen ={isOpen} setIsopen={setIsopen}/>)
    }
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/gallery" element={<Gallerypage />} />
        <Route path="/service" element={<Servicepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footerpage />
    </>
  )
}

export default App;