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
    console.log(event.targe, event.currentTarget);
    if(event.target === event.currentTarget){
        aboutPopup.classList.remove('popup_opened')
    };
})







// Находим форму в DOM
let formElement = document.querySelector('.edit-button');
// Находим поля формы в DOM
let nameInput = document.querySelector('.form__subtitle_name');
let jobInput = document.querySelector('.form__subtitle_job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);