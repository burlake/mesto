//попап
const popup = document.querySelector(".popup");

//форма и инпуты
const formElement = document.querySelector(".form");

//кнопки
const editProfile = document.querySelector(".profile__edit-button");
const popupClose = document.querySelector(".popup__close-button");

//открытие попапа
editProfile.addEventListener("click", openPopup);
function openPopup() {
    popup.classList.add("popup_opened");
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
  }


//закрытиe попапа
popupClose.addEventListener("click", closePopup);
function closePopup() {
    popup.classList.remove("popup__opened");
}


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