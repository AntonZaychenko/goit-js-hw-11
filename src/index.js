

import { showImages } from './js/showImages';
import { renderPagination } from './js/render-pagination';
import { speackRecognation } from './js/speackRocognation';
import { history_saerch } from './js/history_search';
import { notifications } from './js/notifications';
export {clearGallery}



const btnLeft = document.querySelector('.left')
const btnRight = document.querySelector('.right')
const paginationList = document.querySelector('.pagination__list');
const myForm = document.querySelector('.search-form');
const inputEl = document.querySelector('input');
const myGallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.btn-load-more');


myForm.addEventListener('submit', onSubmitForm);

loadMore.addEventListener('click', onClickLoadMore);

paginationList.addEventListener('click', onClickPaginationLink);
btnLeft.addEventListener('click', onClickLeft)
btnRight.addEventListener('click', onClickRight)

let query = '';
let page = 1;


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
  showImages();

  if (e.target.nodeName !== 'A') {
    return
  } else {
    const total = paginationList.querySelectorAll('a')
    const result = [...total].map(a => a.classList.remove('active'))
    e.target.classList.add('active')
    
  }
}


function clearGallery() {
  myGallery.innerHTML = '';
}

function onClickLeft() {
page -= 1
showImages(page) 
clearGallery();
}

function onClickRight() {
page += 1
showImages(page)
clearGallery();
}

const mySelect = document.querySelector('.numberOfPicture')
mySelect.addEventListener('change', fun1)
function fun1() {
console.log(1)
clearGallery()
showImages()
}



 
console.log('сработало')