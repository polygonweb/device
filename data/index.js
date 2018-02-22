module.exports = {
    projectName: 'Device',

    // данные для слайдера на главной
    promos: [
        {
            title: 'Делай селфи, \n как Бен Стиллер!',
            text: 'Этот обычный, на первый взгляд, квадрокоптер оснащен мощным лазером, замаскированным под стандартную камеру.',
            info: [
                {
                    key: 'Длина палки',
                    value: '8,5 м'
                },
                {
                    key: 'Вес палки',
                    value: '5 кг'
                },
                {
                    key: 'Материал',
                    value: 'Карбон'
                }
            ],
            image: {
                src: 'assets/img/promo/slider-1.png',
                alt: 'Палка для селфи'
            },
            isActive: true
        },

        {
            title: 'Худеем \n правильно!',
            text: 'Мотивирующие фитнесс-браслеты помогут найти в себе силы не пропускать занятия и соблюдать диету.',
            info: [
                {
                    key: 'Без подзарядки',
                    value: '48 часов'
                }
            ],
            image: {
                src: 'assets/img/promo/slider-2.png',
                alt: 'фитнесс-браслет'
            }
        },

        {
            title: 'Порхает как бабочка, \n жалит как пчела!',
            text: 'Этот обычный, на первый взгляд, квадрокоптер оснащен мощным лазером, замаскированным под стандартную камеру.',
            info: [
                {
                    key: 'Дальность полета',
                    value: '800 м'
                },
                {
                    key: 'Радиус поражения',
                    value: '50 м'
                }
            ],
            image: {
                src: 'assets/img/promo/slider-3.png',
                alt: 'квадрокоптер'
            }
        }
    ],

    // список товаров в каталоге
    products: [
        {
            title: 'Любительская селфи-палка',
            price: '500',
            unit: 'руб.',
            image: 'assets/img/products/item-1.jpg'
        },
        {
            title: 'Профессиональная селфи-палка',
            price: '1 500',
            unit: 'руб.',
            image: 'assets/img/products/item-2.jpg'
        },
        {
            title: 'Непотопляемая селфи-палка',
            price: '2 500',
            unit: 'руб.',
            image: 'assets/img/products/item-3.jpg'
        },
        {
            title: 'Селфи-палка «Следуй за мной»',
            price: '4 900',
            unit: 'руб.',
            image: 'assets/img/products/item-4.jpg',
            isNew: true
        },
    ],

    // цвета для фильтра поиска товаров
    colors: [
        { name: "Черный",  value: "black" },
        { name: "Белый",   value: "white" },
        { name: "Синий",   value: "blue" },
        { name: "Красный", value: "red" },
        { name: "Розовый", value: "pink" }
    ],

    // список категорий товаров на главной
    categoryList: [
        { url: 'catalog.html', text: 'Виртуальная реальность', class: 'vr' },
        { url: 'catalog.html', text: 'Моноподы для селфи', class: 'monopods' },
        { url: 'catalog.html', text: 'Экшн-камеры', class: 'camera' },
        { url: 'catalog.html', text: 'Фитнесс браслеты', class: 'fitness' },
        { url: 'catalog.html', text: 'Умные часы', class: 'watch' },
        { url: 'catalog.html', text: 'Квадрокоптеры', class: 'copter' }
    ],

    serviceData: [
        {
            id: 'delivery',
            title: 'Доставка',
            text: 'Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь мы неплохо заработаем, поднимая его на ваш этаж.',
            isActive: true
        },
        {
            id: 'warranty',
            title: 'Гарантия',
            text: 'Если из-за возгарания купленного у нас товара у вас сгорит <br> дом — не переживайте, мы выдадим вам новый. <br> Товар, не дом, конечно же.'
        },
        {
            id: 'credit',
            title: 'Кредит',
            text: 'Залезть в долговую яму стало проще! Кредитные консультанты подберут для вас наиболее выгодные условия кредита. Выгодные для нашего банка, разумеется.'
        }
    ],

    // список производителей и их логотипов на главной
    vendors: [
        {
            title: 'dji',
            image: 'assets/img/vendors/dji.jpg'
        },
        {
            title: 'sp-gadjets',
            image: 'assets/img/vendors/sp-gadjets.jpg'
        },
        {
            title: 'Go Pro',
            image: 'assets/img/vendors/go-pro.jpg'
        },
        {
            title: 'Vive',
            image: 'assets/img/vendors/vive.jpg'
        }
    ],

    mapLink: 'https://www.google.ru/maps/place/Большая+Конюшенная+ул.,+19,+Санкт-Петербург,+191186/@59.9389581,30.3204762,17z/data=!4m5!3m4!1s0x4696310fca5ba729:0xea9c53d4493c879f!8m2!3d59.9387942!4d30.3230833?hl=ru'
};
