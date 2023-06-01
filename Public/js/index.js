const addPlace = document.querySelector('.add-place')
const close = document.querySelector('.close')

addPlace.addEventListener('click', (e)=> {
    document.querySelector('.overlay').classList.add('active')
    document.querySelector('.login-modal').classList.add('active')
})

close.addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('active')
    document.querySelector('.login-modal').classList.remove('active')
})