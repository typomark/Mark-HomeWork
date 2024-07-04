/* confirm = Да или Нет | true or false
let answer = confirm("Ты крутой парень?")

promt = всегда приходит в виде строки 
let answer2 = promt("Ты крутой парень? Если да, то напиши это") */

/* console.log(5 + '5');
console.log(5 - '5');
console.log(5 / '5t');

console.log(5 == '5');
console.log(5 === '5'); */

/* console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));

// вместо BooLean

let a = 10

console.log(!!5);
console.log(10 + '');
console.log(a.toString()); */



/* let str = +prompt("Сколько тебе лет?")

let result = str + 10

console.log(result); */



/*let str = prompt("Сколько тебе лет?")

//Только цифры (без строк)
console.log(parseInt(str)); 

//дробные числа
console.log(parseFloat(str)); */




/* Если (выходной) {
    радуемся и спим; 
    потягиваемся;
} иначе {
    умываемся;
    одеваемся;
    работаем;
}
*/

/* if (true) console.log('Истина');
if (false) console.log('Ложь');

let n = 10

if (n == 11) {
    console.log('1');
    console.log('2');
    console.log('3');
} else if (n == 12) {
    console.log('3');
    console.log('4');
    console.log('5');
} else if (n == 13) {
    console.log('3');
    console.log('4');
    console.log('5');
} else {
    console.log('33');
    console.log('44');
    console.log('55');
}
 */
/*
switch (n) {
    case 3:
        console.log(3);
        break
    case 4:
        console.log(4);
        break
    case 10:
        console.log(10);
        break
    case 11:
        console.log(11);
      break
      default:
        console.log('Не верно не одно значение');
}
*/
/* 'use strict';
const n = +prompt('Введите число')

switch (n) {
    case 3:
    case 4:
    case 11:
        console.log(11);
      break
     default:
        console.log('Не верно не одно значение');
}
        */



/* 'use strict';
const n = +prompt('Введите число')


n === 10 ? console.log("верно") : console.log("не верно")

*/

// САМАЯ ГЛАВНАЯ ОШИБКА 
/* switch (true) {
    case 5 < n && n < 10:
        console.log('Верно');
      break
     default:
        console.log('Не верно не одно значение');
}
*/



/*


*/

/* 'use strict'

let title = prompt('Как называется Ваш проект?');
console.log(title);


let screens = prompt('Какие типы экранов нужно разработать?');
console.log(screens);


let screenPrice = +prompt('Сколько будет стоить данная работа?');
console.log(parseFloat(screenPrice));


let adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(adaptive);

let servicePrice = 5000;
let servicePrice2 = 10000;


let fullPrice = prompt('Какая услуга Вам нужна?', '');


if (fullPrice == 'Откат') {
  alert(screenPrice + servicePrice);
} else if (fullPrice == 'Хуй') {
  alert(screenPrice + servicePrice2);
} else {
    alert('Пожалуйста введите нужную вам услугу');
} */



'use strict'
/* let title
let screens
let screenPrice
let adaptive
let rollback = 10
let allServicePrices
let fullPrice
let servicePercentPrice
let service1
let service2 */


const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
  
    start: function () {
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrice()
        appData.title = appData.getTitle()

        appData.logger()
    },
    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки")
        appData.screens = prompt("Какие типы экранов нужно разрабоать?", "Простые, сложные")

        do {
            appData.screenPrice = prompt("Скоклько будет стоить данная работа?")
        } while (!appData.isNumber(appData.screenPrice))
        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    getAllServicePrices: function () {
        let sum = 0
        for (let i = 0; i < 2; i++) {
            let price = 0
            if (i === 0) {
                appData.service1 = prompt("Какие услуги нужны?")
            } else if (i === 1) {
                appData.service2 = prompt("Какие услуги нужны?")
            }

            do {
                price = prompt("Сколько это будет стоить?")
            } while (!appData.isNumber(sum))

            sum += +price
        }
        return sum
        // return servicePrice1 + servicePrice2
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices
    },


    getServicePercentPrice: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))



    },
    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даём скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даём скидку в 5%";
        } else if (price >= 0 && price < 15000) {
            return "Скидки нет";
        } else {
            return "Что то не так";
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);

    }
}


appData.start()



