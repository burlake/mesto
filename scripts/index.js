const aboutButton = document.querySelector('.edit-button');
const aboutPopup = document.querySelector('.popup_about');
const aboutCloseButton = aboutPopup.querySelector('.popup__close-button');
const popupNameInput = document.querySelector('.form__subtitle_name');
const popupDescrInput = document.querySelector('.form__subtitle_job');

aboutButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    aboutPopup.classList.add('popup_opened');
})

aboutCloseButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    aboutPopup.classList.remove('popup_opened');
})

aboutPopup.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.targe, event.currentTarget);
    if(event.target === event.currentTarget){
        aboutPopup.classList.remove('popup_opened')
    };
})





let profile__name = document.querySelector('.subtitle');
let formElement = document.querySelector('.edit-button');
let nameInput = document.querySelector('.form__subtitle_name');
let jobInput = document.querySelector('.form__subtitle_job');

function handleFormSubmit (evt) {
    evt.preventDefault();   
    profile__name.textContent = nameInput.value;
    profile__description.textContent = jobInput.value;
    closePopup(popup);
}
formElement.addEventListener('submit', handleFormSubmit);



