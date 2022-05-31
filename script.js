// This is a function for a startup modal and when you click it hides!

let modal = document.querySelector('.modal-btn')
let modalContainer = document.querySelector('.hide')

modal.addEventListener('click',init)

function init() {
    console.log('click')
    modalContainer.style.display = "none"
}
// let lastNameInput = document.getElementById('lname')
// const nameInput = document.getElementById('fname')
// let messageInput = document.getElementById('subject')

// document
// 	.querySelector('form.pure-form')
// 	.addEventListener('submit', function (e) {
// 		//prevent the normal submission of the form
// 		e.preventDefault();

// 		console.log(nameInput.value);
// 	});



let fNameEl = document.querySelector('#fname');
let lNameEl = document.querySelector('#lname');
let messageEl = document.querySelector('#subject');

function send() {
console.log(fNameEl.value, lNameEl.value, messageEl.value);
}
