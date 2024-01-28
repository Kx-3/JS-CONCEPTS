// let person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//       console.log("Hello, " + this.name + "!");
//     }
//   };

//   person.greet()


// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//   console.log(number * 2);
// });


// // Array manipulation
// let fruits = ["apple", "banana", "cherry"];

// // Adding elements
// fruits.push("date");
// fruits.unshift("kiwi");
// console.log(fruits)

// // Removing elements
// fruits.pop();
// fruits.shift();
// console.log(fruits)

/**@CHALLENGE */
let a = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'Chicago' },
  { name: 'Charlie', age: 35, city: 'New York' },
  { name: 'Dave', age: 40, city: 'Chicago' }
]
// function group2(array, cityName) {
//     const found = array.filter(({city}) => city === cityName)
//     console.log(found)
// }
// group2(a, "New York")

// function groupBy(array, property) {
//     array.forEach(element => {
//         const properties = Object.keys(element)
//         const filtered = properties.filter((item) => item === property)
//         console.log(properties)
//         console.log(filtered)
//     });
    
// }

// function groupBy(array, property) {
//   for (let i=0; i<array.length ; i++) {
//     const properties = Object.keys(array)
//     console.log(properties)
//   }
// }


function groupBy(array, property) {
  let groupedItems = {}
  for(const item of array){
    let value = item[property]
    if(!groupedItems[value]){
      groupedItems[value] = []
    }
    groupedItems[value].push(item)
    
  }
  return groupedItems
}
console.log(groupBy(a ,"city"))
