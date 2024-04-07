document.addEventListener('DOMContentLoaded', function () {
  const headerSection = document.getElementById('header')
  const burger = document.querySelector('.burger')
  const burgerNav = document.querySelector('.burger__nav-list')
  const burgerLine = document.querySelector('.burger__line')

  function updateBurgerVisibility() {
    if (window.scrollY > headerSection.offsetHeight - 30) {
      burger.style.display = 'flex'
    } else {
      burger.style.display = 'none'
    }
  }

  function initBurgerVisibility() {
    updateBurgerVisibility()
    if (!burgerNav.contains(event.target) && event.target !== burger) {
      burgerNav.style.display = 'none'
    }
  }

  initBurgerVisibility()

  window.addEventListener('scroll', initBurgerVisibility)

  burger.addEventListener('click', function () {
    if (burgerNav.style.display === 'flex') {
      burgerNav.style.display = 'none'
      burger.style.display = 'flex'
    } else {
      burgerNav.style.display = 'flex'
      burger.style.display = 'none'
    }
  })

  document.addEventListener('click', function (event) {
    if (!burgerNav.contains(event.target) && event.target !== burger) {
      burgerNav.style.display = 'none'
      burger.style.display = 'flex'
      initBurgerVisibility()
    }
  })

  const burgerNavLinks = document.querySelectorAll('.burger__nav-link')
  burgerNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      burgerNav.style.display = 'none'
      burger.style.display = 'flex'
    })
  })
})
