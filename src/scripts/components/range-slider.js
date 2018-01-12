class RangeSlider {

    static get bodyTemplate() {
        return `
            <div class="range-slider__track">
                <div class="range-slider__fill"></div>

                <div class="range-slider__thumb range-slider__thumb_min" tabindex="0">
                    <div class="range-slider__value">от <span class="range-slider__ouput range-slider__ouput_min"></span></div>
                </div>

                <div class="range-slider__thumb range-slider__thumb_max" tabindex="0">
                    <div class="range-slider__value">до <span class="range-slider__ouput range-slider__ouput_max"></span></div>
                </div>
            </div>
        `;
    }

    constructor(root, options) {
        this.DOM = {
            root,
            minInput: root.querySelector('.range-slider__input_min'),
            maxInput: root.querySelector('.range-slider__input_max'),
            fill: root.querySelector('.range-slider__fill'),
            minThumb: root.querySelector('.range-slider__thumb_min'),
            maxThumb: root.querySelector('.range-slider__thumb_max'),
            minOutput: root.querySelector('.range-slider__output_min'),
            maxOutput: root.querySelector('.range-slider__output_max')
        };

        this.data = {
            min: this.DOM.minInput.min || 0,
            max: this.DOM.maxInput.max || 0,
            step: options && options.step || 1,
            minValue: this.DOM.minInput.value,
            maxValue: this.DOM.maxInput.value
        }
    }

    prepareDOM() {
        this.DOM.minInput.type = 'hidden';
        this.DOM.maxInput.type = 'hidden';
    }

    destroy() {
        this.DOM = null;
        delete this.DOM;
    }
}

export default RangeSlider
