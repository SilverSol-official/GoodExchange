import React, { useState, useEffect } from "react";
import CurrencyChart from "./CurrencyChart";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrency } from "../../rdx/features/Currencies/currencies";
import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";

const MainContent = () => {
  const { id } = useParams();
  const curData = useSelector((state) => state.currency.oneCurrencyData);
  const dispatch = useDispatch();
  const statusOne = useSelector((state) => state.currency.oneCurrencyStatus);
  const errorOne = useSelector((state) => state.currency.oneCurrencyError);

  console.log(curData);
  console.log("status", statusOne);
  console.log(curData[0]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    dispatch(fetchCurrency(id));
  }, [dispatch, id]);

  // Ефект викликається при завантаженні компонента

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Виконати дії після натискання кнопки

    console.log("Стартова дата:", startDate);
    console.log("Кінцева дата:", endDate);
  };

  const statusCheck = () => {
    if (statusOne === "loading" && errorOne === null) {
      return <h2>Loading...</h2>;
    } else if (errorOne != null) {
      return <h2>An error occured: {errorOne}</h2>;
    } else if (curData !== {}) {
      const { cc, exchangedate, r030, rate, txt } = curData[0];
      return (
        <div>
          <p>Цифровий код: {r030}</p>
          <p>Буквений код: {cc}</p>
          <p>Курс: {rate}</p>
          <p>Повна назва: {txt}</p>
          <p>Дата оновлення: {exchangedate}</p>
        </div>
      );
    }
  };

  // const statusCheck = () => {
  //   if (curData === {} && statusOne === "loading") {
  //     return <h2>Loading...</h2>;
  //   } else if (statusOne === "rejected") {
  //     return <h2>Error!</h2>;
  //   } else {
  //     const { cc, exchangedate, r030, rate, txt } = curData[0];
  //     return (
  //       <div>
  //         <p>Цифровий код: {r030}</p>
  //         <p>Буквений код: {cc}</p>
  //         <p>Курс: {rate}</p>
  //         <p>Повна назва: {txt}</p>
  //         <p>Дата оновлення: {exchangedate}</p>
  //       </div>
  //     );
  //   }
  // };

  return (
    <div className="MainContent">
      <div className="MainContent__Item">
        <div className="MainContent__Choice">
          <form onSubmit={handleSubmit}>
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
            />
            <input type="date" value={endDate} onChange={handleEndDateChange} />
            <button type="submit">Відобразити</button>
          </form>
        </div>
        <div className="MainContent__Info">{statusCheck()}</div>
      </div>
      <div className="MainContent__Chart">
        <CurrencyChart />
      </div>
    </div>
  );
};

export default MainContent;
