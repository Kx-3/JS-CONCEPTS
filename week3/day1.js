const data = require('./data.json')
let array = data.results

for (let i = 0; i < array.length; i++){
    console.log(array[i].name + ' ' + array[i].id)
}
