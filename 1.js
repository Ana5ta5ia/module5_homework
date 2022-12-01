let num = + prompt ("Введите число");
console.log (typeof num);
if (isNaN (num)){
  console.log ("Ошибка,введите число!");
} else {
  if (num % 2 == 0) {
    console.log ("Значение четное");
  } else {
    console.log ("Значение нечетное");
  }
}