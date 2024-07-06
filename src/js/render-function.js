// Функції для відображення елементів інтерфейсу

export function createMarcap(arr) {
  clearGallery();
  
  return arr
    .map(
      ({ largeImageURL, previewURL, likes, views, comments, downloads }) =>
        `<li class="gallery gallery-item">
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
      `
    )
    .join('');
};
