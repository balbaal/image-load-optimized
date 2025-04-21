document.addEventListener('DOMContentLoaded', () => {
  const callback = (entries) => {
    console;
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);

        const imageReal = entry.target.dataset.src;
        entry.target.src = imageReal;
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
