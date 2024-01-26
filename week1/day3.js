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
