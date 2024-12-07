const selectForm = document.querySelector('.select-form');
const optionList = document.querySelector('ul');
const options = Array.from(document.querySelectorAll('li'));
const searchInput = document.querySelector('.search');
const labelInput = document.querySelector('label[for="search"]');
const passwordInput = document.querySelector('.form_input');

let isSelected = null;
let initialData = [];
let movieList = [];

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
      return;
   }

   selectForm.classList.add('show');
   options.forEach((el) => el.classList.remove('selected'));
   e.stopPropagation();
});

document.addEventListener('click', () => {
   selectForm.classList.remove('show');
});

document.addEventListener('DOMContentLoaded', async () => {
   await fetch('./assets/top-100-christmas-movies.json')
      .then((response) => response.json())
      .then((data) => {
         initialData = data;
         movieList = initialData;
      })
      .catch((error) => {
         console.error('Error:', error);
      });

   if (movieList.length > 0) {
      renderList();
   }
});

const newElement = (tagName = 'div', attributes = {}, children = null) => {
   const newDomElement = document.createElement(tagName);
   for (const attrName of Object.keys(attributes)) {
      attrName && attributes[attrName] && newDomElement.setAttribute(attrName, attributes[attrName]);
   }

   if (!children) return newDomElement;

   if (!Array.isArray(children)) {
      newDomElement.innerText = children;
   } else {
      children.forEach((child) => newDomElement.appendChild(child));
   }

   return newDomElement;
};

const createMoviePreview = (movie) => {
   if (!movie) return;

   const { Image, Title, Year } = movie;
   const [imageAlt, movieLink] = [movie['Image Alt'], movie['Movie Link']];

   const movieTitle = newElement('h5', {}, Title.replace(/^\d+\.\s/, ''));
   const movieDescription = newElement('p', {}, Year);

   const textContainer = newElement('div', {}, [movieTitle, movieDescription]);
   const movieImage = newElement('img', { src: Image, alt: imageAlt });
   const movieDOMElement = newElement('li', {}, [movieImage, textContainer]);

   return movieDOMElement;
};

function renderList(str = '') {
   optionList.innerHTML = '';

   if (str) {
      const regex = new RegExp(str, 'gi');
      const filtered = initialData.filter((movie) => regex.test(movie.Title));
      movieList = filtered;
   } else {
      movieList = initialData;
   }

   if (movieList.length > 20) {
      movieList.length = 20;
   }

   movieList.forEach((movie) => (!movie ? null : optionList.append(createMoviePreview(movie))));
}

searchInput.addEventListener('input', (e) => {
   const inputValue = e.target.value.trim();
   if (inputValue) {
      labelInput.classList.add('showed');
   } else {
      labelInput.classList.remove('showed');
   }
   renderList(inputValue);
});
