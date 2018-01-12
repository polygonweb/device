
const defaultOptions = {
    root: null,
    rootBounds: null,
    rootMargin: '0px 0px',
    threshold: [ 1 ]
};

const onChange = (callback) => (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio <= 0) return;
        let element = entry.target;
        callback(element);
        observer.unobserve(element);
    });
}

function lazyGallery(elems, callback, options = defaultOptions) {
    if (!elems && !elems.length) return;

    let observer = new IntersectionObserver(onChange(callback), {
        ...defaultOptions,
        ...options
    });

    for(let i = 0, item; item = elems[i]; i++) {
        observer.observe(item);
    }
}

export default lazyGallery;
