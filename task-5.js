let cost;
let deliveryCountry = "";
let userInput = prompt("Введите страну доставки:");
normalizedToUpperCaseInput = userInput.toUpperCase();

switch (normalizedToUpperCaseInput) {
    case "КИТАЙ":
        deliveryCountry = "Китай";
        cost = 100;
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов.`)
        break;
    
    case "ЧИЛИ":
        deliveryCountry = "Чили";
        cost = 250;
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов.`)
        break;
    
    case "АВСТРАЛИЯ":
        deliveryCountry = "Австралия";
        cost = 170;
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов.`)
        break;
    
    case "ИНДИЯ":
        deliveryCountry = "Индия";
        cost = 80;
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов.`)
        break;
    
    case "ЯМАЙКА":
        deliveryCountry = "Ямайка";
        cost = 120;
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов.`)
        break;
                
    default:
        alert("В вашей стране доставка не доступна");       
}


