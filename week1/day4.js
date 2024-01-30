// let person = {
//     name: "Abe",
//     age: 30,
//     dateofbirth: new Date(1997, 3, 1),
//     hobbies: {
//       indoor: ['baking', 'reading'],
//       outdoor: ['hiking', 'swimming'],
//     },
//     greet: function() {
//       console.log("Hello, " + this.age + "!");
//     }
//   };

//   person.greet()
//   console.log(person.hobbies.indoor[1])
//   console.log(person.dateofbirth.toDateString())


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

/**@CHALLENGE */

let a = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'Chicago' },
  { name: 'Charlie', age: 35, city: 'New York' },
  { name: 'Dave', age: 40, city: 'Chicago' },
  { name: 'David', age: 40, city: 'Paris' },
  { name: 'Abe', age: 24, city: 'Kisumu' },
  { name: 'Okwaro', age: 62, city: 'Kisumu' },
  { name: 'Adnan', age: 10, city: 'Tokyo' },
  { name: 'Dave', age: 55, city: 'Tokyo' },
  { name: 'Roman', age: 29, city: 'Los Angeles' },
]

function groupBy(array, property) {
  let groupedItems = {}
  for(const item of array){
    let key = item[property]
    if(!groupedItems[key]){
      groupedItems[key] = []
    }
    groupedItems[key].push(item)
    
  }
  return groupedItems
}
console.log(groupBy(a ,"city"))