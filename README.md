# Pendulum

A tiny [p5.js](https://p5js.org/) sketch that draws a pendulum on an HTML canvas.
One of my early creative-coding experiments, revived so it runs and can be shown again.

## Live demo

https://Arsham1024.github.io/Pendulum/

## Run it locally

It's a static page, so just serve the folder and open it in a browser:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly by double-clicking works too — the only external
dependency (p5.js) is loaded from a CDN over HTTPS.

## Files

- `index.html` — page shell; loads p5.js from a CDN and then `index.js`.
- `index.js` — the sketch: sets up a 540x360 canvas and draws the pendulum
  (a line from the pivot to a ball) at a fixed angle.

## Tech

- p5.js 1.1.9 (via cdnjs)
- Plain HTML + JavaScript, no build step
