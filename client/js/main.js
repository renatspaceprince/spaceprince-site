const swiper = new Swiper('.swiper', {
  speed: 2,
  spaceBetween: 0,
  effect: 'fade',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
})

const cardBtns = document.querySelectorAll('.price__card-header')

for (let div of cardBtns) {
  div.addEventListener('click', showCard)
}

function showCard() {
  const parent = this.closest('.price__card')
  if (parent) {
    const allCards = document.querySelectorAll('.price__card')
    allCards.forEach((card) => {
      if (card !== parent) {
        card.querySelector('.price__card-footer').classList.add('none')
        card.querySelector('.price__card-list').classList.add('none')
        card.querySelector('.price__card-price').classList.add('none')
        card.querySelector('.price__card-name').classList.remove('color')
      }
    })

    parent.querySelector('.price__card-footer').classList.toggle('none')
    parent.querySelector('.price__card-list').classList.toggle('none')
    parent.querySelector('.price__card-price').classList.toggle('none')
    parent.querySelector('.price__card-name').classList.toggle('color')
  }
}
