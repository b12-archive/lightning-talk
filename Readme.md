[![David – status of dependencies
](https://img.shields.io/david/tomekwi/elm-live.svg?style=flat-square
)](https://david-dm.org/tomekwi/elm-live
) [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square
)](https://github.com/airbnb/javascript
)




<a id="/"></a>&nbsp;

# lightning-talk

**Display an SVG drawing as slides.  
Deploy them easily as a static site.**




<a id="/installation"></a>&nbsp;

## INSTALLATION

```sh
npm install [--global] lightning-talk
```




<a id="/synopsis"></a>&nbsp;

## SYNOPSIS

```sh
lightning-talk [--port=PORT] [--open | --open=APP]  
lightning-talk --no-serve  
lightning-talk --help
```




<a id="/description"></a>&nbsp;

## DESCRIPTION

First, we’ll create an `index.html` file in your current directory. We do this so that you can deploy your presentation easily.

Second, we’ll spawn a static HTTP server at `PORT` (8080 by default). You can opt out of the server by passing `--no-serve`.

Open the site in a modern browser (`google-chrome --app` often does a good job) and talk!

Pass `--open` if you want us to open the presentation in your default browser as soon as it’s up and running. You can specify another browser like `--open='google-chrome --app'`.




<a id="/preparing-your-talk"></a>&nbsp;

## PREPARING YOUR TALK

0. Put a `slides.svg` in the project’s root folder. Make sure that:
  * Every slide is a *1920 × 1080 px* rectangle.
  * The first one starts at *0, 0*.
  * Every next slide is *1500 px* below the previous one.

0. We use [*parametric-svg*](https://git.io/parametric-svg) to allow animations and interactive stuff. During your talk you can increase the parameter `layer` with the flick of a button. It starts at `0` and gets reset to `0` whenever you change a slide. Feel free to use it how you want.




<a id="/during-your-talk"></a>&nbsp;

## DURING YOUR TALK

0. Make sure you use a modern browser (`fetch` API, arrow functions, `Proxy`). Chrome v49+ and Firefox v40+ have it all.

0. <kbd>SCROLL DOWN</kbd> or <kbd>→</kbd> to view the next slide. <kbd>SCROLL UP</kbd> or <kbd>←</kbd> to view the previous slide.

0. <kbd>LEFT CLICK</kbd> or <kbd>↓</kbd> to increase the layer. <kbd>RIGHT CLICK</kbd> or <kbd>↑</kbd> to decrease the layer.




<a id="/license"></a>&nbsp;

# LICENSE

[MIT](https://git.io/lightning-talk.License) © [Tomek Wiszniewski](https://github.com/tomekwi) and [Studio B12](https://github.com/studio-b12)
