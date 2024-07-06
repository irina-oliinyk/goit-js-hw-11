// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import Group from './img/error.svg'


import { fetchphoto } from "./js/pixabay-api";
// import { createMarcap } from "./js/render-function";



let inpurUser = document.querySelector('#name-input');
const formEl = document.querySelector('.form');
const containerCard = document.querySelector('.card-container');



function createMarcap(arr) {
  containerCard.innerHTML = '';
  return arr
    .map(
      ({ largeImageURL, previewURL, likes, views, comments, downloads }) =>
        `<ul class="gallery">
          <li class="gallery-item">
           <a class="gallery-link" href="${largeImageURL}">
            <img src="${previewURL}" alt="" width="300" height="140"/> 
            </a>
                <ul class="galery-item-description">
                    <li>
                        <p class="paragraf">Likes</p>
                        <p class="value">${likes}</p>
                    </li>
                    <li>
                        <p class="paragraf">Views</p>
                        <p class="value">${views}</p>
                    </li>
                    <li>
                        <p class="paragraf">Comments</p>
                        <p class="value">${comments}</p>
                    </li>
                    <li>
                        <p class="paragraf">Downloads</p>
                        <p class="value">${downloads}</p>
                    </li>
                </ul>
           </li>
        </ul>
      `
    )
    .join('');
};




formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
 
   const form = event.currentTarget; // посилання на елемент форми
   const queryValue = form.elements.query.value.toLowerCase(); // значення, яке написав користувач


   if (queryValue === '') {
     alert('Error');
   } else {
   console.log(queryValue);
   inpurUser.value = '';
  }
  let valueCategori = queryValue.toLowerCase();
  fetchphoto(valueCategori)
    .then(data => {
      let hitsArray = data.hits;
      console.log(hitsArray);
      displayImages(hitsArray);
      containerCard.insertAdjacentHTML('afterbegin', createMarcap(hitsArray));
      // clearGallery()
    })// запускаємо функцію, яка відмалює наші карточки
  .catch(onFetchError); // якщо робиться запит на неіснуючого покемона (404) - викликається ця фукнція для обробки помилки
}




function onFetchError(error) {
   iziToast.show({
          backgroundColor: '#ef4040',
          close: false,
          closeOnClick: true,
          progressBarColor: 'white',
          title: 'Error',
          titleColor: 'white',
          iconUrl: Group,
          position: 'topRight',
          icon: 'icon-error.svg',
          messageColor: 'white',
          messageSize: '16px',
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
};


function clearGallery() {
    containerCard.innerHTML = '';
}

function displayImages(hitsArray) {
  clearGallery();

  if (hitsArray.length === 0) {
   iziToast.show({
          backgroundColor: '#ef4040',
          close: false,
          closeOnClick: true,
          progressBarColor: 'white',
          title: 'Error',
          titleColor: 'white',
          iconUrl: Group,
          position: 'topRight',
          icon: 'icon-error.svg',
          messageColor: 'white',
          messageSize: '16px',
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
  }else if (hitsArray.length < 40) {
    iziToast.show({
          backgroundColor: '#ef4040',
          close: false,
          closeOnClick: true,
          progressBarColor: 'white',
          title: 'Error',
          titleColor: 'white',
          iconUrl: Group,
          position: 'topRight',
          icon: 'icon-error.svg',
          messageColor: 'white',
          messageSize: '16px',
          message: 'Sorry, das ist alles, was wir haben!'
        });
  }
}

