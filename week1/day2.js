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

/**@FUNCTION EXPRESSIONS */
const add = function(a, b) {
    return a + b
}

/**@ARROW FUNCTIONS */
const add2 = (a,b) => a + b

/**@FORLOOPS */
// for (let i = 0; i < 10; i++) {

// }

let n = prompt("Enter a number")
n = parseInt(n)
let sum = 0

for(let i = 1; i < n; i++) {
    let remFirst = i%3
    let remSecond = i%5
    if (remFirst === 0 || remSecond === 0) {
        sum += i
    }
}

console.log("Sum:", sum)