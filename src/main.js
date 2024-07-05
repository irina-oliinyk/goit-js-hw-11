let inpurUser = document.querySelector('#name-input');
const formEl = document.querySelector('.form')

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    let inputValue = inpurUser.value.trim();
   if (inputValue === '') {
     alert('Error');
   } else {
   console.log(inputValue);
   inpurUser.value = '';
  }
}



   const url = 'https://pixabay.com/api/';
   const key = 'key=44801301-54ead35aff71c3b10e6d6b08d';
 

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
		console.log(data);
  })
  .catch(error => {
    // Error handling
		console.log(error);
  });