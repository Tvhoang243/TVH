var images = document.querySelectorAll('#slideshow img');
var currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].classList.remove('active');
  images[currentImageIndex].classList.add('next');
  
  currentImageIndex = (currentImageIndex + 1) % images.length;
  
  images[currentImageIndex].classList.remove('next');
  images[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 4000);


function addOverlay(event) {
  var caption = event.target;
  var imageContainer = caption.parentNode;
  var image = imageContainer.querySelector('.hover-image');
  image.classList.add('muted');
}

function removeOverlay(event) {
  var caption = event.target;
  var imageContainer = caption.parentNode;
  var image = imageContainer.querySelector('.hover-image');
  image.classList.remove('muted');
}