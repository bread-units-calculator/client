/*global define */
define(['modules/bread-units/bread-units-module'], function(breadUnits) {
    'use strict';

    breadUnits.controller('BreadUnitsController', BreadUnitsController);

    BreadUnitsController.$inject = [];

    function BreadUnitsController() {
        var vm = this;
        vm.breadUnits = [];

        initialize();

        function initialize() {
            vm.title = 'Bread Units';
            vm.breadUnits = getBreadUnits();
        }
    }

    function getBreadUnits() {
        return [
            {
                'name': 'Белый хлеб',
                'measure': '1 кусок',
                'weight': '20 г'
            },
            {
                'name': 'Ржаной хлеб',
                'measure': '1 кусок',
                'weight': '25 г'
            },
            {
                'name': 'Бородинский хлеб',
                'measure': '1 кусок',
                'weight': '25 г'
            },
            {
                'name': 'Булочка',
                'measure': '1/2 маленькой',
                'weight': '20 г'
            },
            {
                'name': 'Крекеры (сухое печенье)',
                'measure': '5 штук',
                'weight': '15 г'
            },
            {
                'name': 'Сухари (не сладкие)',
                'measure': '2 штуки',
                'weight': '15 г'
            },
            {
                'name': 'Панировочные сухари',
                'measure': '1 ст. ложка',
                'weight': '15 г'
            },
            {
                'name': 'Хрустящие хлебцы',
                'measure': '2 штуки',
                'weight': '25 г'
            },
            {
                'name': 'Вермишель, лапша, рожки, макароны',
                'measure': '1—2 ст. ложки',
                'weight': '15 г'
            },
            {
                'name': 'Гречневая',
                'measure': '1 ст. ложка',
                'weight': '15 г'
            },
            {
                'name': 'Кукуруза',
                'measure': '1/2 початка',
                'weight': '100 г'
            },
            {
                'name': 'Кукурузные хлопья',
                'measure': '1 ст. ложка',
                'weight': '15 г'
            },
            {
                'name': 'Манная',
                'measure': '1 ст. ложка',
                'weight': '15 г'
            },
            {
                'name': 'Мука́ (любая)',
                'measure': '1 ст. ложка',
                'weight': '15 г'
            },
            {
                'name': 'Овсяная',
                'measure': '1 ст. ложка',
                'weight': '15 г'
            },
            {
                'name': 'Овсяные хлопья',
                'measure': '1 ст. ложка',
                'weight': '15 г'
            },
            {
                'name': 'Перловая',
                'measure': '1 ст. ложка',
                'weight': '15 г'
            },
            {
                'name': 'Пшено',
                'measure': '1 ст. ложка',
                'weight': '15 г'
            },
            {
                'name': 'Рис',
                'measure': '1 ст. ложка',
                'weight': '15 г'
            },
            {
                'name': 'Картофель',
                'measure': '1 клубень величиной с крупное куриное яйцо',
                'weight': '65 г'
            },
            {
                'name': 'Картофельное пюре',
                'measure': '2 ст. ложки (с горкой)',
                'weight': '75 г'
            },
            {
                'name': 'Жареный картофель',
                'measure': '2 ст. ложки с горкой',
                'weight': '35 г'
            },
            {
                'name': 'Сухой картофель',
                'measure': '',
                'weight': '25 г'
            },
            {
                'name': 'Абрикосы',
                'measure': '2—3 штуки',
                'weight': '110 г'
            },
            {
                'name': 'Айва',
                'measure': '1 штука, крупная',
                'weight': '140 г'
            },
            {
                'name': 'Ананас',
                'measure': '1 кусок (поперечный срез)',
                'weight': '140 г'
            },
            {
                'name': 'Арбуз',
                'measure': '1 кусок',
                'weight': '270 г'
            },
            {
                'name': 'Апельсин',
                'measure': '1 штука, средний',
                'weight': '150 г'
            },
            {
                'name': 'Банан',
                'measure': '1/2 штуки, средний',
                'weight': '70 г'
            },
            {
                'name': 'Брусника',
                'measure': '7 ст. ложек',
                'weight': '140 г'
            },
            {
                'name': 'Виноград',
                'measure': '12 штук, небольших',
                'weight': '70 г'
            },
            {
                'name': 'Вишня',
                'measure': '15 штук',
                'weight': '90 г'
            },
            {
                'name': 'Гранат',
                'measure': '1 штука, большой',
                'weight': '170 г'
            },
            {
                'name': 'Грейпфрут',
                'measure': '1/2 штуки, крупный',
                'weight': '170 г'
            },
            {
                'name': 'Груша',
                'measure': '1 штука, средняя',
                'weight': '90 г'
            },
            {
                'name': 'Дыня',
                'measure': '1 кусок',
                'weight': '100 г'
            },
            {
                'name': 'Ежевика',
                'measure': '8 ст. ложек',
                'weight': '140 г'
            },
            {
                'name': 'Инжир',
                'measure': '1 штука',
                'weight': '80 г'
            },
            {
                'name': 'Киви',
                'measure': '1 штука, крупная',
                'weight': '110 г'
            },
            {
                'name': 'Клубника',
                'measure': '10 штук, средних',
                'weight': '160 г'
            },
            {
                'name': 'Крыжовник',
                'measure': '6 ст. ложек',
                'weight': '120 г'
            },
            {
                'name': 'Малина',
                'measure': '8 ст. ложек',
                'weight': '150 г'
            },
            {
                'name': 'Манго',
                'measure': '1 штука, небольшое',
                'weight': '110 г'
            },
            {
                'name': 'Мандарины',
                'measure': '2-3 штуки, средних',
                'weight': '150 г'
            },
            {
                'name': 'Персик',
                'measure': '1 штука, крупный',
                'weight': '120 г'
            },
            {
                'name': 'Сливы',
                'measure': '4 штуки, средние',
                'weight': '90 г'
            },
            {
                'name': 'Смородина',
                'measure': '7 ст. ложек',
                'weight': '140 г'
            },
            {
                'name': 'Хурма',
                'measure': '1 штука, средняя',
                'weight': '70 г'
            },
            {
                'name': 'Черника, чёрная смородина',
                'measure': '7 ст. ложек',
                'weight': '140 г'
            },
            {
                'name': 'Яблоко',
                'measure': '1 штука, среднее',
                'weight': '90 г'
            },
            {
                'name': 'Молоко',
                'measure': '1 стакан',
                'weight': '200 мл'
            },
            {
                'name': 'Кефир',
                'measure': '1 стакан',
                'weight': '200 мл'
            },
            {
                'name': 'Сливки',
                'measure': '1 стакан',
                'weight': '200 мл'
            },
            {
                'name': 'Квас',
                'measure': '1 стакан',
                'weight': '200 мл'
            },
            {
                'name': 'Кока-кола',
                'measure': '1/2 стакана',
                'weight': '100 мл'
            },
            {
                'name': 'Мороженое',
                'measure': '1 порция (без стаканчика)',
                'weight': '65 г'
            },
            {
                'name': 'Сахар-песок',
                'measure': '1 ст. ложка без горки',
                'weight': '10 г'
            },
            {
                'name': 'Сахар рафинад',
                'measure': '1 кусок',
                'weight': '10 г'
            },
            {
                'name': 'Зелёный горошек',
                'measure': '7 ст. ложек',
                'weight': '100 г'
            }
        ];
    }
});
