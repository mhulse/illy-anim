# Illustrator Layer Animation

**[ExtendScript](http://en.wikipedia.org/wiki/ExtendScript) (`.jsx`) used to animate Adobe Illustrator’s layers in order to preview sequenced layer frames for animation.**

![demo](https://cloud.githubusercontent.com/assets/218624/8022394/7e6d59d0-0c83-11e5-8a33-4164adbce8cd.gif)

Here’s a close-up of the script’s dialog window:

![dialog](https://cloud.githubusercontent.com/assets/218624/8022395/7e87a7d6-0c83-11e5-9c5c-d3c8a110a1fa.png)

## Features

1. Animates layers based on user-defined frame rate.
1. Skips non-printable (template) layers.
1. Ascending or descending layer animation.
1. Automatic direction reversal (ping pong).
1. Restores layer visibility when done.

## Installation

Put <a href=" Layer Animation ⭐⭐⭐⭐⭐.jsx"> Layer Animation ⭐⭐⭐⭐⭐.jsx</a> in `/Applications/Adobe\ Illustrator\ CC\ 2014/Presets.localized/en_US/Scripts` and run it directly in Illustrator via the <kbd>File</kbd> `>` <kbd>Scripts</kbd> menu.

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
* [Adobe Illustrator CC 2014 Scripting Guide](http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/illustrator/sdk/CC2014/Illustrator%20Scripting%20Guide.pdf)
* [Adobe® Creative Suite® 5: Javascript Tools Guide](http://wwwimages.adobe.com/content/dam/Adobe/en/products/indesign/pdfs/JavaScriptToolsGuide_CS5.pdf) _(4.6MB PDF)_
* [ExtendScript libraries](https://forums.adobe.com/thread/1111415)
* [ScriptUI Window in Photoshop – Palette vs. Dialog](http://www.davidebarranca.com/2012/10/scriptui-window-in-photoshop-palette-vs-dialog/)
* [Archives For ExtendScript / JavaScript](http://www.davidebarranca.com/category/code/extendscript-javascript/)

---

#### LEGAL

Copyright © 2015 [Micky Hulse](http://mky.io).

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<img src="https://github.global.ssl.fastly.net/images/icons/emoji/octocat.png">
