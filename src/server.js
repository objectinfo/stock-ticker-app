import * as Stocks from 'stocks.js';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let stockData = new Stocks('WA6P6PY8NAJ63CDX');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;
app.set('port', port);

app.get('/stocks', (req, res) => {
  const options = {
    symbol: 'AAPL',
    interval: 'weekly',
    amount: 52,
  };
  stockData.timeSeries(options).then((results) => {
    res.send(results);
  });
});

app.listen(app.get('port'), () => {
  console.log('Listening on ' + app.get('port') + '...');
});

// WA6P6PY8NAJ63CDX  api key for alphavantage
