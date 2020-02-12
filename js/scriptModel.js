//importando módulos necessários... 

import {ClassModel} from './module/classModel.js';
import {modelClassExtended} from './module/classModel.js'

/**-------------------------------------------------------------- */
// Instanciando a classe ClasseModel
const classModel = new ClassModel('.lista li');
const classModel2 = new ClassModel('.lista2 li');

/**-------------------------------------------------------------- */
//inicializando a classe. Isso também pode ser feito
// colocando o método init() dentro do construtor,
//sendo que a chamada se daria, nesse caso, por lá...
classModel.init();
classModel2.init();
/**-------------------------------------------------------------- */

// Acesso a elemento direto da classe. Metodo do tipo get
console.log(classModel.innerTextList.elemento1);

/**-------------------------------------------------------------- */

//Método estático. A própria classe o chama
ClassModel.method06('olá');

/**-------------------------------------------------------------- */

//O retorno do método de classe pode se dar através de valores... 
const numeroDeOuro = ClassModel.goldenNumber();
console.log(numeroDeOuro);

/**-------------------------------------------------------------- */

// Outro retorno
const tamanho = ClassModel.stringLength('Emerson');
console.log(tamanho);

/**-------------------------------------------------------------- */

// Utilizando get e set para definir valores

// Utilizando valor padrão '=> saída padrão'
console.log(classModel.method07);
// 'Saída de método com get e set  => saída padrão'


//Atribuindo outro valor a method07 diferente do padrão
classModel.method07 = "teste";
console.log(classModel.method07);
// 'Saída de método com get e set teste'

/**-------------------------------------------------------------- */

console.log(classModel);

console.log(classModel.method08);