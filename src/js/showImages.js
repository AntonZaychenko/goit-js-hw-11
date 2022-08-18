export { showImages };


import { fetchImages } from './fetch-images';
import { renderGallery } from './render-gallery';
import { renderPagination } from './render-pagination';
import { notifications } from './notifications';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const inputEl = document.querySelector('input');
const loadMore = document.querySelector('.btn-load-more')
const btnRight = document.querySelector('.right')
const numberOfPicture = document.querySelector('.numberOfPicture')
const myPagination = document.querySelector('.pagination')

let perPage = numberOfPicture.value;

function showImages(page) {
  let query = inputEl.value.trim();
  return fetchImages(query, page, perPage).then(({ data }) => {
   
    if(data.totalHits === 0) {
      // Notify.failure('Sorry, there are no images matching your search query. Please try again.')
    } else {
      renderGallery(data.hits);
      simplelightbox = new SimpleLightbox('.gallery a').refresh();
      loadMore.classList.remove('is-hidden');
      myPagination.classList.remove('pghd')
      btnRight.disabled = false
    } 
     if(page > data.totalHits / perPage) {
      loadMore.classList.add('is-hidden');
      btnRight.disabled = true
    
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







