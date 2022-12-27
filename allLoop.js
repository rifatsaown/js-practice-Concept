// for loop
for(let i = 0; i < 100; i++){
    console.log(i);
}

// while loop
let i = 0;
while(i < 100){
    console.log(i);
    i++;
}

// do while loop
let i2 = 0;
do {
    console.log(i2);
    i2++;
} while(i2 < 100);

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
let newArr3 = arr3.map((value, index) => {
    console.log(value, index);
    return value + 1;
})
console.log(newArr3);

// filter loop
let arr4 = [1,2,3,4,5];
let newArr4 = arr4.filter((value, index) => {
    console.log(value, index);
    return value > 2;
})
console.log(newArr4);

// reduce loop
let arr5 = [1,2,3,4,5];
let result = arr5.reduce((acc, value) => {
    return acc + value;
}, 0)
console.log(result);

// every loop
let arr6 = [1,2,3,4,5];
let result6 = arr6.every((value) => {
    return value > 2;
})
console.log(result6);

// some loop
let arr7 = [1,2,3,4,5];
let result7 = arr7.some((value) => {
    return value > 2;
})
console.log(result7);

// find loop
let arr8 = [1,2,3,4,5];
let result8 = arr8.find((value) => {
    return value > 2;
})
console.log(result8);

// findIndex loop
let arr9 = [1,2,3,4,5];
let result9 = arr9.findIndex((value) => {
    return value > 2;
})
console.log(result9);

// for...in loop
let obj01 = {
    name: "Sakib",
    age: 24
}
for(let key in obj01){
    console.log(key);
}
