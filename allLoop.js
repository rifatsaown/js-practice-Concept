// for loop
for (let i = 0; i < 100; i++) {
    console.log(i);
}
console.log("-------------------------");

// while loop
let i = 0;
while (i < 100) {
    console.log(i);
    i++;
}
console.log("-------------------------");

// do while loop
let i2 = 0;
do {
    console.log(i2);
    i2++;
} while (i2 < 100);
console.log("-------------------------");

// for...in loop
let obj = {
    name: "Sakib",
    age: 24
}
for (let key in obj) {
    console.log(key);
}
console.log("-------------------------");

// for...of loop
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}
console.log("-------------------------");

// forEach loop
let arr2 = [1, 2, 3, 4, 5];
arr2.forEach((value, index) => {
    console.log(value, index);
})
console.log("-------------------------");

// map loop
let arr3 = [1, 2, 3, 4, 5];
let newArr3 = arr3.map((value, index) => {
    console.log(value, index);
    return value + 1;
})
console.log(newArr3);
console.log("-------------------------");

// filter loop
let arr4 = [1, 2, 3, 4, 5];
let newArr4 = arr4.filter((value, index) => {
    console.log(value, index);
    return value > 2;
})
console.log(newArr4);
console.log("-------------------------");

// reduce loop
let arr5 = [1, 2, 3, 4, 5];
let result = arr5.reduce((acc, value) => {
    return acc + value;
}, 0)
console.log(result);
console.log("-------------------------");

// every loop
let arr6 = [1, 2, 3, 4, 5];
let result6 = arr6.every((value) => {
    return value > 2;
})
console.log(result6);
console.log("-------------------------");

// some loop
let arr7 = [1, 2, 3, 4, 5];
let result7 = arr7.some((value) => {
    return value > 2;
})
console.log(result7);
console.log("-------------------------");

// find loop
let arr8 = [1, 2, 3, 4, 5];
let result8 = arr8.find((value) => {
    return value > 2;
})
console.log(result8);
console.log("-------------------------");

// findIndex loop
let arr9 = [1, 2, 3, 4, 5];
let result9 = arr9.findIndex((value) => {
    return value > 2;
})
console.log(result9);
console.log("-------------------------");

// for...in loop
let obj01 = {
    name: "Sakib",
    age: 24
}
for (let key in obj01) {
    console.log(key);
}
console.log("-------------------------");