import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import Contact from "./view/Contact";
import Notfound from "./view/Notfound";

function App() {
  
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
