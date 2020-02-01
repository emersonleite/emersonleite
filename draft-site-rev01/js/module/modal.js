export default function modal() {
  // Função de callback para Teclas CRTL + Alt + 'd'
  function callback() {
    const lastSection = document.querySelector("footer");
    const body = document.body;

    const newSection = document.createElement("section");
    newSection.setAttribute("data-modal", "true");
    const newDiv = document.createElement("div");
    newSection.appendChild(newDiv);

    const newButton = document.createElement("div");
    newButton.innerHTML = "<p>X</p>";
    newDiv.appendChild(newButton);

    //lastSection.append(newSection);
    body.insertBefore(newSection, lastSection);

    // Evento de fechamento da janela
    newButton.addEventListener("click", () => {
      window.addEventListener("keyup", keyupCallback);
      newSection.remove();
    });

    // Evento de click fora da div de conteúdo
    newSection.addEventListener("click", event => {
      if (event.target === newSection) {
        newSection.remove();
        window.addEventListener("keyup", keyupCallback);
      }
    });
    sectionObject.element = newSection;
  }

  // Função de callbak para evento de botão
  const callbackPrevent = event => {
    event.preventDefault();
    callback();
    if (sectionObject.element) {
      window.removeEventListener("keyup", keyupCallback);
    }
  };

  // Criando janela de DOC com botão
  const docButton = document.querySelector('[href^="/#doc"]');
  docButton.addEventListener("click", callbackPrevent);

  // Criando janela de DOC com Teclas CRTL + Alt + 'd'
  function keyupCallback(event) {
    if (event.ctrlKey && event.altKey && event.key === "d") {
      callback();
    }
    if (sectionObject.element) {
      window.removeEventListener("keyup", keyupCallback);
    }
  }

  window.addEventListener("keyup", keyupCallback);

  const sectionObject = {
    element: ""
  };
}
