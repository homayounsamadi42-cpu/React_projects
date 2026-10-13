import DynamicButton from "./compnents/button/DynamicButton";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services"
import About from "./pages/About";
import Blog from "./pages/Blog";
import Doctors from "./pages/Doctors";


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Doctors" element={<Doctors/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
