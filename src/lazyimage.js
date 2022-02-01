/**
 * Image Lazyloading
 *
 * @author Jacob Fitzpatrick <contact@jacobfitzp.co.uk>
 */

require('@jacobfitzp/viewport-helper')

const LazyImage = {

    /**
     * Initialise image lazyloading
     */
    init: function () {
        document.querySelectorAll('.lazyload').forEach(function (image) {

            image.classList.remove('lazyload');
            image.classList.add('lazyloading');

            ViewportHelper.onElementInViewport(image, function () {
                LazyImage.loadImage(image);
            });
        });
    },

    /**
     * Load in a given image
     *
     * @param {HTMLImageElement} image
     */
    loadImage: function (image) {

        image.src = (image.dataset.src || image.dataset.srcset);

        image.classList.remove('lazyloading');
        image.classList.add('lazyloaded');
    }
};

/* Initialise image lazyloading on document loaded */
document.addEventListener('DOMContentLoaded', function () {
    LazyImage.init();
});

window.LazyImage = LazyImage;