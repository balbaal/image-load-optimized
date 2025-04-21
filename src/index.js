document.addEventListener('DOMContentLoaded', () => {
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const imageReal = img.dataset.src;

        img.src = imageReal;
      }
    });
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
