const total = 100;
let ordered = prompt("Ведите количество товаров:")
ordered = Number(ordered);
if (ordered > total){
    console.log("На складе недостаточно товаров!")
} else {
    console.log("Заказ оформлен, с вами свяжется менеджер")
}

