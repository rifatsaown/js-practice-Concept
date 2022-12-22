// for loop
for(let i = 0; i < 10000; i++){
    console.log(i);
}

// while loop
let i = 0;
while(i < 10000){
    console.log(i);
    i++;
}

// do while loop
let i2 = 0;
do {
    console.log(i2);
    i2++;
} while(i2 < 10000);

// for...in loop
let obj = {
    name: "Sakib",
    age: 24
}
for(let key in obj){
    console.log(key);
}

// for...of loop
let arr = [1,2,3,4,5];
for(let value of arr){
    console.log(value);
}

// forEach loop
let arr2 = [1,2,3,4,5];
arr2.forEach((value, index) => {
    console.log(value, index);
})

// map loop
let arr3 = [1,2,3,4,5];
let newArr = arr3.map((value, index) => {
    console.log(value, index);
    return value + 1;
})
console.log(newArr);

// // filter loop
// let arr = [1,2,3,4,5];
// let newArr = arr.filter((value, index) => {
//     return value > 2;
// })
// console.log(newArr);

// // reduce loop
// let arr = [1,2,3,4,5];
// let result = arr.reduce((acc, value) => {
//     return acc + value;
// }, 0)
// console.log(result);

// // every loop
// let arr = [1,2,3,4,5];
// let result = arr.every((value) => {
//     return value > 2;
// })
// console.log(result);

// // some loop
// let arr = [1,2,3,4,5];
// let result = arr.some((value) => {
//     return value > 2;
// })
// console.log(result);

// // find loop
// let arr = [1,2,3,4,5];
// let result = arr.find((value) => {
//     return value > 2;
// })
// console.log(result);

// // findIndex loop
// let arr = [1,2,3,4,5];
// let result = arr.findIndex((value) => {
//     return value > 2;
// })
// console.log(result);

// // for...in loop
// let obj = {
//     name: "Sakib",
//     age: 24

//This code give time complexity
// O(1) = Constant  // O(n) = Linear // O(n^2) = Quadratic // O(log n) = Logarithmic    // O(2^n) = Exponential // O(n!) = Factorial    // O(n^3) = Cubic  