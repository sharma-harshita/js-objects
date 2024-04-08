let user = {
    name: "Smith",
    age: 24,
    salary: 20000,
    getSalary: function(){
        return this.salary+5000
    },
    get fetchAge(){
        return this.age
    },
    set resetName(x){
        this.name = x
    }
}

console.log(user.getSalary());
console.log(user.fetchAge);
user.resetName = "John"
console.log(user.name);

console.log(Object.entries(user));