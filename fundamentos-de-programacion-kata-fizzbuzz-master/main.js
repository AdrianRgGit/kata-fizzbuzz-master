// Forma con condicional if

let numero;
let multiplo3;
let multiplo5;

for (let i = 0; i <= 1000; i++) {
  multiplo3 = i % 3;
  multiplo5 = i % 5;

  // mutliples de 3 y 5
  if (multiplo3 == 0 && multiplo5 == 0 && i != 0) {
    console.log("FizzBuzz");
  }
  //   múltiplos de 3
  else if (multiplo3 == 0 && i != 0) {
    console.log("Fizz");
  }

  //   múltiplos de 5
  else if (multiplo5 == 0 && i != 0) {
    console.log("Buzz");
  }

  // El resto
  else {
    console.log(i);
  }
}

// Forma con condicional switch
for (let i = 0; i <= 1000; i++) {
  multiplo3 = i % 3;
  multiplo5 = i % 5;

  switch (true) {
    case multiplo3 == 0 && multiplo5 == 0 && i != 0:
      console.log("FizzBuzz");
      break;

    case multiplo3 == 0 && i != 0:
      console.log("Fizz");
      break;

    case multiplo5 == 0 && i != 0:
      console.log("Buzz");
      break;

    default:
      console.log(i);
      break;
  }
}
