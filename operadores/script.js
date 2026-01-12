/* // Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);
// Crie duas expressões que retornem NaN
var a = 20 * 'Jorge';
var b = 'oi'/ 4;
console.log(a, b);
// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;
console.log(soma)
// Incremente o número 5 e retorne o seu valor incrementado
var num = 5;
num++;
console.log(num);
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
*/


// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 24;
var idadeIrma = 22;
if(minhaIdade > idadeIrma){
    console.log('Você é mais velho');
    
}else{
    console.log('Você não é mais velho');
    
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}