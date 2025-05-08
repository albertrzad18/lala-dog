import "./App.css";
import AboutPage from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalleryPage from "./pages/Gallery";
import PriceList from "./pages/PriceList";
import ContactPage from "./pages/Contact";
import OfferPage from "./pages/Offer";
import StatutePage from "./pages/Statute";
import DogsPage from "./pages/Dogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />}></Route>
        <Route path="/aboutMe" element={<AboutPage />}></Route>
        <Route path="/offer" element={<OfferPage />}></Route>
        <Route path="/priceList" element={<PriceList />}></Route>
        <Route path="/dogs" element={<DogsPage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/statute" element={<StatutePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
