<h1>LazyImage</h1>

<img src=https://img.shields.io/npm/v/@jacobfitzp/lazyimages> <img src=https://img.shields.io/badge/dependancies-1-green>

LazyImage.js enables easy and effective lazyloading of images.

Powered by `@jacobfitzp/viewport-helper` it ensures images are only loaded when inside the viewport, cutting down loadtimes and resource sizes.

<img src="https://i.ibb.co/S58rsmw/Group-1.png">

## Installation

### NPM

```
npm install @jacobfitzp/lazyimages
```

Once installed, you can require the package using:

```javascript
require('@jacobfitzp/lazyimages');
```

### CDN

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@jacobfitzp/lazyimages@v1.0.0/dist/lazyimages.min.js"></script>
```

## Usage

To use simply add the `lazyload` class to the element you wish to lazyload, and unset the **src**, making sure to instead set **data-src** or **data-srcset**

```html

<!-- Example Image Element -->
<img class="lazyload" data-src="/image.jpg" alt="Lazyloaded Image" />

<!-- Example "other" element, will apply background image -->
<div class="lazyload" data-src="/image.jpg"></div>

```

Once loaded the **lazyload** class is removed and replaced with a **lazyloaded** class, you can use this to apply custom transitions such as fading in images.

### Initialisation

LazyImage only applies lazyloading automatically to elements that are present on DOMContentLoaded, this means if additional elements are added after load you will need to reinitialise lazyloading yourself, this can easily be done by doing:

```javascript
LazyImage.init();
```

