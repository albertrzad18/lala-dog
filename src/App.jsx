import "./App.css";
import AboutPage from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalleryPage from "./pages/Gallery";
import PriceList from "./pages/PriceList";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />}></Route>
        <Route path="/informations" element={<AboutPage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/pricing" element={<PriceList />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
