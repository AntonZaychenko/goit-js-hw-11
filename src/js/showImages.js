import Notiflix, { Notify } from 'notiflix';
import { fetchImages } from './fetch-images';
import { renderGallery } from './render-gallery';
import { renderPagination } from './render-pagination';
import { clearGallery } from '..';

export { showImages };
const inputEl = document.querySelector('input');
const loadMore = document.querySelector('.btn-load-more')


let query = inputEl.value.trim();
let page = 1;
let perPage = 40;

const myLink = document.querySelector('.back');
const myIcon = document.querySelector('.back__icon');

function showImages(page) {
  
  let query = inputEl.value.trim();
 
  fetchImages(query, page, perPage).then(({ data }) => {
    if(data.totalHits === 0) {
      Notify.failure('Sorry, there are no images matching your search query. Please try again.')
    } else {
      renderGallery(data.hits);
      simplelightbox = new SimpleLightbox('.gallery a').refresh();
      Notify.success(`Hooray! We found ${data.totalHits} images.`)
      loadMore.classList.remove('is-hidden');
    } 
     if(page > data.totalHits / perPage) {
      loadMore.classList.add('is-hidden');
      Notify.info(
        'Sorry, there are no images matching your search query. Please try again.'
      )
    } else if(page > 1) {
      onPageScrolling();
    }
    
    renderPagination(data.totalHits, page, perPage);
   
  });
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

const openBtn = document.querySelector('.openBtn')
const myFilter = document.querySelector('.filter')
openBtn.addEventListener('click', onOpenFilter)

function onOpenFilter(e) {
  e.preventDefault()
  
myFilter.classList.toggle('filterHidden')
Notify.info('Please select a category!')
}
