function addNumbers(a,b){
    var addition = a + b;
    return addition;
}

console.log(addNumbers(10,8))

var person = {
    name: "Saar"
}
person.name = "Elvis"
console.log(Object.values(person))
console.log(Object.keys(person))

console.log(person.name.toUpperCase)
console.log(person.name.indexOf("s"))