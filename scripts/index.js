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



let formElement = document.querySelector('.edit-button');
formElement.method = 'GET';
document.body.append(formElement);
formElement.submit(); 

let nameInput = document.querySelector('.form__subtitle_name');
nameInput.method = 'GET';
document.body.append(nameInput);
form.submit(); 

let jobInput = document.querySelector('.form__subtitle_job');
jobInput.method = 'GET';
document.body.append(jobInput);
form.submit(); 


function handleFormSubmit (evt) {
    evt.preventDefault();
    form__subtitle_name.textContent = nameInput.value;
    form__subtitle_job.textContent = jobInput.value;
    closePopup(popup);
}
formElement.addEventListener('submit', handleFormSubmit);
