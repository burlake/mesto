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




function qs(selector) {
    return document.querySelector(selector);
  }
  
  function formSubmitHandler(evt) {
    evt.preventDefault();
    qs('.profile__name').textContent = qs('.popup__input_type_name').value;
    qs('.profile__description').textContent = qs('.popup__input_type_description').value;
    closeEditForm();
  }
  
  function closeEditForm() {}
  
  document.getElementById('submit').addEventListener('click', formSubmitHandler);