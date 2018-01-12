
const TRIGGER_SELECTOR = '.service-nav__link';
const SERVICE_SELECTOR = '.services-section__service';
const TRIGGER_ACTIVE_CLASS = 'service-nav__link_active';
const SERVICE_ACTIVE_CLASS = 'services-section__service_active';

let triggers, services;

function onClick(e) {
    let { target } = e;
    let id = target.value;

    triggers.forEach(trigger => {
        let action = trigger === target ? 'add' : 'remove';
        trigger.classList[action](TRIGGER_ACTIVE_CLASS);
    });

    services.forEach(service => {
        let action = service.id === id ? 'add' : 'remove';
        service.classList[action](SERVICE_ACTIVE_CLASS);
    });
}

export function initServices() {
    triggers = [].slice.call(document.querySelectorAll(TRIGGER_SELECTOR));
    services = [].slice.call(document.querySelectorAll(SERVICE_SELECTOR));

    if (!triggers && !services) return;

    triggers.forEach(trigger => trigger.addEventListener('click', onClick))
}
