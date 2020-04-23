# Stock Ticker App

## Made by: Justin Choi

Hi there! Simple stock visualization app that I made, where you can choose between `AAPL, TSLA, GOOGL` or `$SPY`, but obviously it could be scaled to something larger. Just made it small as a code sample to submit, but if you have any questions, feel free to reach out to me! The scripts are as follows to run the app:

- Clone it to your own computer
- `npm start`: will run it on `localhost:3000`

_NOTE_: This project uses alphavantage, which is a free stock stock data api, but sometimes when you have too many requests, no more datat is sent to your app; just so it runs, I've commented out a line in `/src/Components/App.js` within the return that says `IntradayCandleStickChart`, so just uncomment that line to test to see if it starts working again. If not, my apologies, the API probably has capped out how many times I can access the stock data ://
