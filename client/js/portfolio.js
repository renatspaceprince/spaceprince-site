function openGallery(id) {
  const url = new URL('gallery.html', window.location.href)
  const queryParams = new URLSearchParams(url.search)

  queryParams.set('id', id)
  url.search = queryParams.toString()

  window.location.href = url.href
}

const addListenersToGalleryItems = () => {
  const galleryItems = document.querySelectorAll('.gallery__item')

  for (const galleryElement of galleryItems) {
    galleryElement.addEventListener('click', () => {
      console.log(galleryElement)
      openGallery(galleryElement.dataset.id)
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  addListenersToGalleryItems()
})

const filterBox = document.querySelectorAll('.gallery__item')

document.querySelector('ul').addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') return false

  let filterClass = event.target.dataset['f']

  filterBox.forEach((elem) => {
    elem.classList.remove('hide')
    if (!elem.classList.contains(filterClass)) {
      if (filterClass != 'all') {
        elem.classList.add('hide')
      }
    }
  })
})

console.log(filterBox)
