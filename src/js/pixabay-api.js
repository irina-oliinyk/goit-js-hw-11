// Функції для HTTP-запитів



const elements = {
  url: 'https://pixabay.com/api/',
  key: '44801301-54ead35aff71c3b10e6d6b08d',
  orientationPhoto: 'horizontal',
  typeImage: 'photo',
  quantität: '40',
  safesearch: 'true'
  
};

export function fetchphoto(query) { 
  return fetch(`${elements.url}?key=${elements.key}&orientation=${elements.orientationPhoto}&image_type=${elements.typeImage}&per_page=${elements.quantität}&safesearch=${elements.safesearch}&q=${query}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
};

