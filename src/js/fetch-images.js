export { fetchImages };

import axios from 'axios';

const mySelect = document.querySelector('.select')
const numberOfPicture = document.querySelector('.number--of--picture')
const myCategory = document.querySelector('.open--category')

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

  mySelect.classList.toggle('hide--category')
  numberOfPicture.classList.toggle('hide--category')
  
  if(mySelect.classList.contains('hide--category')) {
    myCategory.textContent = 'Show-Category/Amount Picture'
  } else {
    myCategory.textContent = 'Hide-Category/Amount Picture'
  }
}



