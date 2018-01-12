const FORM_CLASS = 'search-form';
const FORM_CLASS_FOCUS = 'search-form_focus';
const LOAD_EVENT = 'DOMContentLoaded';

document.addEventListener(LOAD_EVENT, () => {
    let form = document.querySelector(`.${FORM_CLASS}`);

    if (!form) return;

    form.addEventListener('focus', () => {
        form.classList.add(FORM_CLASS_FOCUS);
    }, true);

    form.addEventListener('blur', () => {
        form.classList.remove(FORM_CLASS_FOCUS);
    }, true);
});
