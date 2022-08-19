
import Notiflix, { Notify } from 'notiflix';

export {notifications}
const numberOfPicture = document.querySelector('.number--of--picture')

function notifications(data, page, totalHits) {
  let perPage = numberOfPicture.value;
  
    if(data.totalHits === 0) {
      console.log('eror')
        Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      } 
      if(page > data.totalHits / perPage) {
        console.log('info')
        Notify.info(
            'Sorry, there are no images matching your search query. Please try again.'
          )
      } 
      if (data.totalHits > 1) {
        Notify.success(`Hooray! We found ${data.totalHits} images.`)
    }   
}
