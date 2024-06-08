const faviconInput = document.getElementById('favicon'); // This won't work here
const pageTitleInput = document.getElementById('pageTitle'); // This won't work here
const settingsForm = document.getElementById('settingsForm'); // This won't work here

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

// Call update functions on page load
updateFavicon();
updatePageTitle();

// Settings form functionality can be implemented here (if needed on the settings page)
