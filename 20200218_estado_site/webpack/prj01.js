import ToFetch from "./module/tofetch.js";
import changeImage from './module/changeImage.js'
import modal from "./module/modal.js";
import tooltipCheat from "./module/tooltip-cheat.js";

// inicializando fetch
const tofetch = new ToFetch();
tofetch.init();

// Imagens do footer
const Images = new changeImage();
Images.init();

//Carregando modal
modal();

// Carregando tooltip
tooltipCheat();


//tofetch.anyFetch("https://blockchain.info/ticker");

/* https://blockchain.info/ticker */

/* "https://api.myjson.com/bins/xi3hi" */

/* https://reqres.in/api/users?page=2 */

/* https://api.github.com/users/emersonleite */

