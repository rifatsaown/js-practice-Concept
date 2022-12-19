let numbers = {
    rifat: 95,
    rumi: 99,
    saown: 89,
    ratri: 94,
    indur: 98,
}
console.log("------------------------------");
// Normal for loop
for (let i = 0; i < Object.keys(numbers).length; i++) {
    console.log(`Name: ${Object.keys(numbers)[i]} \nMarks: ${numbers[Object.keys(numbers)[i]]}\n`);
}
console.log("-----------------------------");

// for in loop
for (let number in numbers) {
    console.log(`Name: ${number} Marks: ${numbers[number]}\n`);
}
console.log("-----------------------------");
// for of loop
let names = ["Rifat", "Rumi", "Saown", "Ratri"];
for (let name of names) {
    console.log(name);
}
console.log("-----------------------------");