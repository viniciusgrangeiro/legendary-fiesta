// tipo de dado
// booleanos

// conversao implicita
const numero = 456;
const numeroString = '456';

console.log(numero === numeroString); // false
console.log(numero == numeroString); // true

console.log(numero + numeroString); // 456456

// conversao explicita

// Number() -> converte para numero
// String() -> converte para string

console.log(numero + Numer(numeroString)); // 912
console.log(String(numero) + numeroString); // 912

