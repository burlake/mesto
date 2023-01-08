//попап 
const popup = document.querySelector(".popup"); 
//const aboutPopup = document.querySelector(".popup-about"); 
//форма и инпуты 
const formElement = document.querySelector(".form"); 
const aboutButton = document.querySelector(".profile__edit-button"); 
const aboutCloseButton = aboutPopup.querySelector(".popup__close-button");
 
//открытие попапа 
function openPopup() {
    popup.classList.add("popup_opened");
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
  }
  aboutButton.addEventListener("click", openPopup);

//закрытие попапа
function closePopup() {
    popup.classList.remove("popup_opened");
  }
aboutCloseButton.addEventListener("click", closePopup); 

//функция обработки отправки формы
let userName = document.querySelector(".profile__name");
let userJob = document.querySelector(".profile__description");
let nameInput = document.querySelector(".form__subtitle_name");
let jobInput = document.querySelector(".form__subtitle_job");

function handleFormSubmit(event) {
    event.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup();
}
formElement.addEventListener("submit", handleFormSubmit);

//закрытик по вебинару 
//const aboutPopup = document.querySelector(".popup-about");
//открытие попапа 
//aboutButton.addEventListener("click", (event) => {
    //aboutPopup.classList.add("popup__opened");
//});
//закрытие попапа за пределами кнопки popup__close-button
//aboutPopup.addEventListener('click', (event) => {
//event.preventDefault();
//console.log(event.target , event.currentTarget);
//if(event.target === event.currentTarget){
//aboutPopup.classList.remove('popup__opened')
//};
//})