export { renderPagination };

const paginationList = document.querySelector('.pagination__list');
const btnLeft = document.querySelector('.left')
const numberOfPicture = document.querySelector('.number--of--picture')

function renderPagination(totalHits, page) {
    let countPage = Math.round(totalHits / numberOfPicture.value);
    let html = '';
    for (let i = 1; i <= countPage; i += 1) {
      
      html += `
        <li class ="pagination__item ">
          <a href="" class="pagination__link ">${i}</a>
        </li>`;
        
  }
  disabledPage(page, countPage)
  let result = countPage - 3
  paginationList.innerHTML = html;
  const myItemEl = document.querySelectorAll('.pagination__item')
  const myLiNone = document.querySelector('#testers')
 
  // if(countPage > 5) {
  //   for(let i = 3; i < result; i++) {
  //    myItemEl[i].classList.add('none')
  //   }
  //   myLiNone.classList.remove('none')
  // }

  
}

function disabledPage(page) {
  btnLeft.disabled = true
  btnLeft.classList.add('disabled')
  if(page > 1) {
    btnLeft.disabled = false
    btnLeft.classList.remove('disabled')
  } 
}  
