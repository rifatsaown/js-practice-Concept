const square = (x) => {
    console.log(`The square of ${x} is ${x*x}`);
};

const higherorderFunction = (num, callback) => {
    callback(num);
}

higherorderFunction(2, square);