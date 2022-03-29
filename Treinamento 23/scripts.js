'7 pm'

var x = 10;
if(x > 5){
    let x = 1;
} else {
    let x = 0;
}

console.log(x)

let y = 3;
y += 2;
console.log(y)


function sumUpTo(number){
    if (number === 1) {
        return 1;
    }
    return number + sumUpTo(number - 1);
}

console.log(sumUpTo(2))