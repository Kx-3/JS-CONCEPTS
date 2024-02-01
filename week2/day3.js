let parent = document.querySelector('#parent-list')

parent.addEventListener('click', (e) => {
    let target = e.target
    console.log(e)
    if (target.tagName == 'LI') {
        let innerList = target.firstElementChild
        innerList.classList.toggle('inner')
    }
    // } else if (target.id == 'drinks') {
    //     document.querySelector('#drinks-inner').classList.toggle('inner')
    // } else if (target.id == 'animals') {
    //     document.querySelector('#animals-inner').classList.toggle('inner')
    // }
})