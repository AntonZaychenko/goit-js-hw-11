export { renderPagination };

const paginationList = document.querySelector('.pagination__list');
const myPagination = document.querySelector('.pagination');

function renderPagination(totalHits, page, perPage) {
    let countPage = Math.round(totalHits / perPage);

    let html = '';

    for (let i = 1; i <= countPage; i += 1) {
      let lastClass = ''
      if(i === countPage) {
        lastClass = 'last'
      }
      html += `
        <li class ="pagination__item">
          <a href="" class="pagination__link ">${i}</a>
        </li>`;
        
  }

  paginationList.innerHTML = html;
}
