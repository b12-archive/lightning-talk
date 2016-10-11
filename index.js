require('document-register-element');
require('@parametric-svg/element');

const mousetrap = require('mousetrap');

const display = document.body;

const viewBox = (slideNumber) => (
  `0 ${slideNumber * 2000} 1920 1080`
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
      if (key === 'slide' && target.slide !== value)
        svg.setAttribute('viewBox', viewBox(value));

      if (key === 'layer' && target.layer !== value)
        parametricSvg.setAttribute('layer', value);

      target[key] = value; // eslint-disable-line no-param-reassign
      return true;
    },
  };


  // MODEL

  const state = new Proxy({}, refreshView);
  setTimeout(() => {
    state.slide =
      0;
    state.layer =
      0;
  });


  // UPDATE

  const increment = (what) => {
    state[what] += 1;
  };

  const decrement = (what) => {
    state[what] = Math.max(
      state[what] - 1,
      0
    );
  };

  // Change slide
  const changeSlide = (mutation) => (event) => {
    mutation('slide');
    state.layer = 0;
    event.preventDefault();
  };
  const nextSlide = changeSlide(increment);
  const previousSlide = changeSlide(decrement);

  display.addEventListener('wheel', (event) => {
    (event.deltaY > 0 ?
      nextSlide :
      previousSlide
    )();
  });
  mousetrap.bind(['right', 'space', 'pagedown'], nextSlide);
  mousetrap.bind(['left', 'shift+space', 'pageup'], previousSlide);

  // Change layer
  const nextLayer = (event) => {
    if (event.type === 'click' && event.which !== 1) return;
    event.preventDefault();
    increment('layer');
  };
  display.addEventListener('click', nextLayer);
  mousetrap.bind('down', nextLayer);

  const previousLayer = (event) => {
    event.preventDefault();
    decrement('layer');
  };
  display.addEventListener('contextmenu', previousLayer);
  mousetrap.bind('up', previousLayer);

  // Full screen
  mousetrap.bind('f', () => {
    if (display.requestFullscreen) display.requestFullscreen();
    else if (display.mozRequestFullScreen) display.mozRequestFullScreen();
  });
});
