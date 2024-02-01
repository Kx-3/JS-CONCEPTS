/**
 * @DOM_MANIPULATION 
*/

/**@ACCESSING_METHODS */
// document.querySelector("# for classes", ". for ids")
// document.getElementById('id-name')
// document.getELementByClass('class-name')

/**@EVENT_LISTENERS */

let changeText = document.querySelector('#change')
let paragraph = document.querySelector('#text')
let initialText = paragraph.innerText

changeText.addEventListener('click', () => {
    paragraph.innerText === 'Hello World' ? paragraph.innerText = initialText: paragraph.innerText = 'Hello World'
})