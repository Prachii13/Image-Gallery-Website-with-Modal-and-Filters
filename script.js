function filterImages(category) {
  const images = document.querySelectorAll('.image');
  images.forEach(img => {
    img.style.display = (category === 'all' || img.classList.contains(category)) ? 'inline-block' : 'none';
  });
}

function openModal(img) {
  document.getElementById('modal').style.display = "flex";
  document.getElementById('modal-img').src = img.src;
}
function closeModal() {
  document.getElementById('modal').style.display = "none";
}
