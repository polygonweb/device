import 'dom4/build/dom4.js';
import 'svgxuse/svgxuse.js';
import 'intersection-observer';

import hello from './lib/hello';
hello();

import './components/search-form';
import lazyGallery from './components/lazy-gallery';
import LazyProductImage from './components/lazy-product-image';

import Slider from './components/slider';
import { initServices } from './components/services';

import modal from './components/modal';
import GoogleMap from './components/map';

function initLazyGallery() {
    if (typeof lazyGallery !== 'function') return;
    lazyGallery(
        document.querySelectorAll('.product-card'),
        LazyProductImage,
        {
            threshold: [ 0.75]
        }
    )
}

initLazyGallery();

// if (!('IntersectionObserver' in window)) {
//     import('intersection-observer')
//         .then(() => {
//             console.log('IntersectionObserver Polyfill Loaded');
//             initLazyGallery();
//         })
//         .catch(console.error)
// } else {
//     initLazyGallery();
// }

(function() {
    let sliderElement = document.querySelector(Slider.SLIDER_SELECTOR);
    let navItemsElems = [].slice.call(document.querySelectorAll(Slider.NAV_ITEM_SELECTOR));

    if (!sliderElement && !navItemsElems) return;
    let slider = new Slider(sliderElement);
    navItemsElems.forEach(item => item.addEventListener('click', slider));
})();

typeof initServices === 'function' && initServices();

// init google map
;(function() {
    let mapContainer = document.getElementById('map');
    let mapContent = document.getElementById('contact-map');

    let mapModal = document.getElementById('contact-map-modal');
    let mapTrigger = document.getElementById('map-link');

    let gMap;

    mapTrigger && mapTrigger.addEventListener('click', function(e) {
      modal(mapModal).open();

      if (mapContainer && !gMap) {
        gMap = new GoogleMap({
          rootElement: mapContent,
          mapOptions: function(gmaps) {
              return {
                  center: new gmaps.LatLng(59.938791, 30.323144),
                  zoom: 17,
                  disableDefaultUI: true
              }
          },
          onInit: function(googleMaps, map) {
            let marker = new googleMaps.Marker({
              position: new googleMaps.LatLng(59.938791, 30.323144)
            });
            marker.setMap(map);
            googleMaps.event.addListenerOnce(map, /*'idle'*/ 'tilesloaded', function() {
              mapContainer.classList.add('map_load');
            });
          }
        });
      };

      e.preventDefault();
    });
})();

