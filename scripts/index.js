const aboutButton = document.querySelector('.edit-button');
const aboutPopup = document.querySelector('.popup_about');
const aboutCloseButton = aboutPopup.querySelector('.popup__close-button');

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
    console.log(event.target, event.currentTarget);
    aboutPopup.classList.remove('popup_opened');
})