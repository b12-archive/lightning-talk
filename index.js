const display = document.body;

const viewBox = (slideNumber) => (
  `0 ${slideNumber * 1500} 1920 1080`
);

fetch('slides.svg').then(
  response => response.text()
).then((slides) => {
  display.innerHTML = slides;

  const svg = display.querySelector('svg');
  const setSlide = (number) => svg.setAttribute('viewBox', viewBox(number));
  setSlide(0);

  var currentSlide = 0;
  const decrementSlide = () => setSlide(currentSlide <= 0 ?
    currentSlide :
    --currentSlide
  );
  const incrementSlide = () => setSlide(++currentSlide);

  // Set listeners.
  //    - click
  display.addEventListener('click', (event) => {
    if (event.which !== 1) return;
    incrementSlide();
    event.preventDefault();
  });

  //    - right click
  display.addEventListener('contextmenu', (event) => {
    decrementSlide();
    event.preventDefault();
  });

  //    - scrollwheels
  display.addEventListener('mousewheel', (event) => {
    if (event.wheelDelta < 0) {
      incrementSlide();
    } else {
      decrementSlide();
    }
    event.preventDefault();
  });

  // Export stuff.
  window.setSlide = setSlide;
});
