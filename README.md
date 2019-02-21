# Introducing Taiko: Driving Your Web Browser Programmatically  
As a web programmer, I've always wanted to drive my web browser programmatically -- open this page, fill in that field, click on that button over there; all driven by JavaScript instead of a pesky human. Past solutions were flaky at best, because they were third-party, aftermarket attempts to add functionality to a browser that didn't support it natively. Modern browsers now offer this level of programmatic instrumentation baked-in. All we have to do is start using it. 

In this talk, Scott Davis (Principal Engineer, ThoughtWorks) introduces you to Taiko -- a free and open source browser automation tool written in JavaScript. You'll learn how to install and open the NodeJS-based Taiko REPL, allowing you to start exploring the simple, expressive API right away. Next, you'll save your REPL session as a JavaScript file that can be run directly from the command line (or your test suite, or your CI/CD pipeline). Finally, you'll see how to intercept requests for testing purposes -- either by blocking them completely, modifying the results as they come in, or swapping out the results with your own mock data.  

Taiko uses the same Chrome DevTools Protocol that you use when you open up the Developer Console in Chrome, run a Lighthouse Audit, or use the Puppeteer API, so you know that it's stable. Taiko ships with its own known-good version of embedded Chromium, eliminating integration and version-mismatch issues. Whether you pair Taiko with Gauge for User Journey Testing or use it alone to drive your web browser programmatically, Taiko is a powerful new tool for the serious web developer's toolkit. 





## Running Locally

This presentation is written in pure, framework-free, browser-native HTML. It can be served from any standard web server. (For example, [Caddy](https://caddyserver.com/).)

A NodeJS-based web server is included to make it easy to run locally. To run the web server:

```console
$ npm start
```

Then visit http://localhost:8000 in a browser.






## Adding a New Language

If you'd like to add a new translation of this presentation, you can easily copy the `en-us` canonical version into a new directory under `/slides` by typing:

```console
$ npm run addlang zh-cn
```

This will create a new directory tree that looks similar to this:

```console
slides/zh-cn/
├── css
├── js
├── slides
│   ├── slide1
|       ├── audio.mp3
|       ├── index.html
|       ├── image.png
│   ├── slide2
│   ├── slide3
```

After that, you can translate the text in `slide1/index.html`. Press `t` while viewing the slideshow to open the Transcripts window and ensure that your translated text is being used.  

If you'd like to add recorded audio, save the audio file as `slide1/audio.mp3` and reference it in `slide1/index.html`. Similarly, you can add any translated images (screenshots, websites, etc.) as `slide1/image.png` and reference them in `slide1/index.html`.

To view the slideshow while you are developing it, type `npm start` and then visit http://localhost:8000/slides/zh-cn/index-src.html. This version of `index.html` dynamically pulls in the slides on-the-fly. Once you are done with the translation and would like to build the final version of the slideshow, type:

```console
$ npm run buildlang zh-cn
```

This merges all of the individual `index.html` slide files referenced in `index-src.html` into the main `slides/zh-cn/index.html` file, maintaining the original links to `slide1/audio.mp3`, `slide1/image.png`, etc. 
