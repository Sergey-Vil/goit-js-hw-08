import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('input', throttle(onFornElInput, 500));
formEl.addEventListener('submit', onFormElSubmit);

let formData = {};

function onFornElInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

getItemsLs();

function getItemsLs() {
  const dataFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (dataFeedback) {
    emailEl.value = dataFeedback.email || '';
    messageEl.value = dataFeedback.message || '';

    formData = {
      email: dataFeedback.email,
      message: dataFeedback.message,
    };
  }
}

function onFormElSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}
