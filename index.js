function toggleVideo() {
    const video = document.getElementById('video');
    const playArrow = document.querySelector('.play-arrow');
    const pauseArrow = document.querySelector('.pause-arrow');
    
    if (video.paused) {
        video.play();
        playArrow.style.display = 'none';
        pauseArrow.style.display = 'block';
    } else {
        video.pause();
        playArrow.style.display = 'block';
        pauseArrow.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.hero-search-input');
  const searchBtn = document.querySelector('.hero-search-btn');

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', function() {
      searchInput.value = '';
    });
  }
});

let currentSlide = 0;
const itemWidth = 295; 
const totalItems = 12;
const visibleItems = 3;

function slideLeft() {
    const track = document.getElementById('sliderTrack');
    if (currentSlide > 0) {
        currentSlide--;
        track.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
    }
}

function slideRight() {
    const track = document.getElementById('sliderTrack');
    const maxSlides = totalItems - visibleItems;
    if (currentSlide < maxSlides) {
        currentSlide++;
        track.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
    }
}

function openModal() {
    document.getElementById('requestModal').style.display = 'flex';
    document.body.classList.add('modal-open');
}

function closeModal() {
    document.getElementById('requestModal').style.display = 'none';
    document.body.classList.remove('modal-open');
}