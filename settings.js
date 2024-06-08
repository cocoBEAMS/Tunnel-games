function updateFavicon() {
  const storedFaviconUrl = localStorage.getItem('faviconUrl') || sessionStorage.getItem('faviconUrl');
  if (storedFaviconUrl) {
    const existingFavicons = document.head.querySelectorAll('link[rel="icon"]');
    existingFavicons.forEach(link => link.remove());
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = storedFaviconUrl;
    document.head.appendChild(link);
    sessionStorage.setItem('faviconUrl', storedFaviconUrl); // Update session storage on change
  }
}

function updatePageTitle() {
  const storedTitle = localStorage.getItem('pageTitle');
  if (storedTitle) {
    document.title = storedTitle;
  }
}

// Call update functions on page load
updateFavicon();
updatePageTitle();

// Settings form functionality can be implemented here (if needed on the settings page)
