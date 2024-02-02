const parentContainer = document.querySelector('.parent')

const childContainer = document.createElement('div')
const innerChild = document.createElement('div')

innerChild.classList.add('inner')
innerChild.innerHTML = `
    <div class='ndani'>
        
    </div>
`

childContainer.classList.add('child')
childContainer.innerText = 'I am a child'

parentContainer.appendChild(childContainer)
childContainer.appendChild(innerChild)

console.log(childContainer)