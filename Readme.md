[![David – status of dependencies
](https://img.shields.io/david/studio-b12/lightning-talk.svg?style=flat-square
)](https://david-dm.org/studio-b12/lightning-talk
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
lightning-talk [--port=<port>] [--open | --open=<executable>]  
               [--inject-html=<HTML to inject>]  
lightning-talk --no-serve  
lightning-talk --help
```




<a id="/description"></a>&nbsp;

## DESCRIPTION

First, we’ll create an `index.html` file in your current working directory (that’s where your [`slides.svg`](#/preparing-your-talk) should be). We do this so that you can deploy your slides as a static site easily.

Second, we’ll spawn a static HTTP server at `<port>` (8080 by default). You can opt out of the server by passing `--no-serve`.

Pass `--open` if you want us to open the presentation in your default browser as soon as it’s up and running. Otherwise, just navigate to http://localhost:8080 and talk!




<a id="/preparing-your-talk"></a>&nbsp;

## PREPARING YOUR TALK

0. Put a `slides.svg` in a directory. This directory is where you’ll run `lightning-talk` later.

0. Make sure that:
  * Every slide is [at least](#/responsivity) a *1920 × 1080 px* rectangle.
  * The first one starts at *0, 0*.
  * Every next slide is *2000 px* below the previous one.

0. We use [*parametric-svg*](https://git.io/parametric-svg) to allow animations and interactive stuff. During your talk you can increment the parameter `layer` with the flick of a button. It starts at `0` and gets reset to `0` whenever you change a slide. Feel free to use it how you want.

0. If you need custom HTML to display, say, a video background, this is your go-to option. Pass any HTML (including JS) through this option – we’ll add it right at the beginning of the `<body>`.




<a id="/during-your-talk"></a>&nbsp;

## DURING YOUR TALK

0. Make sure you use a modern browser (`fetch` API, arrow functions, `Proxy`). Chrome v49+ and Firefox v40+ have it all.

0. Press <kbd>F</kbd> to send your talk into fullscreen mode.

0. Hit <kbd>PAGE DOWN</kbd>, <kbd>→</kbd> or scroll down to view the next slide. Hit <kbd>PAGE UP</kbd>, <kbd>←</kbd> or scroll up to view the previous slide.

0. <kbd>LEFT CLICK</kbd> or <kbd>↓</kbd> to increment the layer. <kbd>RIGHT CLICK</kbd> or <kbd>↑</kbd> to decrement the layer.




<a id="/responsivity"></a>&nbsp;

## RESPONSIVITY

All we do is scale and center each slide on the screen. So feel free to use the space between your slides to make them look good on screens of any proportions. Wherever there’s no content, we display a black background.

Just be sure to view your presentation in landscape mode. Slides are guaranteed not to overlap then.




<a id="/license"></a>&nbsp;

# LICENSE

[MIT](https://git.io/lightning-talk.License) © [Tomek Wiszniewski](https://github.com/tomekwi) and [Studio B12](https://github.com/studio-b12)
