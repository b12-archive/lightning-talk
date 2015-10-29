<a                                                                   id="/"></a>

**Fair warning:** I wrote this thing 20 minutes before a talk. It’s quite unpolished.



&nbsp;

⚡ lightning-talk
================

**Show an SVG drawing as slides**




<a                                                 id="/installation"></a>&nbsp;

Getting started
---------------

0. Make sure your default browser is a modern one (fetch API, arrow functions). Chromium v46 has it all.

1. Clone the project and `cd` into it.

2. Put a `slides.svg` in the project’s root folder. Make sure that:
  * Every slide is a *1920 × 1080 px* rectangle.
  * The first one starts at *0, 0*.
  * Every next slide is *1500 px* below the previous one.

3. `npm install && npm start` to start a HTTP server with LiveReload and fancy stuff. (By the way, any other static HTTP server will do.)




<a                                                        id="/usage"></a>&nbsp;

During your talk
----------------

<kbd>LEFT CLICK</kbd> to view the next slide. <kbd>RIGHT CLICK</kbd> to view the previous slide.

Better navigation will probably come. Open a PR if you want it fast.




<a                                                 id="/known-issues"></a>&nbsp;

Known issues
------------

It looks liks Chromium v46.0.2490.80 has problems interpreting click events from time to time. Google Chrome doesn’t seem to be affected.




<a                                                      id="/license"></a>&nbsp;

License
-------

[MIT][] © [Studio B12 GmbH][]

[MIT]:              ./License.md
[Studio B12 GmbH]:  http://studio-b12.de
