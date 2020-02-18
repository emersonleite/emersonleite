export default function accordion() {
  //Selecionando elementos
  const elemento = document.querySelectorAll("[data-accordion-boolean='true']");
  const accordion = "data-accordion";

  elemento.forEach(item => {
    item.parentElement.nextElementSibling.setAttribute(accordion, "");
  });

  //Add event listener
  elemento.forEach(item => {
    item.addEventListener("click", () => {
      if (item.parentElement.nextElementSibling.getAttribute(accordion)) {
        item.parentElement.nextElementSibling.setAttribute(accordion, "");
      } else {
        item.parentElement.nextElementSibling.setAttribute(accordion, "ativo");
      }
    });
  });
}
