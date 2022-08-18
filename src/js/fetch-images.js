export { fetchImages };

import axios from 'axios';

const mySelect = document.querySelector('.select')
const numberOfPicture = document.querySelector('.numberOfPicture')
const myCategory = document.querySelector('.openCategory')

myCategory.addEventListener('click', onopenCategory)

axios.defaults.baseURL = 'https://pixabay.com/api/';

const KEY = '28851303-896d813d757a6464ec79bc796';

async function fetchImages(query, page, perPage ) { 
  perPage = numberOfPicture.value
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}&category=${mySelect.value}`,
  );
  return response;
}

function onopenCategory() {

  mySelect.classList.toggle('hideCategory')
  numberOfPicture.classList.toggle('hideCategory')
  
  if(mySelect.classList.contains('hideCategory')) {
    myCategory.textContent = 'Show-Category/Amount Picture'
  } else {
    myCategory.textContent = 'Hide-Category/Amount Picture'
  }
}


