// Define your routes
const routes = {
  '/': '<h1>Home</h1>',
  '/about': '<h1>About</h1>',
  '/contact': '<h1>Contact</h1>',
  '/404': '<h1>404 - Not Found</h1>'
};

// Get the div container for the content
const appContainer = document.getElementById('app');

// Render the content based on the current route
function render(route) {
  appContainer.innerHTML = routes[route] || routes['/404'];
}

// Update the browser history and render the new content
function navigate(path) {
  history.pushState(null, null, path);
  render(path);
}

// Set up the initial route and content
render(window.location.pathname);

// Add a popstate event listener to handle the back button
window.addEventListener('popstate', () => {
  render(window.location.pathname);
});

// Add event listeners for your navigation links (if any)
// For example, you can use an anchor tag with a custom data attribute:
// <a href="#" data-path="/about">About</a>

document.querySelectorAll('[data-path]').forEach(link => {
  link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link.getAttribute('data-path'));
  });
});
