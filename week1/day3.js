/**
 * @ARRAYS ->  sequence of data types separated by commas and enclosed in square brackets
 * examples -> [1,2,3,4,5] || ["John", "Peter", "Mary", "Jane"]
 */
// let names = ["John", "Peter", "Mary", "Jane"]
// let numbers = [1,2,3,4,5]

// ITERATIONS
// WHILE LOOP
// let i = 0 
// while(i < 10){
//     console.log(i)
//     i+=2
// }

// DO WHILE LOOP
// let i = 0
// do {
//     console.log(i)
//     i++
// }while(i < 10)
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }


// Recursive factorial calculation
// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
// }

// let result = factorial(5)
// console.log(result)

let numbers = []
function fibonacciSequence(n) {
    if (n < 2) {
        return n
    } else {
        return (fibonacciSequence(n-1)+fibonacciSequence(n-2))
    }
}
let n = prompt("How many numbers of the fibonacci sequence do you want?")

for (i=0; i < n; i++) {
    numbers.push(fibonacciSequence(i))
}
console.log("fibonacci sequence => " + "[" + numbers +"]")
