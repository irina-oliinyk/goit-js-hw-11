// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import icon from './img/error.svg'




import { fetchphoto } from "./js/pixabay-api.js";
import { createMarcap } from "./js/render-function.js";



let inpurUser = document.querySelector('#name-input');
const formEl = document.querySelector('.form');
const containerCard = document.querySelector('.card-container');
const list = document.querySelector('.gallery');
const loader = document.querySelector('.loader');


// function createMarcap(arr) {
//   clearGallery();
  
//   return arr
//     .map(
//       ({ largeImageURL, previewURL, likes, views, comments, downloads }) =>
//         `<li class="gallery gallery-item">
//            <a class="gallery-link" href="${largeImageURL}">
//             <img src="${previewURL}" alt="" width="300" height="140"/> 
//             </a>
//                 <ul class="galery-item-description">
//                     <li>
//                         <p class="paragraf">Likes</p>
//                         <p class="value">${likes}</p>
//                     </li>
//                     <li>
//                         <p class="paragraf">Views</p>
//                         <p class="value">${views}</p>
//                     </li>
//                     <li>
//                         <p class="paragraf">Comments</p>
//                         <p class="value">${comments}</p>
//                     </li>
//                     <li>
//                         <p class="paragraf">Downloads</p>
//                         <p class="value">${downloads}</p>
//                     </li>
//                 </ul>
//            </li>   
//       `
//     )
//     .join('');
// };




formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  // clearGallery();
  loader.classList.remove('visually-hidden');
   const form = event.currentTarget; // посилання на елемент форми
   const queryValue = form.elements.query.value.toLowerCase(); // значення, яке написав користувач
  if (queryValue === '') {
     iziToast.show({
      backgroundColor: '#ef4040',
      close: false,
      closeOnClick: true,
      progressBarColor: 'white',
      title: 'Error',
      titleColor: 'white',
      position: 'topRight',
      messageColor: 'white',
      messageSize: '16px',
      message: 'Sorry, there are no images matching your search query. Please try again!',
      icon: 'icon-error.svg',
      iconUrl: icon
        });
   } else {
   console.log(queryValue);
    inpurUser.value = '';
    let valueCategori = queryValue.toLowerCase();
  fetchphoto(valueCategori)
    .then(data => {
      let hitsArray = data.hits;
      console.log(hitsArray);
      displayImages(hitsArray);
      createMarcap(data.hits);
      loader.classList.add('visually-hidden');
      
    })// запускаємо функцію, яка відмалює наші карточки
  .catch(onFetchError); // якщо робиться запит на неіснуючого покемона (404) - викликається ця фукнція для обробки помилки
  }
  
}




function onFetchError(error) {
   iziToast.show({
          backgroundColor: '#ef4040',
          close: false,
          closeOnClick: true,
          progressBarColor: 'white',
          title: 'Error',
          titleColor: 'white',
          position: 'topRight',
          icon: 'icon-error.svg',
          messageColor: 'white',
          messageSize: '16px',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          iconUrl: icon
        });
};


function clearGallery() {
  list.innerHTML = '';
}

function displayImages(hitsArray) {
  clearGallery();
 
  if (hitsArray.length === 0) {
    loader.classList.add('visually-hidden');
    return iziToast.show({
          backgroundColor: '#ef4040',
          close: false,
          closeOnClick: true,
          progressBarColor: 'white',
          title: 'Error',
          titleColor: 'white',
          position: 'topRight',
          icon: 'icon-error.svg',
          messageColor: 'white',
          messageSize: '16px',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          iconUrl: icon
    });
    
  } else if (hitsArray.length < 40) {
    iziToast.show({
          backgroundColor: '#ef4040',
          close: false,
          closeOnClick: true,
          progressBarColor: 'white',
          title: 'Error',
          titleColor: 'white',
          iconUrl: icon,
          position: 'topRight',
          icon: 'icon-error.svg',
          messageColor: 'white',
          messageSize: '16px',
          message: 'Sorry, das ist alles, was wir haben!'
    });
    createMarcap(hitsArray);
  } else {
    createMarcap(hitsArray);
  }
}


