import { csvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';

function parseData(parse) {
  return function (d) {
    d.timestamp = parse(d.timestamp);
    d.open = +d.open;
    d.high = +d.high;
    d.low = +d.low;
    d.close = +d.close;
    d.volume = +d.volume;

    return d;
  };
}

// const parseDateTimeIntraday = timeParse('%Y-%m-%d %H:%M:%S');
const parseDateTimeWeekly = timeParse('%Y-%m-%d');

export function getData(url) {
  const promiseIntraDayContinuous = fetch(url)
    .then((response) => response.text())
    .then((data) => csvParse(data, parseData(parseDateTimeWeekly)))
    .then((data) => {
      data.sort((a, b) => {
        return a.timestamp - b.timestamp;
      });
      return data;
    });
  return promiseIntraDayContinuous;
}
