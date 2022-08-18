

import { showImages } from './js/show-Images';
import { renderPagination } from './js/render-pagination';
import { speackRecognation } from './js/speack-recognation';
import { history_saerch } from './js/history-search';
import { notifications } from './js/notifications';

export {clearGallery}



const btnLeft = document.querySelector('.left')
const btnRight = document.querySelector('.right')
const paginationList = document.querySelector('.pagination__list');
const inputEl = document.querySelector('input');
const myGallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.btn-load-more');

loadMore.addEventListener('click', onClickLoadMore);
paginationList.addEventListener('click', onClickPaginationLink);
btnLeft.addEventListener('click', onClickLeft)
btnRight.addEventListener('click', onClickRight)


let page = 1;


function onClickLoadMore() {
  page += 1;
  showImages(page);
}

function onClickPaginationLink(e) {
e.preventDefault()
if(e.target.nodeName !== 'A') {
  return
}
  let numberPage = e.target.textContent;
  showImages(numberPage) 
  clearGallery(); 
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

const mySelect = document.querySelector('.number--of--picture')
mySelect.addEventListener('change', onChangePerPage)
function onChangePerPage() {
if(inputEl.value === '') {
  return
}
clearGallery()
showImages()
}

// function onSubmitForm(e) {
//   e.preventDefault();
//   query = inputEl.value.trim();
//   clearGallery();
//   if (query === '') {
//     clearGallery();
    
//     return;
//   }

//   showImages(page, query)
  
  
// }
console.log('push')