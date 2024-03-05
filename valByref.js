const a = {
    name: "John",
    age: 24
}
const b = {...a};
a.name = "smith"
console.log("B", b,  "A",a);


let str = "hello";
const str2 = str
str = "hey"
console.log(str, str2);