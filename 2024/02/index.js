const selectForm = document.querySelector('.select-form');
const optionList = document.querySelector('ul');
const options = Array.from(document.querySelectorAll('li'));
const searchInput = document.querySelector('.search');
const passwordInput = document.querySelector('.form_input');

let isSelected = null;

optionList.addEventListener('click', (e) => {
   //    console.log(e.target);
});

selectForm.addEventListener('click', (e) => {
   const isSelected = e.target.classList.contains('selected');

   if (isSelected) {
      e.target.classList.remove('selected');
      selectForm.classList.add('show');
      e.stopPropagation();
      return searchInput.focus();
   }

   if (e.target.tagName.includes('LI')) {
      e.target.classList.add('selected');
      //   selectForm.classList.remove('show');
      //   e.stopPropagation();
      return;
   }

   selectForm.classList.add('show');
   options.forEach((el) => el.classList.remove('selected'));
   e.stopPropagation();
});

function handleShowInput() {
   if (isSelected) {
      searchInput.style.display = 'none';
   } else {
      searchInput.style.display = 'block';
   }
}

document.addEventListener('click', () => {
   console.log('loaded');
   selectForm.classList.remove('show');
});
