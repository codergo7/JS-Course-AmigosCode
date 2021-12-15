// define a number
let price = 100;
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax

console.log("Price:", price, 
            "Tax Rate:",tax, 
            "Tax Price:", priceTax,
            "Total Price:", total
            )

// increment and decrement operations
let counter = 320;
counter = counter + 1
counter += 1
counter++
console.log(counter)

counter--
console.log(counter)

counter *=10
console.log(counter)

counter /=5
console.log(counter)


// operator precedence => pharanteses, multiplication, division, addition and subtraction
console.log(2 + 3 * 10) // 32
console.log((2 + 3) * 10) // 50

// remainder operator: even and order numbers
console.log(17%2 == 0) // false

// exponentiation

console.log(2*2*2*2)
console.log(2**4)

// Round down => Math.floor
console.log("Math.floor(1.7): ", Math.floor(1.7)) //1

// Round up => Math.ceil
console.log("Math.ceil(1.3): ", Math.ceil(1.3)) //2

// Round => Math.round
console.log("Math.round(1.7): ", Math.round(1.7)) //  2
console.log("Math.round(1.4): ", Math.round(1.4))  //  1
console.log("Math.round(1.5): ", Math.round(1.5))  //  2

// string number and Number class
let stringNumber = "77"
console.log(stringNumber) // string
console.log(Number(stringNumber)) // number