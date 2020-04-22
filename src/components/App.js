import React from 'react';
import '../App.css';
import { getData } from '../functions';
import IntradayCandleStickChart from './Chart';

const aapl_week =
  'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=AAPL&interval=5min&apikey=WA6P6PY8NAJ63CDX&datatype=csv';
class App extends React.Component {
  componentDidMount() {
    getData(aapl_week).then((data) => {
      this.setState({ data });
    });
  }
  render() {
    if (this.state == null) {
      return <div> Loading... </div>;
    }
    return (
      <div className='App'>
        <header className='App-header'>
          <p className='title'>AAPL Weekly</p>
          <IntradayCandleStickChart type='hybrid' data={this.state.data} />
        </header>
      </div>
    );
  }
}

export default App;
