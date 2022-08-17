export {history_saerch}

import { fetchImages } from "./fetch-images";
import { showImages } from "./showImages";
import { clearGallery } from "..";
const myInput = document.querySelector(".form__input");
const btnClear = document.querySelector(".clear");
const historyEl = document.querySelector(".history");
const myForm = document.querySelector("form");
const numberOfPicture = document.querySelector('.numberOfPicture')
let query = "";

myForm.addEventListener("submit", onSubmitForm);
myInput.addEventListener("click", onClickInput);
btnClear.addEventListener("click", onClearLocaleStorage);

function onClearLocaleStorage() {
  localStorage.clear();
  list.innerHTML = " ";
}

const list = document.querySelector("#results");

list.addEventListener('click', onClick)
function onClick(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  myInput.value = e.target.textContent
  clearGallery()
 showImages()
  console.log('click')
}

function onSubmitForm(e) {
  e.preventDefault();
  query = myInput.value;
  if (query === "") {
    return;
  }
  renderFirstList()
}
function onClickInput() {
    const bodyEl = document.querySelector('body')
    bodyEl.classList.toggle('overflow')
  historyEl.classList.toggle("hide");
  renderList()
}

function saveToLocaleStorage(query) {
  let vasluesFromLocaleStorageParsed = [];
  let vasluesFromLocaleStorage = localStorage.getItem("value");
  if (vasluesFromLocaleStorage !== null) {
    vasluesFromLocaleStorageParsed = JSON.parse(vasluesFromLocaleStorage);
  }
  
  vasluesFromLocaleStorageParsed.push(query);
  const uniqueGenres = vasluesFromLocaleStorageParsed.filter((genre, index, array) => array.indexOf(genre)=== index);
  localStorage.setItem("value", JSON.stringify(uniqueGenres));

  return uniqueGenres;
}
function renderFirstList() {
    const historySearch = saveToLocaleStorage(query);
    const markup = (results) => {
      const itemAdd = document.createElement("li");
  
      itemAdd.classList.add("item");
      itemAdd.innerHTML = results;
      list.innerHTML = " ";
      return itemAdd;
    };
  
    if (list) {
      list.append(...historySearch.map(markup));
    }
}
function renderList() {
    const historySearchFromLS = JSON.parse(localStorage.getItem("value"));
    if (historySearchFromLS === null) {
      return;
    }
    const markup = (results) => {
      const itemAdd = document.createElement("li");
      itemAdd.classList.add("item");
      itemAdd.innerHTML = results;
      list.innerHTML = " ";
      return itemAdd;
    };
  
    if (list) {
      list.append(...historySearchFromLS.map(markup));
    }

}


