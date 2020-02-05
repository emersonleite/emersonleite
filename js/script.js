import Countdown from "./countdown.js";

const timeOnSite = new Countdown("01 March 2020 00:00:00 GMT-0300");
const p = document.querySelector(".countdown p");
const regexp = new RegExp(/(\d{2,})/g);

console.log(timeOnSite.total);

renderTime(timeOnSite);

function format(text) {
  if (!text.match(regexp)) {
    return text.replace(/(\d)/, "0$1");
  } else {
    return text;
  }
}

function renderTime(timeEntry) {
  const t = timeEntry.total;
  const timeOnPage =
    format(`${t.days} dias, `) +
    format(`${t.hours}`) +
    ":" +
    format(`${t.minutes}`) +
    ":" +
    format(`${t.seconds}`);
  p.innerText = timeOnPage;
}

const timer = setInterval(renderTime, 1000, timeOnSite);
