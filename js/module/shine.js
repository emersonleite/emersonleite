export default function shine() {
  console.log("ola");

  const foto = document.querySelector("img[src^='img/logo.svg']");

  const callback = () => {
    console.log("clicado");
    foto.classList.add("ativo");
  };

  const inativo = () => {
    foto.classList.remove("ativo");
  };

  foto.addEventListener("mouseover", callback);
  foto.addEventListener("mouseleave", inativo);
}
