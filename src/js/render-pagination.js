export { renderPagination };

const paginationList = document.querySelector('.pagination__list');
const btnLeft = document.querySelector('.left')
const numberOfPicture = document.querySelector('.number--of--picture')

function renderPagination(totalHits, page) {
    let countPage = Math.round(totalHits / numberOfPicture.value);
    let html = '';
    for (let i = 1; i <= countPage; i += 1) {
      
      html += `
        <li class ="pagination__item">
          <a href="" class="pagination__link ">${i}</a>
        </li>`;
        
  }
  disabledPage(page, countPage)
  paginationList.innerHTML = html;
}

function disabledPage(page) {
  btnLeft.disabled = true
  if(page > 1) {
    btnLeft.disabled = false
  } 
}  
