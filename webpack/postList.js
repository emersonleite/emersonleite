import modal from "./module/modal.js";
import tooltipCheat from "./module/tooltip-cheat.js";
import changeImage from './module/changeImage.js'

modal();
tooltipCheat();

const Images = new changeImage();
Images.init();

const summary = document.querySelectorAll(".post-summary");
console.log(summary);

const summaryArray = [... summary];
summary.forEach(item => {
  item.nextElementSibling.classList.add('formacao');
})