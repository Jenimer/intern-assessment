let slideImages = document.querySelectorAll('.slideContent'),
  right = document.querySelector('#left'),
  left = document.querySelector('#right'),
  current = 0;

const reset = () => {
  for (let i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = 'none';
  }
}

const startSlide = () => {
  reset();
  slideImages[0].style.display = 'flex';
};

const slideLeft = () => {
  reset();
  slideImages[current - 1].style.display = 'flex';
  current--;
}
const slideRight = () => {
  reset();
  slideImages[current + 1].style.display = 'flex';
  current++;
}

left.addEventListener('click', function () {
  if (current === 0) {
    current = slideImages.length;
  }
  slideLeft();
});

right.addEventListener('click', function () {
  if (current === slideImages.length -1) {
    current = -1;
  }
  slideRight();
});
startSlide();
