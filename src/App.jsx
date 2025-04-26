import "./App.css";
import AboutPage from "./components/pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
