import axios from 'axios';
export { fetchImages };
const buttons = document.querySelectorAll('.button')
const btnAll = document.querySelector('button-all')
const btnAct = document.querySelector('.filter-active')


axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '28851303-896d813d757a6464ec79bc796';
let category = ''
function makeFilter(e) {
  const total = document.querySelectorAll('.button')
  const result = [...total].map(button => button.classList.remove('filter-active'));
}

 buttons.forEach((button) => {
  button.addEventListener('click', () => {
    makeFilter()
    const classes = button.classList
    classes.add('filter-active')
    category = button.dataset.filter
    
  })
  
})

async function fetchImages(query, page, perPage ) { 
  
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}&category=${category}`,
  );
  return response;
}




