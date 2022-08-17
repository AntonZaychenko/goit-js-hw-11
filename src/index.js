import { fetchImages } from './js/fetch-images';
import { renderGallery } from './js/render-gallery';
import Notiflix, { Notify } from 'notiflix';
import { showImages } from './js/showImages';
import { renderPagination } from './js/render-pagination';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
export {clearGallery}
const paginationList = document.querySelector('.pagination__list');
const myForm = document.querySelector('.search-form');
const inputEl = document.querySelector('input');
const myGallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.btn-load-more');
const myLink = document.querySelector('.back');
const myIcon = document.querySelector('.back__icon');
myForm.addEventListener('submit', onSubmitForm);

loadMore.addEventListener('click', onClickLoadMore);

paginationList.addEventListener('click', onClickPaginationLink);

let query = '';
let page = 1;
let perPage = 40;
let simplelightbox;

function onSubmitForm(e) {
  e.preventDefault();
  query = inputEl.value.trim();
  clearGallery();
  if (query === '') {
    clearGallery();
    
    return;
  }

  showImages(page, query)
}

function onClickLoadMore() {
  page += 1;
  showImages(page);
  
}



function onClickPaginationLink(e) {
  e.preventDefault();
  clearGallery();
  makeActive(e);
  let numberPage = e.target.textContent;
  showImages(numberPage);
  if(e.target.classList) {

  }
}

function makeActive(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }
  const total = paginationList.querySelectorAll('a');
  const result = [...total].map(a => a.classList.remove('active'));
  e.target.classList.add('active');
}

function clearGallery() {
  myGallery.innerHTML = '';
}







