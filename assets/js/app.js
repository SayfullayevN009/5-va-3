let son = prompt();

//3 >> fizz // 5>>buzz


if (son % 3 == 0 && son % 5 == 0) {
    console.log("FizzBuzz");
}
else if (son % 3 == 0) {
    console.log("Fizz");
}
else if (son % 5 == 0) {
    console.log("Buzz");
}

else {
    console.log("bu son 3ga ham 5ga ham bo'linmaydi");
}
