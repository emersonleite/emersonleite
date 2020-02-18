export default class changeImage {
  constructor() {
    this.images = document.querySelectorAll(".social-image");
  }

  addEventImages() {
    this.imagesArray.forEach(img => {
      img.addEventListener("mouseover", this.changeSrc);
    });
  }

  addEventImagesLeave() {
    this.imagesArray.forEach(img => {
      img.addEventListener("mouseleave", event => {
        event.currentTarget.src = event.currentTarget.src.replace(
          "-hover.svg",
          ".svg"
        );
      });
    });
  }

  changeSrc(event) {
    console.log(event.currentTarget.src);
    event.currentTarget.src = event.currentTarget.src.replace(
      ".svg",
      "-hover.svg"
    );
  }

  init() {
    this.imagesArray = [...this.images];
    this.addEventImages();
    this.addEventImagesLeave();
  }
}
