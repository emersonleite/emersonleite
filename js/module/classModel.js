export class ClassModel {
  // Recebendo dados na instanciação do objeto:
  constructor(itemsList) {
    this.list = document.querySelectorAll(itemsList);
    // Dando um bind em funções callback para referenciamento correto
    //do this.
    this.method03 = this.method03.bind(this);
    this.method04 = this.method04.bind(this);
  }

  //métodos do tipo get. Aqui o retorno é um objeto. Não precisa passar pelo
  // método init()
  get innerTextList() {
    this.elemento1 = this.list[0];
    return {
      elemento1: this.elemento1
    };
  }

  //Método de exemplo que relaciona elementos de uma lista
  method01(items) {
    items.forEach(item => {
      console.log(item);
    });
  }

  //Métodos relacionando elementos de uma lista sem passagem de
  //parâmetro direto
  method02() {
    this.list.forEach(item => {
      item.addEventListener("click", this.method03);
    });
  }

  // Método de callback
  method03(event) {
    console.log("olá");
    console.log(event.currentTarget);
  }

  //Métodos relacionando elementos de uma lista sem passagem de
  //parâmetro direto
  method04() {
    this.list.forEach(item => {
      item.addEventListener("mouseover", this.method05);
    });
  }

  // Método de callback sem event (está comentado), pois esse não é utilizado...
  method05(/* event */) {
    console.log("mouse passado");
    /* console.log(event); */
  }

  /**-------------------------------------------------------------------------------- */

  // MÉTODOS GET E SET

  get method07() {
    const parameter = this._parameter01 || " => saída padrão";
    return "Saída de método com get e set " + parameter;
  }

  set method07(text) {
    this._parameter01 = text;
  }

  // Método GET retornando a própria classe...
  get method08() {
    return this;
  }

  /**-------------------------------------------------------------------------------- */

  // MÉTODOS ESTÁTICOS:
  // Que não dependem de parâmetros de entrada no construtor.
  // Método de classe. A própria classe o chama. Esses métodos e valores associados
  //aparecem no console em __proto__ => constructor

  // Método para mostrar texto no console
  static method06(text) {
    console.log(text);
  }

  // Método estático para retorno do comprimento de uma string
  static stringLength(string) {
    return string.length;
  }

  // Método estático para retorno do número de ouro com n casas
  // decimais
  static goldenNumber() {
    this.number = 1.6180339887498948482045868343656;
    return `O número de ouro com ${this.number.toString().length} casas é ${
      this.number
    }`;
  }

  /**-------------------------------------------------------------------------------- */

  // Função de inicialização!
  init() {
    if (this.list.length) {
      console.log(this.list);
      // Fazendo a chamada dos métodos necessários
      this.method01(this.list);
      this.method02();
      this.method04();
    }
    // retornando this, para que a referência ao objeto não se perca em
    // caso de encadeamento de métodos
    return this;
  }
}

//EXEMPO DE FUNÇÃO EXTENDIDA
/**-------------------------------------------------------------------------------- */

export class modelClassExtended extends ClassModel{

}
