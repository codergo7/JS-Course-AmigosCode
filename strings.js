var brand = "Toyota"
console.log(typeof brand)
console.log(brand.length)
console.log(brand.toUpperCase())
console.log(brand.substring(0,4))

var model = "Corolla"

//concat
console.log(brand + " " + model)
var afterConcat = brand.concat(" ").concat(model)
console.log(afterConcat)
console.log(`${brand} ${model.toUpperCase()}`)
