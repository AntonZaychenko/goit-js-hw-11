
import Notiflix, { Notify } from 'notiflix';

export {notifications}
const numberOfPicture = document.querySelector('.number--of--picture')

function notifications(data, page, totalHits) {
  
  
    if(data.totalHits === 0) {
      console.log('eror')
        Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      } 
      
      if(page > data.totalHits / numberOfPicture.value) {
        console.log('info')
        Notify.info(
            'Sorry, there are no images matching your search query. Please try again.'
          )
      } else {
        Notify.success(`Hooray! We found ${numberOfPicture.value} images.`)
      }
      
}
