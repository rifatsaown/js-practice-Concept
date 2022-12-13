//normal Function example
function addab(a, b) {
    return a + b;
}
console.log(addab(1, 2));

//arrow function example
const addNumber = (a, b) => {
    return a + b;
}
console.log(addNumber(1, 2));

//arrow function example without parameter
const add = () => {
    return 1 + 2;
}
console.log(add());

//arrow function example without return
const addNumber2 = (a, b) => a + b;
console.log(addNumber2(1, 2));