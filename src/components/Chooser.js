import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// functional component
const Chooser = ({ handleStockChange }) => {
  const [currStock, setStock] = useState('AAPL');
  console.log(currStock);
  return (
    <div>
      <label>Stock: </label>
      <select
        name={currStock}
        id={currStock}
        onChange={(e) => {
          handleStockChange(e.target.value);
          setStock(e.target.value);
        }}
        value={currStock}
      >
        <option value='AAPL'>Apple</option>
        <option value='TSLA'>Tesla</option>
        <option value='GOOGL'>Google</option>
        <option value='SPY'>S&P500 ETF</option>
      </select>
      <div>currStock</div>
    </div>
  );
};

export default Chooser;
