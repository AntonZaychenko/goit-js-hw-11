export { showImages };


import { fetchImages } from './fetch-images';
import { renderGallery } from './render-gallery';
import { renderPagination } from './render-pagination';
import { notifications } from './notifications';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix, { Notify } from 'notiflix';
const inputEl = document.querySelector('input');
const loadMore = document.querySelector('.btn-load-more')
const btnRight = document.querySelector('.right')
const numberOfPicture = document.querySelector('.number--of--picture')
const myPagination = document.querySelector('.pagination')

let perPage = numberOfPicture.value;
let simplelightbox
function showImages(page) {
  
  let query = inputEl.value.trim();
  if(query === '') {
    loadMore.classList.add('is-hidden');
    myPagination.classList.add('pghd')
    return
  }
 console.log(1)
  return fetchImages(query, page, numberOfPicture.value).then(({ data }) => {
   
    if(data.totalHits === 0) {
      
    } else {
      renderGallery(data.hits);
      simplelightbox = new SimpleLightbox('.gallery a').refresh();
      loadMore.classList.remove('is-hidden');
      myPagination.classList.remove('pghd')
      btnRight.disabled = false
      btnRight.classList.remove('disabled')
    } 
     if(page > data.totalHits / numberOfPicture.value) {
      loadMore.classList.add('is-hidden');
      btnRight.disabled = true
      btnRight.classList.add('disabled')
        Notify.info(
            'Sorry, there are no images matching your search query. Please try again.'
          )
      
    } else if(page > 1) {
      onPageScrolling();
    }
    renderPagination(data.totalHits, page, perPage);
    
    return data
  }).then((data) => {
    return notifications(data)
  })
  
}

function onPageScrolling() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}







