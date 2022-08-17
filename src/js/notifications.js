
import Notiflix, { Notify } from 'notiflix';

export {notifications}

function notifications(data, page, perPage) {
    if(data.totalHits === 0) {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      } 
      if(page > data.totalHits / perPage) {
        Notify.info(
            'Sorry, there are no images matching your search query. Please try again.'
          )
      } 
      if (data.totalHits > 1) {
        Notify.success(`Hooray! We found ${data.totalHits} images.`)
    }   
}
