// var let const
var x = 10;
let y = 45;
const z = 30;

console.log(y)

y = y*x

console.log(y)

//esto es una linea
/* esto es un comentario de varias lineas */


//Pokemon
let jugado1 = "Pikachu";
let jugado2 = "Charmander";
let jugado3 = "Eavee";

let energia_jugado1 = 1000;
let energia_jugado2 = 80;
let energia_jugado3 = 9000;

if(energia_jugado1 > energia_jugado2 && energia_jugado1 > energia_jugado3) {
    console.log(jugado1 + " Es el ganador ");
}else if(energia_jugado2 > energia_jugado1 && energia_jugado2 > energia_jugado3) {
    console.log(jugado2 + " Es el ganador ");
}else {
    console.log(jugado3 + " Es el ganador ");
}