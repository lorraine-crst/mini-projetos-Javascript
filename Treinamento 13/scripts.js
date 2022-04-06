//falsy = undefind, null, , false. ''. NaN- not a number
//Truthy

console.log(true || false); //truthy
console.log(false || 'rafael'); //turthy
console.log( null || false);
console.log(1 || false);//turthy

let corBlusa = 'roxo';
let corCalça= '' ;
let corTenis = 'branco';
let possieveisCombinaçoes = corBlusa || corCalça;
let possieveisCombinaçoes2 = corCalça || corTenis;
let possieveisCombinaçoes3 = corTenis || corBlusa;
let possieveisCombinaçoes4 = corCalça || corTenis || corBlusa;
let possieveisCombinaçoes5 = corCalça || corCalça;
console.log(possieveisCombinaçoes);
console.log(possieveisCombinaçoes2);
console.log(possieveisCombinaçoes3);
console.log(possieveisCombinaçoes4);
console.log(possieveisCombinaçoes5);