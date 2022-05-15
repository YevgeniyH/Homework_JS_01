const ADMIN_PASSWORD = 'jkl';
let message = '';

let inputPassword = prompt("Введите пароль администратора");

if (!inputPassword) {
    message = "Отменено пользователем!";
} else if(inputPassword === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
} else {
    message = "Доступ запрещен, неверный пароль!"
}

console.log(message);
alert(message);

