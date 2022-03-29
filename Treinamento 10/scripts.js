//operadores de igualdade

//igualdade estrita
console.log(21 === 20);
console.log(21 === 21);
console.log( "21" === 21);

//igualdade solta
console.log(21 == 21);
console.log("21" == 21);
console.log(21 == 22);
console.log(21 == "22");

let hotelPrices = [300, 95, 130]
function findDeals(price){
    if (price < 100){
        console.log(price)
    }
}

hotelPrices.forEach(findDeals);