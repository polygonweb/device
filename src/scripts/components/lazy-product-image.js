
function LazyProductImage(elem) {
        let url = elem.getAttribute('data-url');
        if (!url) {
            return console.warn("data-url attribute not set");
        }

        let image = elem.querySelector('.product-card__image image');

        // html img нужен для срабатывания load-evet для Safari и IE
        let img = new Image();

        img.onload = function() {
            elem.classList.add('product-card_load');
            image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', url);
            img.onload = img.onerror = null;
            img.remove();
        };

        img.onerror = function(e) {
            elem.classList.add('product-card_error');
            console.error(e);
            instance.onload = instance.onerror = null;
            img.remove();
        };

        img.src = url;
};

export default LazyProductImage;
