// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
/** Consultei a documentação de W3Schools sobre método .split() para resolução deste problema. */
/** Source: https://www.w3schools.com/jsref/jsref_split.asp */
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
/** Obtive a ajuda do colega Renato Bispo para entender melhor a refatoração das funções. Imensamente agradecido! */
/** A forma de fazer o if feita nas funções foi retirada de DevMedia.com.br */
/** Source: https://www.devmedia.com.br/javascript-estrutura-condicional-if/40611#:~:text=A%20estrutura%20condicional%20if%20permite,uma%20determinada%20condi%C3%A7%C3%A3o%20for%20verdadeira.&text=Nesse%20exemplo%2C%20a%20instru%C3%A7%C3%A3o%20console,preco%20for%20maior%20que%20100 */
function maxCount(numbers) {
  let highestNumber = 0;
  for (let arrayCount = 0; arrayCount < numbers.length; arrayCount += 1) {
    if (numbers[arrayCount] > highestNumber) highestNumber = numbers[arrayCount];
  }
  return highestNumber;
}

function highestCount(numbers) {
  let numMax = maxCount(numbers);
  let countNum = 0;
  for (let arrayCount = 0; arrayCount < numbers.length; arrayCount += 1) {
    if (numMax === numbers[arrayCount]) countNum += 1;
  }
  return countNum;
}

// Desafio 7
/** Para tratar os números contidos nos parâmentros, foi utilizada a função Math.abs() */
/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs */
function catAndMouse(mouse, cat1, cat2) {
  let result;
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);

  if (distance1 < distance2) result = 'cat1';
  if (distance1 > distance2) result = 'cat2';
  if (distance1 === distance2) result = 'os gatos trombam e o rato foge';

  return result;
}
// Desafio 8
/** Agradecimentos ao queriado colega Filizzola, que me ajudou a refatorar o código para que o mesmo passasse nos testes do ESLint! */
function fizzBuzz(array) {
  let arrayResult = [];
  for (let index = 0; index < array.length; index += 1) {
    let mult3 = array[index] % 3 === 0;
    let mult5 = array[index] % 5 === 0;
    arrayResult[index] = 'bug!';
    if (array[index] % 15 === 0) {
      arrayResult[index] = 'fizzBuzz';
    } else if (mult3) {
      arrayResult[index] = 'fizz';
    } else if (mult5) {
      arrayResult[index] = 'buzz';
    }
  }
  return arrayResult;
}

// Desafio 9
/** Foi verificada a informação no site DevMedia sobre o funcionamento da função .replace() */
/** Source: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176 */
function encode(phrase) {
  for (let index = 0; index < phrase.length; index += 1) {
    phrase = phrase.replace('a', '1');
    phrase = phrase.replace('e', '2');
    phrase = phrase.replace('i', '3');
    phrase = phrase.replace('o', '4');
    phrase = phrase.replace('u', '5');
  }
  return phrase;
}

function decode(phrase) {
  for (let index = 0; index < phrase.length; index += 1) {
    phrase = phrase.replace('1', 'a');
    phrase = phrase.replace('2', 'e');
    phrase = phrase.replace('3', 'i');
    phrase = phrase.replace('4', 'o');
    phrase = phrase.replace('5', 'u');
  }
  return phrase;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
