require('@parametric-svg/element');

const display = document.body;

const viewBox = (slideNumber) => (
  `0 ${slideNumber * 1500} 1920 1080`
);

fetch('slides.svg').then(
  response => response.text()
).then((slides) => {
  // VIEW

  const parametricSvg = document.createElement('parametric-svg');
  parametricSvg.innerHTML = slides;
  display.appendChild(parametricSvg);
  const svg = display.querySelector('svg');

  const refreshView = {
    set(target, key, value) {
      if (key === 'currentSlide')
        svg.setAttribute('viewBox', viewBox(value));

      target[key] = value; // eslint-disable-line no-param-reassign
      return true;
    },
  };


  // MODEL

  const state = new Proxy({}, refreshView);
  state.currentSlide =
    0;


  // UPDATE

  const incrementSlide = () => {
    state.currentSlide += 1;
  };

  const decrementSlide = () => {
    state.currentSlide = Math.max(
      state.currentSlide - 1,
      0
    );
  };

  // Click
  display.addEventListener('click', (event) => {
    if (event.which !== 1) return;
    incrementSlide();
    event.preventDefault();
  });

  // Right click
  display.addEventListener('contextmenu', (event) => {
    decrementSlide();
    event.preventDefault();
  });

  // Scroll wheel
  display.addEventListener('mousewheel', (event) => {
    if (event.wheelDelta < 0) {
      incrementSlide();
    } else {
      decrementSlide();
    }
    event.preventDefault();
  });
});
