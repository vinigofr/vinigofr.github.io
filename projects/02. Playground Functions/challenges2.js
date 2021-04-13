// Desafio 10
/** Obrigado ao amigo Vitor Cardoso e Marlon pela ajuda! */
/** Foi usado como referência para resolução deste desafio um pequeno artigo de ESLint.org */
/** Source: https://eslint.org/docs/2.0.0/rules/guard-for-in */
function techList(techs, names) {
  let skills = [];
  for (let index in techs.sort()) {
    if ({}.hasOwnProperty.call(techs, index)) {
      skills[index] = {
        tech: techs[index],
        name: names,
      };
    }
  }
  if (skills.length === 0) {
    return 'Vazio!';
  }
  return skills;
}

// Desafio 11
/** Para conclusão deste desafio eu obtive ajuda de algumas pessoas e artigos. */
/** Meus agradecimentos aos amigos: J. Filizzola, Renato Bispo e Vitor Cardoso. */
/** Créditos ao knoonrx/nove_digitos.js | Seu código que mostra como funciona formatação de números através de Expressões Regulares. */
/** Source: https://gist.github.com/knoonrx/a180f0b7e3039e42c621 */
/** Expressões Regulares | Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions */
/** Medium / Alexandre Servian | Source: https://medium.com/@alexandreservian/regex-um-guia-pratico-para-express%C3%B5es-regulares-1ac5fa4dd39f */
function findRepetition(telNum, num) {
  let repeater = 0;
  for (let count = 0; count < telNum.length; count += 1) {
    if (telNum[count] === num) {
      repeater += 1;
    }
  }
  return repeater;
}

function numVerify(telNum) {
  for (let count = 0; count < telNum.length; count += 1) {
    if (telNum[count] < 0 || telNum[count] > 9 || findRepetition(telNum, count) > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function generatePhoneNumber(genNum) {
  let regex = /(\d{2})(\d{5})(\d{4})/;
  let sNum = '';
  let verify = numVerify(genNum);
  if (genNum.length !== 11) return 'Array com tamanho incorreto.';
  if (verify) {
    return verify;
  }
  for (let count = 0; count < genNum.length; count += 1) {
    sNum += genNum[count];
    sNum = sNum.replace(regex, '($1) $2-$3');
  }
  return sNum;
}
// Desafio 12
/** Meus agracecimentos aos amigos que me ajudaram a entender a lógica por trás deste desafio. */
/** J. Felizzola & Vitor Cardoso. */
function triangleCheck(lineA, lineB, lineC) {
  let c1 = Math.abs(lineB + lineC);
  let c2 = Math.abs(lineB - lineC);

  if (lineA < c1 && lineA > c2) {
    return true;
  }
  return false;
}

// Desafio 13
/** Para realizar este desafio, me baseei no código do colega Julio Filizzola. */
function hydrate(string) {
  string = string.replace(/\D/g, '');
  let num = 0;
  for (let index = 0; index < string.length; index += 1) {
    num += Number(string[index]);
  }
  if (num === 1) {
    return `${num} copo de água`;
  }
  return `${num} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
