//попап
const popup = document.querySelector('.popup');
const aboutPopup = document.querySelector('.popup_about');
//форма и инпуты
//const formElement = document.querySelector('.subtitle');
const nameInput = document.querySelector('.form__subtitle_name');
//const jobInput = document.querySelector('.form__subtitle_job');
//профиль юзера
//const popupNameInput = document.querySelector('.profile__user-name');
//const popupDescrInput = document.querySelector('.profile__user-job');
//кнопки
const aboutButton = document.querySelector('.edit-button');
const aboutCloseButton = aboutPopup.querySelector('.popup__close-button');

//открытие попапа
aboutButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    aboutPopup.classList.add('popup_opened');
})

//закрытие попапа
aboutCloseButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    aboutPopup.classList.remove('popup_opened');
})
//закрытие попапа за пределами кнопки popup__close-button
//aboutPopup.addEventListener('click', (event) => {
    //event.preventDefault();
    //console.log(event.target , event.currentTarget);
    //if(event.target === event.currentTarget){
        //aboutPopup.classList.remove('popup_opened')
    //};
//})

//функция обработки отправки формы
//function handleFormSubmit (event) {
    //event.preventDefault(); 
    //popupNameInput.textContent = nameInput.value;
    //popupDescrInput.textContent = jobInput.value;
    //SaveButton();
//}
//let SaveButton = document.querySelector('.action-button');
//SaveButton.onclick = function (event){
    //event.preventDefault(); 
    //console.log('work');
//}


  function handleFormSubmit (event) {
    event.preventDefault();
    popupNameInput.textContent = nameInput.value;
    popupDescrInput.textContent = jobInput.value;

  }
  
  const formElement = document.querySelector('.subtitle');
  const popupNameInput = document.querySelector('.profile__user-name');
  const jobInput = document.querySelector('.form__subtitle_job');

  formElement.addEventListener('submit', handleFormSubmit);