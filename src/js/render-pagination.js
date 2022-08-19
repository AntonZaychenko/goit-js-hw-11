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

  paginationList.innerHTML = html;

  let result = countPage - 3

  const myItemEl = document.querySelectorAll('.pagination__item')
  const myItemLink = document.querySelectorAll('.pagination__link')
  
  
  if(countPage > 7) {
    for(let i = 3; i < result; i++) {
      myItemEl[i].classList.add('none')
      myItemEl[3].classList.remove('none')
      myItemEl[3].classList.add('togle')
    }
    myItemEl[3].textContent = '. . .'
  }
  
  
}

function disabledPage(page) {
  btnLeft.disabled = true
  btnLeft.classList.add('disabled')
  if(page > 1) {
    btnLeft.disabled = false
    btnLeft.classList.remove('disabled')
  } 
}  
