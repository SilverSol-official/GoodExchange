import React, { useState, useEffect } from "react";
import CurrencyChart from "./CurrencyChart";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrency,
  fetchDateCurrency,
} from "../../rdx/features/Currencies/currencies";
import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";

const MainContent = () => {
  const { id } = useParams();
  const curData = useSelector((state) => state.currency.oneCurrencyData);
  const statusOne = useSelector((state) => state.currency.oneCurrencyStatus);
  const errorOne = useSelector((state) => state.currency.oneCurrencyError);
  const statusDate = useSelector((state) => state.currency.dateCurrencyStatus);
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    dispatch(fetchCurrency(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log(statusDate);
  }, [statusDate]);
  // Ефект викликається при завантаженні компонента

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  // Виконати дії після натискання кнопки
  const handleSubmit = (event) => {
    event.preventDefault();
    let start = "" + startDate.replace("-", "").replace("-", "");
    let end = "" + endDate.replace("-", "").replace("-", "");

    start = start.split("");
    end = end.split("");
    if (start[6] == "0") {
      start[6] = start[7];
      start[7] = "";
    }
    if (end[6] == "0") {
      end[6] = end[7];
      end[7] = "";
    }
    start = start.join("");
    end = end.join("");
    dispatch(
      fetchDateCurrency({
        cur: curData[0].cc,
        startDate: start,
        endDate: end,
      })
    );
    console.log("Стартова дата:", start);
    console.log("Кінцева дата:", end);
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
        {statusDate === "resolved" ? <CurrencyChart /> : <></>}
      </div>
    </div>
  );
};

export default MainContent;
