# Illustrator Layer Animation

**[ExtendScript](http://en.wikipedia.org/wiki/ExtendScript) (`.jsx`) used to animate Adobe Illustrator’s layers in order to preview sequenced layer frames for animation.**

![demo](https://cloud.githubusercontent.com/assets/218624/8022394/7e6d59d0-0c83-11e5-8a33-4164adbce8cd.gif)

Here’s a close-up of the script’s dialog window:

![dialog](https://cloud.githubusercontent.com/assets/218624/8022395/7e87a7d6-0c83-11e5-9c5c-d3c8a110a1fa.png)

## Installation

Put [ Layer Animation ⭐⭐⭐⭐⭐.jsx]( Layer Animation ⭐⭐⭐⭐⭐.jsx) in `/Applications/Adobe\ Illustrator\ CC\ 2014/Presets.localized/en_US/Scripts` and run it directly in Illustrator via the <kbd>File</kbd> `>` <kbd>Scripts</kbd> menu.

## Development

There’s a couple of ways to develop/test this script:

1. See [installation instructions](#installation) above (not recommended).
2. Use Adobe’s free [ExtendScript Toolkit](https://creative.adobe.com/products/estk) (ESTK) app (see animated gif below).

![estk](https://cloud.githubusercontent.com/assets/218624/8019050/88fcb506-0bef-11e5-9287-57c5120f3939.gif)

### Limitations of ESTK

1. Using a dialog window, from what I have discovered, there’s no way to let the user cancel a loop ([tried this](http://armand.eu/blog/setinterval-for-adobe-extendscript/), didn’t work).
1. Related to the above, the built-in method `$.sleep()` blocks all other scripts from executing; that means spinning beach ball hell.
1. Once a palette displays it will [break its connection with the `Application`](https://forums.adobe.com/message/3631074#3631074); this limits the kind of interactivity a palette UI offers.

## Links

* [Beginning ScriptUI](http://www.kahrel.plus.com/indesign/scriptui-2-5.pdf) _(2MB PDF)_
* [ScriptUI Events: `call()`, `dispatchEvent()`, `notify()`](http://www.davidebarranca.com/2013/08/extendscript-scriptui-events-call-notify-dispatchevent/)
* [fabiantheblind/extendscript](https://github.com/fabiantheblind/extendscript)
* [jtnimoy/scripting-for-illustrator-tutorial](https://github.com/jtnimoy/scripting-for-illustrator-tutorial)
* [Adobe® Creative Suite® 5: Javascript Tools Guide](http://wwwimages.adobe.com/content/dam/Adobe/en/products/indesign/pdfs/JavaScriptToolsGuide_CS5.pdf) _(4.6MB PDF)_
* [ExtendScript libraries](https://forums.adobe.com/thread/1111415)
* [ScriptUI Window in Photoshop – Palette vs. Dialog](http://www.davidebarranca.com/2012/10/scriptui-window-in-photoshop-palette-vs-dialog/)
* [Archives For ExtendScript / JavaScript](http://www.davidebarranca.com/category/code/extendscript-javascript/)
