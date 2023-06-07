import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import { Route, Routes } from "react-router";
import Header from "./Components/Shared/Header";
import CurrencyPage from "./Components/CurrencyPage/Currency page";
import MainCard from './Components/MainCard/MainCard';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/:id/*" element={<MainCard />} />{" "}
        <Route path="/" exact element={<MainPage />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
