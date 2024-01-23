/**
 * @VAR
 * You CAN REDECLARE a variable
 * var name = "dan"
 * var name = "jonah"
 * 
 * You CAN REASIGN a variable
 * var name = "dan"
 * name = "joe"
 * 
 * Is always GLOBALLY SCOPED
 * 
 * @LET
 * You CANNOT REDECLARE a variable
 * let name = "pineapple"
 * let name = "abe"
 * 
 * You CAN REASSIGN a variable
 * let name = "pineapple"
 * name = "abe"
 * 
 * Is NOT always GLOBALLY SCOPED
 * 
 * @CONST
 * You CANNOT REDECLARE a variable
 * const goat = "Messi"
 * const goat = "CR7"
 * 
 * You CANNOT REASSIGN a variable
 * const goat = "CR7"
 * goat = "penaldo"
 */



// DATA TYPES
/**Primitive Data Types
 * @STRINGS - Characters/numbers wrapped in quotes -> "Dan", 'dog', "123"
 * @NUMBERS - Decimal, whole numbers ,negative numbers -> 1, 1.5, -1
 * @BOOLEANS - True or False
 * @UNDEFINED - No value assigned
 * @NULL - Nothing
 */

/**Non-Primitive Data Types
 * @LISTS - arrays -> [1,2,3,4,5] ['dog', 'cat', 'mouse']
 * @OBJECTS - Dictionaries(Key value pairs) -> {name: "Dan"}
 */


// MATH OPERATORS
/**
 * @ADDITION -> +
 * @SUBTRACTION -> -
 * @MULTIPLICATION -> *
 * @DIVISION -> /
 * @MODULUS -> %
 */

// Sales CALCULATOR
// const sockCost = 50
// const bagCost = 50
// const batchCost = (sockCost * 3) + bagCost
// const sellingPrice = 1000
// const revenue = (30 * sellingPrice) * 70/100
// const totalSocksCost = sockCost * 100
// const totalBagsCost = bagCost * 40

// const profit = revenue - (totalBagsCost + totalSocksCost)

// console.log(profit)

let length = prompt("Length of the rectangle?")
let width = prompt("Width of the rectangle?")
length = parseFloat(length)
width = parseFloat(width)
let area = width * length
let perimeter = 2 * (width + length)
console.log("Area: ", area)
console.log("Perimeter: ", perimeter)