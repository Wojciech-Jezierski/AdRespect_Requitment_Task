//Burger Menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
const body = document.querySelector('body');
const offerBtn = document.querySelector('.nav-offer');
const dropDownList = document.querySelector('.drop-down-list');

mobileMenuButton.addEventListener('click', () => {
  mobileMenuOverlay.classList.remove('hidden');
  body.classList.add('overflow-hidden');
});

mobileMenuCloseButton.addEventListener('click', () => {
  mobileMenuOverlay.classList.add('hidden');
  mobileMenuOverlay.classList.add('disable-scroll');
  body.classList.remove('overflow-hidden');
});

offerBtn.addEventListener('click', () => {
  dropDownList.classList.toggle('hidden');
})


//Search input
const searchButton = document.getElementById('searchButton');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', () => {
  searchContainer.classList.toggle('hidden');
  if (!searchContainer.classList.contains('hidden')) {
    searchInput.focus();
  }
});


//Slider
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

//Masonry gallery
function initializeMasonry() {
  var grid = document.querySelector('.grid');
  var masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
  });
}

// Call the initializeMasonry function when the DOM is ready
document.addEventListener('DOMContentLoaded', initializeMasonry);

//Expand button in Masonry gallery
document.addEventListener('DOMContentLoaded', function() {
  const expandButton = document.querySelector('.expand-button');
  const hiddenGridItems = document.querySelectorAll('.grid-item.hidden');
  var grid = document.querySelector('.grid');

  expandButton.addEventListener('click', function() {
    hiddenGridItems.forEach(gridItem => {
      grid.classList.remove('vanishing-section')
      gridItem.classList.remove('hidden');
      initializeMasonry();
    });
    
    // Hide the "Rozwiń" button after expanding
    expandButton.style.display = 'none';
  });
});

//Lightbox gallery
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})


window.onload = initializeMasonry;