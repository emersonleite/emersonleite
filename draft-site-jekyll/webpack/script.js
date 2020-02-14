import accordion from "./module/accordion.js";
import modal from "./module/modal.js";
/*import Element from "./module/construtor.js";*/
import shine from "./module/shine.js";
import tooltip from "./module/tooltip-foto.js";
import tooltipCheat from "./module/tooltip-cheat.js";
import Countdown from "./module/countdown";
import changeImage from './module/changeImage.js'


accordion();
modal();
shine();
tooltip();
tooltipCheat();

const Images = new changeImage();
Images.init();



const inicioSite = new Countdown("29 February 2020 23:59:59 GMT-0300");
/* console.log(inicioSite); */




