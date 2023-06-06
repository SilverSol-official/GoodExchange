import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import { Route, Routes } from "react-router";
import Header from "./Components/Shared/Header";
import CurrencyPage from "./Components/CurrencyPage/Currency page";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/:id/*" element={<CurrencyPage />} />{" "}
        <Route path="/" exact element={<MainPage />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
