const form = document.querySelector('.form');
const passwordInput = document.querySelector('.form_input');
const eye_button = document.querySelector('.icon_eye');

eye_button.addEventListener('click', () => {
   form.classList.toggle('show');
   passwordInput.type = form.classList.contains('show') ? 'text' : 'password';
});
