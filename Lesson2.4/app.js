
// 1. Функция Expression — сумма всех дополнительных услуг

let servicePrice1 = 500;
let servicePrice2 = 800;

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
  };
let allServicePrices = getAllServicePrices();
  console.log("allServicePrices =", allServicePrices);

  // 2. Функция Declaration — полная стоимость проекта

  let screenPrice = 1000;
  function getFullPrice() {
    return screenPrice + allServicePrices;
  }
  
let fullPrice = getFullPrice(); 
console.log("fullPrice =", fullPrice);

// 3. Создай функцию getTitle.
function getTitle(title) {
  return title[0].toUpperCase() + title.slice(1).toLowerCase();
}
let titleProject = prompt("Введите название проекта:");
titleProject = getTitle(titleProject);

console.log("Название проекта:", titleProject);




//4. Создай функцию getServicePercentPrices
let percent = 10;
function getServicePercentPrices(price, percent) {
    return price - (price * percent / 100);
  }
  
  let servicePercentPrice = getServicePercentPrices(fullPrice, percent);
  console.log("servicePercentPrice =", servicePercentPrice);// "Стоимость проекта с вычитом процента"

  //5. Создай функцию getRollbackMessage.
  function getRollbackMessage(price) {
    let discount;
  
    if (price >= 3000) {
      discount = 'Даем скидку 10%';
    } else if (price >= 1500 && price < 3000) {
      discount = 'Даем скидку 5%';
    } else {
      discount = 'Скидка не предусмотрена';
    }
    console.log(`Скидка для клиента: ${discount}`);
}

getRollbackMessage(fullPrice);