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

'use strict'

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
}