// script.js

function enlargeImage(imageSrc) {
    var modal = document.getElementById('enlarged-modal');
    var modalImg = document.getElementById('enlarged-image');

    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById('enlarged-modal');
    modal.style.display = 'none';
}
