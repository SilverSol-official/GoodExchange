import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const CurrencyChart = () => {
  const chartRef = useRef();
  let chartInstance = null;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    renderChart();
  }, [startDate, endDate]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const renderChart = () => {
    const data = {
      labels: ["", "Лют", "Бер", "Квіт", "Трав", "Черв"],
      datasets: [
        {
          label: "Курс валюти",
          data: [10, 1.3, 1.1, 1.4, 1.2, 1.5],
          fill: false,
          borderColor: "blue",
        },
      ],
    };

    const options = {
      responsive: true,
    };

    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(chartRef.current, {
      type: "line",
      data: data,
      options: options,
    });
  };

  return (
    <div className="CurrencyChart">
      <canvas ref={chartRef} />
    </div>
  );
};

export default CurrencyChart;
