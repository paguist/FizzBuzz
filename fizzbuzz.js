for (let i = 1; i < 101; i++) { //i vale 1 al inicio, el ciclo irá dese el valor de i hasta que valga menos que 101, siempre que valga menos, sumará +1 al valor de i
    if (i % 15 === 0) console.log("FizzBuzz"); // se inicia con el menor multiplo comun entre 5 y 3 para iniciar el ciclo e imprima el fizzbuzz
    else if (i % 3 === 0) console.log("Fizz"); // si no cumple el anterior, dividirá entre 3
    else if (i % 5 === 0) console.log("Buzz"); // si no cumple el anterior, dividirá entre 5
    console.log(i); // si no cumple con ninguna division, imprime en valor de i
}
