const thumbs = document.querySelectorAll('.thumb');
const lightbox = document.getElementById('lightbox');
const largeImg = document.getElementById('largeImg');
const closeBtn = document.querySelector('.close');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

thumbs.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
  });
});

function showImage() {
  lightbox.classList.remove('hidden');
  largeImg.src = thumbs[currentIndex].src;
}

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % thumbs.length;
  showImage();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
  showImage();
});
