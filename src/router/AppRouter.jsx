import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import About from "../pages/about/About"
import Detail from "../pages/detail/Detail"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="" element={<Login/>}/>
        <Route path="" element={<About/>}/>
        <Route path="" element={<Detail/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default AppRouter
