names = ['Dan', 'Matt', 'Peter', 'Keter', 'Abby', 'Abe', 'Isaac']

// for (const name of names) {
//     // console.log(name)
//     let results = `${name} goes to Zindua School`
//     console.log(results)
// }

setInterval(()=> {
    let randInt = Math.floor(Math.random() * names.length)
    console.log(names[randInt])
}, 2000)