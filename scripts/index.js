//попап 
const popup = document.querySelector(".popup"); 
const aboutPopup = document.querySelector(".popup-about");
//форма
const formElement = document.querySelector(".form"); 
const aboutButton = document.querySelector(".profile__edit-button"); 
const aboutCloseButton =  document.querySelector(".popup__close-button");
//инпуты 
let userName = document.querySelector(".profile__name");
let userJob = document.querySelector(".profile__description");
let nameInput = document.querySelector(".form__subtitle_name");
let jobInput = document.querySelector(".form__subtitle_job");
 
//открытие попапа 
function openPopup(aboutPopup) {
    aboutPopup.classList.add("popup_opened");
};

aboutButton.addEventListener("click", function() {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    openPopup(aboutPopup);
});

//закрытие попапа
function closePopup() {
    popup.classList.remove("popup_opened");
  }
  aboutCloseButton.addEventListener("click", closePopup); 

//функция обработки отправки формы
function handleFormSubmit(event) {
    event.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup();
}
formElement.addEventListener("submit", handleFormSubmit);

//закрытик по вебинару 

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