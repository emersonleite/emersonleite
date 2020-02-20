export default function tooltip() {
  const photo = document.querySelector('img[src="img/Foto.png"]');
  const divFoto = document.querySelector(".div-foto");
  const maior620 = window.innerWidth >= 620;

  const coordenada = {
    X: "",
    Y: "",
    Xalterada: "",
    Yalterada: ""
  };

  coordenadas();

  function coordenadas(){
    if (maior620) {
      coordenada.Y = divFoto.offsetTop + photo.clientHeight / 2;
      coordenada.X = divFoto.offsetLeft + photo.clientWidth;
    } else {
      coordenada.Y = divFoto.offsetTop + photo.clientHeight;
      coordenada.X = divFoto.offsetLeft + photo.clientWidth / 2;
    }
    return {
      Y: coordenada.Y,
      X: coordenada.X,
    }
  }

  window.addEventListener('resize', ()=> {
    coordenadas();
    //console.log(coordenadas()['X']);
  })
  
  photo.addEventListener("mouseover", onMouseOver);

  const onMouseLeave = {
    element: "",
    handleEvent() {
      this.element.remove();
      photo.removeEventListener("mouseleave", onMouseLeave);
    }
  };

  function onMouseOver(event) {
    const tooltip = criarTooltipBox(this);
    coordenada.tooltipElement = tooltip;
    const largura = tooltip.clientWidth;

    if (maior620) {
      tooltip.style.top = coordenada.Y - tooltip.clientHeight / 2 + "px";
      tooltip.style.left = coordenada.X + 2 + "px";
    } else {
      tooltip.style.top = coordenada.Y + 2 + "px";
      tooltip.style.left = coordenada.X - tooltip.clientWidth / 2 + "px";
    }

    onMouseLeave.element = tooltip;
    photo.addEventListener("mouseleave", onMouseLeave);
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
