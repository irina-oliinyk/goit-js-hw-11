// Функції для відображення елементів інтерфейсу

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


export function createMarcap(arr) {
  const galleryList = document.querySelector('.gallery');
  galleryList.innerHTML = '';
  const markup = images
    .map(
      ({ largeImageURL, previewURL, likes, views, comments, downloads }) =>
               `<li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="" class="card-img"/>
        </a>
        <ul class="galery-item-description">
          <li>
            <p class="count-text">Likes</p>
            <p class="count">${likes}</p>
          </li>
          <li>
            <p class="count-text">Views</p>
            <p class="count">${views}</p>
          </li>
          <li>
            <p class="count-text">Comments</p>
            <p class="count">${comments}</p>
          </li>
          <li>
            <p class="count-text">Downloads</p>
            <p class="count">${downloads}</p>
          </li>
        </ul>
      </li>
      `
    )
        .join('');
    galleryList.insertAdjacentHTML('afterbegin', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
};


