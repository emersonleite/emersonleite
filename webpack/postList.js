import modal from "./module/modal.js";
import tooltipCheat from "./module/tooltip-cheat.js";
import changeImage from './module/changeImage.js'

modal();
tooltipCheat();

const Images = new changeImage();
Images.init();

const summary = document.querySelectorAll(".post-summary");

const summaryArray = [... summary];
summaryArray.forEach(item => {
  item.nextElementSibling.classList.add('formacao');
});