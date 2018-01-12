const SLIDER_SELECTOR = '.slider';
const NAV_ITEM_SELECTOR = '.slider__nav-item';
const SLIDE_SELECTOR = '.slide';
const NAV_ITEM_CLASS_ACTIVE = 'slider__nav-item_active';
const SLIDE_CLASS_ACTIVE = 'slide_active';

class Slider {
    constructor(rootElement) {
        this.DOM = {};
        this.DOM.rootElement = rootElement;
        this.DOM.navItems = [].slice.call(rootElement.querySelectorAll(NAV_ITEM_SELECTOR));
        this.DOM.slides = [].slice.call(rootElement.querySelectorAll(SLIDE_SELECTOR));
        rootElement.style.minHeight = `
            ${
                Math.max(...this.DOM.slides.map(s => s.scrollHeight))
            }px
        `;
    }

    handleEvent(e) {
        if (e.type === 'click' && e.target.hasAttribute('data-slide')) {
            let index = parseInt(e.target.getAttribute('data-slide'));
            this.goToSlide(index);
        }
    }

    goToSlide(slideIndex) {
        this.DOM.slides.forEach((slide, index) => {
            let action = index === slideIndex ? 'add' : 'remove';
            slide.classList[action](SLIDE_CLASS_ACTIVE);
            this.DOM.navItems[index].classList[action](NAV_ITEM_CLASS_ACTIVE);
        })
    }
}

Slider.NAV_ITEM_SELECTOR     = NAV_ITEM_SELECTOR;
Slider.SLIDER_SELECTOR       = SLIDER_SELECTOR;
Slider.SLIDE_SELECTOR        = SLIDE_SELECTOR;
Slider.NAV_ITEM_CLASS_ACTIVE = NAV_ITEM_CLASS_ACTIVE;
Slider.SLIDE_CLASS_ACTIVE    = SLIDE_CLASS_ACTIVE;

export default Slider;
