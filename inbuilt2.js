// let source = {
//     name: "John",
//     age: 20,
// }
// // const target = {};

// // const target = {salary: 10000};

// const target = {age: 30};
// console.log(target);

// const result = Object.assign(target, source);
// console.log(result, target);

let num = {
    a: 1,
    b: 2
}
console.log(num);
// num.a = 23
console.log(num);
Object.freeze(num)
num.a = 30
console.log(num);
