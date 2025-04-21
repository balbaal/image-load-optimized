document.addEventListener('DOMContentLoaded', () => {
  const callback = (entries) => {
    console.log(entries, '>>> entries');
  };

  const options = {
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(callback, options);

  const images = document.querySelectorAll('#content-wrapper > img');

  images.forEach((image) => {
    observer.observe(image);
  });
});
