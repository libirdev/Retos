// No Borrar
let a1 = [ 3, 1, 2, 8, 13, 9, 1, 1, 2, 3, 4, 10, 12, 11, 1, 1];
let a2 = [ 5, 7, 7, 7, 7, 2, 1, 2, 0];

let resultado = 0;

// Escribe tu algoritmo - guarda en resultado

resultado = Math.max.apply(null, a1) * Math.max.apply(null, a2)
console.log(resultado);
