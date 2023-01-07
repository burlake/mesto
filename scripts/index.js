//попап
const popup = document.querySelector(".popup");
const aboutPopup = document.querySelector(".popup__about");
//форма и инпуты
const formElement = document.querySelector(".subtitle");
const aboutButton = document.querySelector(".button__edit");
const aboutCloseButton = aboutPopup.querySelector(".popup__close-button");

//открытие попапа
aboutButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);
    aboutPopup.classList.add("popup__opened");
});

//закрытие попапа
aboutCloseButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);
    aboutPopup.classList.remove("popup__opened");
});
//закрытие попапа за пределами кнопки popup__close-button
//aboutPopup.addEventListener('click', (event) => {
//event.preventDefault();
//console.log(event.target , event.currentTarget);
//if(event.target === event.currentTarget){
//aboutPopup.classList.remove('popup__opened')
//};
//})

//функция закрытия попапа
function closePopup() {
    aboutPopup.classList.remove("popup__opened");
}

//функция обработки отправки формы
let userName = document.querySelector(".profile__name");
let userJob = document.querySelector(".profile__description");
let nameInput = document.querySelector(".form__subtitle_name ");
let jobInput = document.querySelector(".form__subtitle_job");

function handleFormSubmit(event) {
    event.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener("submit", handleFormSubmit);