const next = document.querySelector('.nxt');
const previous = document.querySelector('.prev');
const images = document.getElementsByClassName('images');

let currentImgIndex = 0;
let previousImgIndex = 0;

next.addEventListener('click', () => {
    previousImgIndex = currentImgIndex;
    currentImgIndex++;
    if (currentImgIndex >= images.length) {
        currentImgIndex = 0;
    }
    images[previousImgIndex].style.display = 'none';
    images[currentImgIndex].style.display = 'block';
    images[currentImgIndex].style.animation = 'fadeIn 1s ease-in-out';
});

previous.addEventListener('click', () => {
    previousImgIndex = currentImgIndex;
    currentImgIndex--;
    if (currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
    }
    images[previousImgIndex].style.display = 'none';
    images[currentImgIndex].style.display = 'block';
    images[currentImgIndex].style.animation = 'fadeIn 1s ease-in-out';
});
