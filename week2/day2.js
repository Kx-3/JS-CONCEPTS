let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let body = document.body

body.style.backgroundColor = 'white'
let initialBg = body.style.backgroundColor
btn1.style.backgroundColor = 'aqua'
let btn1Bg = btn1.style.backgroundColor
btn2.style.backgroundColor = 'aquamarine'
let btn2Bg = btn2.style.backgroundColor

btn1.addEventListener('click', (e)=> {
    e.stopPropagation()
    body.style.backgroundColor = btn1Bg
})

btn2.addEventListener('click', (e)=> {
    e.stopPropagation()
    body.style.backgroundColor = btn2Bg
})
body.addEventListener('click', ()=> {
    body.style.backgroundColor = initialBg
})