const aboutButton = document.querySelector('.edit-button');
const aboutPopup = document.querySelector('.popup_about');

aboutButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    aboutPopup.classList.add('popup_opend');
})