// Access settings from Local Storage
const storedTitle = localStorage.getItem('pageTitle');
const storedFaviconUrl = localStorage.getItem('faviconUrl');

function updateFavicon() {
  if (storedFaviconUrl) {
    const existingFavicons = document.head.querySelectorAll('link[rel="icon"]');
    existingFavicons.forEach(link => link.remove());
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = storedFaviconUrl;
    document.head.appendChild(link);
  }
}

function updatePageTitle() {
  if (storedTitle) {
    document.title = storedTitle;
  }
}

// Update on page load
updateFavicon();
updatePageTitle();

const settingsForm = document.getElementById('settingsForm');
settingsForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const newFaviconUrl = document.getElementById('newFaviconUrl').value;
  const newPageTitle = document.getElementById('newPageTitle').value;

  localStorage.setItem('pageTitle', newPageTitle);
  localStorage.setItem('faviconUrl', newFaviconUrl);

  updateFavicon();
  updatePageTitle();
});
