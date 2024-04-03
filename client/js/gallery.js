const PORTFOLIO_CONFIG = {
  elena: {
    path: './img/portfolio/elena',
  },
  semenSimple: {
    path: './img/portfolio/semenSimple',
  },
  simpleLovestory: {
    path: './img/portfolio/simpleLovestory',
  },
  sweetWinter: {
    path: './img/portfolio/sweetWinter',
  },
  bloom: {
    path: './img/portfolio/bloom',
  },
  basketball: {
    path: './img/portfolio/basketball',
  },
  barbie: {
    path: './img/portfolio/alisa-barbie',
  },
  amelie: {
    path: './img/portfolio/amelie',
  },
  beautyred: {
    path: './img/portfolio/beauty-red',
  },
  darkromance: {
    path: './img/portfolio/dark-romance',
  },
  lookbookvosq: {
    path: './img/portfolio/look-book-vosq',
  },
  bath: {
    path: './img/portfolio/bath',
  },
  buildingfashion: {
    path: './img/portfolio/building-fashion',
  },
  cityrootLookbook: {
    path: './img/portfolio/city-root-lookbook',
  },
  cityrootsCampaign: {
    path: './img/portfolio/cityroots-campaign',
  },
  couple: {
    path: './img/portfolio/couple',
  },
  fiancee: {
    path: './img/portfolio/fiancee',
  },
  flowers: {
    path: './img/portfolio/flowers',
  },
  flower: {
    path: './img/portfolio/flowers-2',
  },
  lights: {
    path: './img/portfolio/lights-2',
  },
  mfkPomorie: {
    path: './img/portfolio/mfk-pomorie',
  },
  natureWedding: {
    path: './img/portfolio/nature-wedding',
  },
  party: {
    path: './img/portfolio/party',
  },
  PKfood: {
    path: './img/portfolio/pk-food',
  },
  portraitKolya: {
    path: './img/portfolio/portrait-kolya',
  },
  quarry: {
    path: './img/portfolio/quarry',
  },
  schoolgirl: {
    path: './img/portfolio/schoolgirl',
  },
  simpleBarbie: {
    path: './img/portfolio/simple-barbie',
  },
  simpleKolya: {
    path: './img/portfolio/simple-kolya',
  },
  streetAnya: {
    path: './img/portfolio/street-anya',
  },
  streetKGD: {
    path: './img/portfolio/street-kgd',
  },
  streetMatvey: {
    path: './img/portfolio/street-matvey',
  },
  studentCouncil: {
    path: './img/portfolio/student-council',
  },
  tarantino: {
    path: './img/portfolio/tarantino',
  },
  toIron: {
    path: './img/portfolio/to-iron',
  },
  weShouldAllBeFemenists: {
    path: './img/portfolio/we-should-all-be-femenists',
  },
  elenaContent: {
    path: './img/portfolio/elena-content',
  },
}

document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')

  if (!id) return

  const { path } = PORTFOLIO_CONFIG[id]

  fetchImages(path).then((images) => {
    const galleryWrapper = document.getElementById('gallery_wrapper')

    images.forEach((image) => {
      galleryWrapper.innerHTML += image
    })
  })
})

async function fetchImages(path) {
  const response = await fetch(path)
  const html = await response.text()

  const parser = new DOMParser()

  const doc = parser.parseFromString(html, 'text/html')
  const links = doc.querySelectorAll('a[href$=".webp"]')
  const images = Array.from(links).map((link) => {
    const href = link.getAttribute('href')
    const a = document.createElement('a')
    a.setAttribute('data-fancybox', 'gallery')
    a.setAttribute('href', href)
    a.innerHTML = `<img src="${href}" class="gallery__img">`
    return a.outerHTML
  })
  return images
}
