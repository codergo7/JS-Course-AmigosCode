var person = {
    fistName: "Jon",
    lastName: "Snow",
    age: 30,
    isMale: true,
    dob: new Date(300,1,1),
    adress: {
        city: "North",
        postcode: "Unknown"
    }
}

console.log(person.fistName)
console.log(person.lastName)
console.log(person.age)
console.log(person.isMale)
console.log(person.fistName)
console.log(person.adress)
console.log(person.adress.city)
console.log("**************")

console.log(Object.values(person))
console.log(Object.keys(person))
console.log(JSON.stringify(person))



