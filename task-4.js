let credits = 23580;
const pricePerDroid = 3000;
let odered = prompt("Введите кол-во дроидов:");

if (!odered) {
    console.log("Отменено пользователем");
} else {
    totalPrice = odered * pricePerDroid;
    if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
    } else {
    console.log(`Вы купили ${odered} дроидов, на счету осталось ${credits-totalPrice} кредитов.`);
    }
}

