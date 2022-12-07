const names =["Rifat","Rumi","Ratri","Saown"];

names.map((name)=>{
    console.log(name + " is a good Person");
})

const numbers = ["1","2","3","4","5","6","7","8","9","10"];
const newNumbers=numbers.filter(number=>{
    return number % 2 === 0;
})
console.log(newNumbers);