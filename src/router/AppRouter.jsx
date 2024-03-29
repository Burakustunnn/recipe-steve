import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "../components/globalStyles/GlobalStyles";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="about" element={<PrivateRouter />}>
          <Route index element={<About />} />
        </Route>

        <Route path="detail" element={<PrivateRouter />}>
          <Route index element={<Detail />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
