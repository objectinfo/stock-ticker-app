import React, { useState, useEffect } from 'react';
import '../App.css';
import { getData } from '../functions';
import IntradayCandleStickChart from './Chart';
import Chooser from './Chooser';

const App = () => {
  const [stock, setStock] = useState('AAPL');
  const [data, setData] = useState();

  const tickerToURL = {
    AAPL:
      'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=AAPL&interval=5min&apikey=A7RZA7S9ARGPJG1Q&datatype=csv',
    GOOGL:
      'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=GOOGL&interval=5min&apikey=A7RZA7S9ARGPJG1Q&datatype=csv',
    TSLA:
      'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=TSLA&interval=5min&apikey=A7RZA7S9ARGPJG1Q&datatype=csv',
    SPY:
      'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=SPY&interval=5min&apikey=A7RZA7S9ARGPJG1Q&datatype=csv',
  };

  useEffect(() => {
    getData(tickerToURL[stock]).then((output) => {
      setData(output);
    });
  });

  function onStockChange(ticker) {
    setStock(ticker);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p className='title'>Weekly Chart Data</p>
        <Chooser handleStockChange={onStockChange} />
      </header>
      <body>
        {/* <IntradayCandleStickChart type='hybrid' data={data} /> */}
        <p className='signoff'>by Justin Choi</p>
      </body>
    </div>
  );
};

export default App;
