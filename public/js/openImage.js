// Get the modal element
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const galleryImages = document.querySelectorAll('.gallery-image');
const closeButton = document.querySelector('.close');

// Open modal on image click
galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = image.src;
    console.log('image open')
  });
});

// Close modal on close button click
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
