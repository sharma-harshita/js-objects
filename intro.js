console.log("hello");
const user = {name: "John", age:24, isEmp: false};
const user2 = new Object()
user2.name = "Smith";
user2["age"] = 27;

user.name = "Jack"
delete user.isEmp;
console.log(user);
console.log(user2);
