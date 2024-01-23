// let school = "j"

// if (school === "Zindua") {
//     console.log("Zindua School")
// } else {
//     console.log("Not Zindua School")
// }

/**
 * @LOGICALOPERATORS
 * @STRICTLYEQUAL -> ===
 * @AND -> &&
 * @OR -> ||
 * @GREATERTHAN -> >
 * @LESSTHAN -> <
 * @GREATERTHANOREQUALTO -> >=
 * @LESSTHANOREQUALTO -> <=
 * @NOTEQUAL -> !==
 */

/**@SWITCHCASE */
// let guy = prompt('Name?')
// switch(guy) {
//     case 'Dan':
//         console.log("I am Dan")
//         break
//     case 'Abe':
//         console.log("I am Abe")
//         break
//     default:
//         console.log("I am noone")
//         break
// }

/**@FUNCTIONS */
// function consoleHello() { //function declaration
//     let name = prompt('Name?')
//     console.log('Hello' + ' ' + name) //function definition
// }
// consoleHello() //function call

/**@FORLOOPS */
// for (let i = 0; i < 10; i++) {

// }

let firstNumber = prompt("Enter a number")
let secondNumber = parseInt(firstNumber)
let sum = 0

for(let i = 1; i < secondNumber; i++) {
    let remFirst = i%3
    let remSecond = i%5
    if (remFirst === 0 || remSecond === 0) {
        sum += i
    }
    else {
        sum = sum
    }
}

console.log("Sum:", sum)