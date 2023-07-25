const formName = document.querySelector('.form .name')
const formTitle = document.querySelector('.form .title')
const formPhone = document.querySelector('.form .phone')
const formEmail = document.querySelector('.form .email')

const card = document.querySelector('.card')
const cardName = document.querySelector('.card .name')
const cardTitle = document.querySelector('.card .title .value')
const cardPhone = document.querySelector('.card .phone .value')
const cardEmail = document.querySelector('.card .email .value')
const createCardBtn = document.querySelector('.form .btn')

createCardBtn.addEventListener('click', function () {
  card.classList.add('show')
  cardName.innerHTML = formName.value
  cardTitle.innerHTML = formTitle.value
  cardPhone.innerHTML = formPhone.value
  cardEmail.innerHTML = formEmail.value
})