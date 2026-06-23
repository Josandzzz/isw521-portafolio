/* =========================================================
   Ejercicio 1 — FizzBuzz clásico
   Imprime números del 1 al 30:
     - Múltiplos de 3      -> "Fizz"
     - Múltiplos de 5      -> "Buzz"
     - Múltiplos de 3 y 5  -> "FizzBuzz"
     - En cualquier otro caso -> el número
   ========================================================= */
function fizzBuzz(limite = 30) {
  for (let numero = 1; numero <= limite; numero++) {
    const esMultiploDe3 = numero % 3 === 0;
    const esMultiploDe5 = numero % 5 === 0;

    if (esMultiploDe3 && esMultiploDe5) {
      console.log("FizzBuzz");
    } else if (esMultiploDe3) {
      console.log("Fizz");
    } else if (esMultiploDe5) {
      console.log("Buzz");
    } else {
      console.log(numero);
    }
  }
}

fizzBuzz(30);


/* =========================================================
   Ejercicio 3 — Suma de un arreglo
   Calcula la suma total de [4, 8, 15, 16, 23, 42]
   usando un ciclo for...of y una variable acumuladora.
   ========================================================= */
function sumarArreglo(arreglo) {
  let suma = 0; // acumulador

  for (const valor of arreglo) {
    suma += valor;
  }

  return suma;
}

const numeros = [4, 8, 15, 16, 23, 42];
const total = sumarArreglo(numeros);

console.log(`La suma total del arreglo es: ${total}`);