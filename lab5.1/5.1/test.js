var x = 10;
if(x === 10){
    var y = 100;
    console.log(y); // 100
}
console.log(y); // 100

// โปรแกรม A2
var x = 10;
if(x === 10){
    let y = 100;
    console.log(y); // 100
}
console.log(y); // Uncaught ReferenceError: y is not defined

// โปรแกรม A3
var x = 10;
let y1 = 100;
if(x === 10){
    console.log(y1); // 100
}
console.log(y1); // 100

// โปรแกรม B1
let myArray = [1, 2, 3];
myArray.forEach(element => {
    console.log(element); // 1, 2, 3
});

// โปรแกรม B2
let myArrayy = [1, 2, 3];
for (const iterator of myArray) {
    console.log(iterator); // 1, 2, 3
}

// โปรแกรม B3
let dog = { name: "Yoyo", color: "black", age: 2 };
for (const k in dog) {
    console.log(k); // name, color, age
}

// โปรแกรม C1
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, numbersOne];
console.log(numbersTwo); // [4, 5, [1, 2, 3]]

// โปรแกรม C2
const numbersOnee = [1, 2, 3];
const numbersTwoo = [4, 5, ...numbersOnee];
console.log(numbersTwoo); // [4, 5, 1, 2, 3]

// Function สำหรับคำถามที่ 4
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2, 3, 4)); // 10