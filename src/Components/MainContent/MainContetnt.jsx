import React, { useState, useEffect } from 'react';
import CurrencyChart from './CurrencyChart';

const MainContent = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currencyInfo, setCurrencyInfo] = useState(null);

  // Ефект викликається при завантаженні компонента
  useEffect(() => {
    const fetchedCurrencies = ['USD', 'EUR', 'GBP'];
    setCurrencies(fetchedCurrencies);
  }, []);

  useEffect(() => {
    const fetchedCurrencyInfo = {
      digitalCode: '840',
      letterCode: 'USD',
      rate: 1.23,
      fullName: 'United States Dollar',
    };
    setCurrencyInfo(fetchedCurrencyInfo);
  }, [selectedCurrency]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Виконати дії після натискання кнопки
    console.log('Обрана валюта:', selectedCurrency);
    console.log('Стартова дата:', startDate);
    console.log('Кінцева дата:', endDate);
  };

  return (
    <div className="MainContent">
      <div className="MainContent__Item">
        <div className="MainContent__Choice">
          <form onSubmit={handleSubmit}>
            <select value={selectedCurrency} onChange={handleCurrencyChange}>
              <option value="">Оберіть валюту</option>
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
            />
            <input type="date" value={endDate} onChange={handleEndDateChange} />
            <button type="submit">Відобразити</button>
          </form>
        </div>
        <div className="MainContent__Info">
        {currencyInfo && (
          <div>
            <p>Цифровий код: {currencyInfo.digitalCode}</p>
            <p>Буквений код: {currencyInfo.letterCode}</p>
            <p>Курс: {currencyInfo.rate}</p>
            <p>Повна назва: {currencyInfo.fullName}</p>
          </div>
        )}
      </div>
      </div>
      <div className="MainContent__Chart">
        <CurrencyChart />
      </div>
    </div>
  );
};

export default MainContent;
