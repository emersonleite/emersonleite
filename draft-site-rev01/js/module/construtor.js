export default function Element(element) {
  this.element = element;

  this.all = function() {
    return document.querySelectorAll(this.element);
  };

  this.one = function() {
    return document.querySelector(this.element);
  };
}
