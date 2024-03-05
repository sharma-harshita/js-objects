const user = {
    name: "Smith",
    age: 21,
    calculateSalary: function (x){
        return 20000+x;
    }
}


function Person (first, last){
    this.first = first;
    this.last = last;
}
console.log(user.calculateSalary(30000));
const person1 = new Person("John", "Jack");
console.log(person1);