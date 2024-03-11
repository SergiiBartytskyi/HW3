import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

populateInput();

function onSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(e) {
  const formData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInput() {
  const localStorageValue = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (localStorageValue) {
    email.value = localStorageValue.email;
    message.value = localStorageValue.message;
  }
}
