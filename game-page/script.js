const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
  container.addEventListener('mouseenter', () => {
    container.querySelector('.image-title').style.opacity = 1;
  });
});
