import React, { useState } from "react";
import CurrencyChart from "./CurrencyChart";

const MainCard = ({ currencyCard }) => {
    const name = "USD";
    const fullName = "Американський Долар"
    const symbol = "$"
    const rate = 10000;
    const marketCup = 10000000;
    const updateTime = "01.06.2023";
    const schedule = "Графік";

    const handleButtonClick = (period) => {
        // Обробник події для кнопок
        console.log(`Ви натиснули на кнопку з періодом: ${period}`);
    };

    return (
        
            <div className="MainCard">
            <div className="MainCard__Info">
                <div className="MainCard__SymbolName">{symbol}{fullName} </div>
                <div className="MainCard__Name">{name}</div>
                <div className="MainCard__Rate"> <span className="Grey">Вартість</span>  <br /> {rate}</div>
                <div className="MainCard__MarketCup"><span className="Grey">Капіталізація:</span> <br /> {marketCup}</div>
                <div className="MainCard__UpdateTime"><span className="Grey">Дата розрахунку:</span> <br /> {updateTime} </div>
            </div>
            <div className="MainCard__Graf__Container">
            <div className="MainCard__Graf">
            <CurrencyChart />
            
            </div>
            <div className="MainCard__Buttons">
                    <button onClick={() => handleButtonClick('1 день')}>1 день</button>
                    <button onClick={() => handleButtonClick('1 тиждень')}>1 тиждень</button>
                    <button onClick={() => handleButtonClick('1 місяць')}>1 місяць</button>
                    <button onClick={() => handleButtonClick('за весь час')}>за весь час</button>
                </div>
            
            </div>
            </div>
    )
};

export default MainCard;
