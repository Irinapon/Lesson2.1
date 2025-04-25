// 1. Переменные

let screenPrice;        // цена за вёрстку одного экрана
let userInput;          // временная переменная для работы с prompt
let allServicePrices;   // сумма двух дополнительных услуг
let fullPrice;          // итоговая стоимость проекта




// 2. Функции 


//2.1. Функция проверки: является ли значение корректным числом

function checkIsNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
  // parseFloat пытается превратить строку в число
  // isNaN проверяет — не получилось ли "не число"
  // isFinite проверяет, что число не бесконечное
  // ! означает "не" — если не число, вернёт false
}

// 2.2. Получаем стоимость экрана с помощью prompt + проверка ввода


function getScreenPrice() {
  let input;
  do {
    input = prompt("Сколько будет стоить экран?"); // пользователь вводит значение
  } while (
    !checkIsNumber(input) || input === null || input.trim() === ''  // проверка: значение должно быть числом, не null и не пустым
  );

  return +input; // преобразуем строку в число и возвращаем
}


// 2.3. Получаем сумму двух дополнительных услуг (через цикл и валидацию)


const getAllServicePrices = function () {
  let sum = 0; // начальное значение суммы — 0

  for (let i = 0; i < 2; i++) { // цикл выполнится 2 раза (для 2 услуг)
   let input;
   do {
       input = prompt(`Сколько будет стоить услуга ${i + 1}?`); // спрашиваем стоимость каждой услуги
 } while (
      !checkIsNumber(input) || input === null || input.trim() === ''  // проверка: должно быть корректное число
  );

    sum += +input; // прибавляем каждую стоимость к общей сумме
  }

  return sum; // возвращаем общую сумму всех услуг
};




// 3. Вызовы функций


screenPrice = getScreenPrice(); // вызываем функцию получения цены за экран, сохраняем в переменную

allServicePrices = getAllServicePrices(); // вызываем функцию, которая посчитает сумму всех услуг

fullPrice = screenPrice + allServicePrices; // считаем полную стоимость проекта: экран + услуги



// 4. Вывод результатов


// выводим в консоль все значения
console.log("Цена за экран:", screenPrice);
console.log("Доп. услуги:", allServicePrices);
console.log("Полная цена проекта:", fullPrice);