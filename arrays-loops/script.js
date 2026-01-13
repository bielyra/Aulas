// Crie uma array com os anos que o Brasil ganhou a copa
// 1958, 1962, 1970, 1994, 2002
var titulosBrasilCopa = [1958,1962,1970,1994,2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

titulosBrasilCopa.forEach(function(ano) {
    console.log(`O brasil ganhou copa em ${ano}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 0; i < frutas.length; i++){
   console.log(frutas[i]); 
    if(frutas[i] === 'Pera'){
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta); // 'Melância'

var ultimaFruta = frutas.at(-1);
console.log(ultimaFruta); // 'Melância'

//Ambas maneiras são funcionais e úteis, porém o ideal é utilizar a segunda maneira, com o método .at(). Pois é uma maneira mais resumida e direta, facilitando a leitura