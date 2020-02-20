export default function tooltipCheat() {
  const anchor = document.querySelector("a[href='/#doc']");
  const divCheat = document.querySelector(".cheat-sheet");
  const maior = window.innerWidth >= 1300;

  const coordenada = {
    X: "",
    Y: "",
    Xalterada: "",
    Yalterada: ""
  };

  coordenadas();

  function coordenadas(){
    if (maior) {
      coordenada.Y = divCheat.offsetTop + anchor.clientHeight / 2;
      coordenada.X = divCheat.offsetLeft + anchor.clientWidth;
    } else {
      coordenada.Y = divCheat.offsetTop + anchor.clientHeight;
      coordenada.X = divCheat.offsetLeft + anchor.clientWidth / 2;
    }
  }

  window.addEventListener('resize', ()=> {
    coordenadas();
  })
 

  anchor.addEventListener("mouseover", onMouseOver);

  const onMouseLeave = {
    element: "",
    handleEvent() {
      this.element.remove();
      anchor.removeEventListener("mouseleave", onMouseLeave);
    }
  };

  function onMouseOver(event) {
    const tooltip = criarTooltipBox(this);
    coordenada.tooltipElement = tooltip;
    const largura = tooltip.clientWidth;
    if (maior) {
      tooltip.style.top = coordenada.Y - tooltip.clientHeight / 2 - 10 + "px";
      tooltip.style.left = coordenada.X + 10 + "px";
    } else {
      tooltip.style.top = coordenada.Y - tooltip.clientHeight + 20 + "px";
      tooltip.style.left = coordenada.X - tooltip.clientWidth / 2 + "px";
    }

    onMouseLeave.element = tooltip;
    anchor.addEventListener("mouseleave", onMouseLeave);
  }

  function criarTooltipBox(element) {
    const box = document.createElement("div");
    const text = element.getAttribute("aria-label");
    box.classList.add("tooltip");
    box.innerText = text;
    document.body.appendChild(box);
    return box;
  }
}
