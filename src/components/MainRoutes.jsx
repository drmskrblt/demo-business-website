import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Datenschutz from "../pages/Datenschutz";
import Impressum from "../pages/Impressum";

const MainRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Services />} />
      <Route path="/produkte" element={<Products />} />
      <Route path="/ueber-uns" element={<AboutUs />} />
      <Route path="/kontakt" element={<Contact />} />

      <Route path="/datenschutz" element={<Datenschutz/>}/>
      <Route path="/impressum" element={<Impressum/>}/>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
