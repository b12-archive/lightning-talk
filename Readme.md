<a                                                                   id="/"></a>

**Fair warning:** I wrote this thing 20 minutes before a talk. It’s quite unpolished.



&nbsp;

⚡ lightning-talk
================

**Show an SVG drawing as slides**



Getting started
---------------

0. Make sure your default browser is a modern one (fetch API, arrow functions). Chromium v46 has it all.

1. Clone the project and `cd` into it.

2. Put a `slides.svg` in the project’s root folder. Make sure that:
  * Every slide is a *1920 × 1080 px* rectangle.
  * The first one starts at *0, 0*.
  * Every next slide is *1500 px* below the previous one.

3. `npm install && npm start` to start a HTTP server with LiveReload and fancy stuff. (By the way, any other static HTTP server will do.)



During your talk
----------------

Left-click to view the next slide. Right-click to view the previous slide.

Better navigation will probably come. Open a PR if you want it fast.
