// Optional JavaScript for improving tab accessibility or additional interactions.
const tabTriggerList = document.querySelectorAll('#schedule .nav-link');
if (tabTriggerList) {
  tabTriggerList.forEach(tabEl => {
    tabEl.addEventListener('shown.bs.tab', event => {
      event.target.classList.add('active');
    });
  });
}

const heroHeading = document.getElementById('heroHeading');
const heroDescription = document.getElementById('heroDescription');
const heroImage = document.querySelector('.hero-visual-img');
const sliderDots = document.querySelectorAll('.hero-slider-nav .slider-dot');
const sliderIndex = document.querySelector('.hero-slider-nav .slider-index');

const heroSlides = [
  {
    title: 'The Largest Event In The World',
    description: 'There are many variations of passages of orem psum available but the majority have suffered alteration in some form by injected humour.',
    image: 'assets/images/hero-illustration.svg'
  },
  {
    title: 'Meet Global Speakers & Innovators',
    description: 'Experience inspiring talks, workshops, and networking in a bold modern event environment.',
    image: 'assets/images/hero-illustration.svg'
  },
  {
    title: 'Discover New Ideas Every Day',
    description: 'Join us for a powerful agenda designed to help you grow, connect, and learn from industry leaders.',
    image: 'assets/images/hero-illustration.svg'
  }
];

let activeSlide = 0;

function updateHeroSlide(index) {
  if (index < 0 || index >= heroSlides.length) return;
  activeSlide = index;
  sliderDots.forEach((dot, dotIndex) => {
    dot.classList.toggle('selected', dotIndex === index);
  });
  sliderIndex.textContent = String(index + 1).padStart(2, '0');

  heroHeading.classList.add('fade');
  heroDescription.classList.add('fade');
  heroImage.classList.add('fade');

  setTimeout(() => {
    heroHeading.innerHTML = heroSlides[index].title;
    heroDescription.textContent = heroSlides[index].description;
    heroImage.src = heroSlides[index].image;

    heroHeading.classList.remove('fade');
    heroDescription.classList.remove('fade');
    heroImage.classList.remove('fade');
  }, 180);
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    updateHeroSlide(index);
  });
});

updateHeroSlide(activeSlide);
