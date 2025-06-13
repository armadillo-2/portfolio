const image = document.getElementById('rotate_image');
let angle = 0;

image.addEventListener('click', () => {
    angle += 45;
    image.style.transform = `rotate(${angle}deg)`;
});