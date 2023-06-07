import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

class CurrencyChart extends React.Component {
  chartRef = React.createRef();
  chartInstance = null;

  state = {
    startDate: '',
    endDate: '',
  };

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  handleStartDateChange = (event) => {
    this.setState({ startDate: event.target.value });
  };

  handleEndDateChange = (event) => {
    this.setState({ endDate: event.target.value });
  };

  renderChart() {
    const { startDate, endDate } = this.state;

    // Code to fetch data for the selected date range
    // ...

    // Example data for demonstration purposes
    const data = {
      labels: ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв'],
      datasets: [
        {
          label: 'Курс валюти',
          data: [1.2, 1.3, 1.1, 1.4, 1.2, 1.5],
          fill: false,
          borderColor: 'blue',
        },
      ],
    };

    const options = {
      responsive: true,
    };

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(this.chartRef.current, {
      type: 'line',
      data: data,
      options: options,
    });
  }

  render() {
    return (
      <div className='CurrencyChart'>
    
            <canvas ref={this.chartRef} />
            <div className='CurrencyChart__Select'>
            <div> Оберіть початкову дату : <select value={this.state.startDate} onChange={this.handleStartDateChange}>
          <option value="">Зробіть вибір</option>
          {/* Options for start date */}
                </select>
                </div>
                <br />
                <div> Оберіть кінцеву дату : 
        <select value={this.state.endDate} onChange={this.handleEndDateChange}>
          <option value="">Зробіть вибір</option>
          {/* Options for end date */}
                    </select>
                    </div>
                </div>
      </div>
    );
  }
}

export default CurrencyChart;
