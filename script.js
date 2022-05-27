let modal = document.querySelector('.modal-btn')
let modalContainer = document.querySelector('.hide')

modal.addEventListener('click',init)

function init() {
    console.log('click')
    modalContainer.classList.add('hide')
}
