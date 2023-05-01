  // Get all the links with an href starting with '#'
const links = document.querySelectorAll('a[href^="#"]');

// Loop over each link
links.forEach(link => {
  // Listen for a click event
  link.addEventListener('click', e => {
    // Prevent default anchor behavior
    e.preventDefault();

    // Get the href attribute of the anchor element
    const href = link.getAttribute('href');

    // Use the smooth scroll function to scroll smoothly to the target element
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  })
});