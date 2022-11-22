//Ejercicio 1.3
let factorial = 10;
let resWhile = 1;
let i = 1;
while (true) {
  if (i <= factorial) {
    resWhile = resWhile * i;
    i++;
  } else {
    break;
  }
}
console.log(`Factorial de ${factorial} bucle while: ${resWhile}`);
