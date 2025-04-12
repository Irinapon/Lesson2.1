let screenPrice = 5000;
let percentage = 10;
let fullPrice = 150000;

// Название проекта
let titleProject = prompt("Название проекта?");

// Типы экранов
let screensValue = prompt("Какие экраны нужны? (шаблонные, с уникальным дизайном, с анимациями)");

// 3. Нужен ли респонсивный сайт
let responsive;
if (confirm("Нужен ли респонсивный сайт?")) {
  responsive = true;
} else {
  responsive = false;
}

// Какой сервис нужен?
let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой еще сервис тебе нужен?");
let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");

// стоимость проекта
let projectCosts = screenPrice + servicePrice1 + servicePrice2;

// вычет процента

let servicePercentPrice = Math.round(fullPrice - (fullPrice * percentage/ 100));
console.log("Итого:", servicePercentPrice);

//  условия
if (fullPrice > 50000) {
    console.log("Сделаем скидку 10%");
  } else if (fullPrice > 20000 && fullPrice <= 50000) {
    console.log("Сделаем скидку 5%");
  } else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log("Скидка не предусмотрена");
  } else if (fullPrice === 0) {
    console.log("Проект бесплатный? Такого не бывает 😅");
  } else {
    console.log("Что-то пошло не так");
  }
