"use strict";

// 1 задание
// let price = prompt('Введите стоимость товара');
// let money = prompt('Введите количество ваших денег');
// if (Number(money) <= 0 || Number(price) <= 0) {
//     alert('Неверный формат ввода');
// } else if (Number(price) == Number(money)) {
//     alert('Покупка совершена');
// } else if (Number(price) > Number(money)) {
//     let diff = Number(price) - Number(money);
//     alert(`Для покупки не хватает ${diff} р.`)
// } else if (Number(money) > Number(price)) {
//     let diff2 = Number(money) - Number(price);
//     alert(`Покупка совершена. Сдача ${diff2} р.`)
// } else {
//     alert('Неверный формат ввода');
// }


// задание 2
// let number = prompt('Пожалуйста, введите число');
// if (Number(number) == 0) {
//     alert('0');
// } else if (Number(number) < 0) {
//     alert('-1');
// } else {
//     alert('1');
// }

// // задание 3
// let a = prompt('Введите а');
// let b = prompt('Введите b');
// a = Number(a);
// b = Number(b);
// let result = (a + b < 4) ? 'Мало' : 'Много';
// alert(result);


// задание 4
// let login = prompt('Введите логин');
// let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
// alert(message);

// задание 5
let login_admin = prompt('Введите логин');
if (login_admin == 'Админ') {
    let password_admin = prompt('Введите пароль');
    if (password_admin == 'Я главный') {
        alert('Здравствуйте!');
    } else if (!password_admin) {
        alert('Отменено');
    }
    else {
        alert('Неверный пароль');
    }

} else if (!login_admin) {
    alert('Отменено');
}
else { alert('Я вас не знаю'); }
