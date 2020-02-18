const instantsearch = require('instantsearch.js');

import accordion from "./module/accordion.js";
import modal from "./module/modal.js";
import shine from "./module/shine.js";
import tooltip from "./module/tooltip-foto.js";
import tooltipCheat from "./module/tooltip-cheat.js";
import Countdown from "./module/countdown";
/* import ChangeImageLogo from './module/changeImageLogo.js' */
import changeImage from './module/changeImage.js'


accordion();
modal();
/* shine(); */
tooltip();
tooltipCheat();

const Images = new changeImage();
Images.init();

const inicioSite = new Countdown("29 February 2020 23:59:59 GMT-0300");




const search = instantsearch({
  appId: '2ASI6PELEP',
  apiKey: '72edcee285e2dc9b9dda7824e25b7131',
  indexName: 'emersonleite',
  routing: true
});

search.start();





