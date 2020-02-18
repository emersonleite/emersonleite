import modal from "./module/modal.js";
import tooltipCheat from "./module/tooltip-cheat.js";
import changeImage from './module/changeImage.js'

modal();
tooltipCheat();

const Images = new changeImage();
Images.init();

