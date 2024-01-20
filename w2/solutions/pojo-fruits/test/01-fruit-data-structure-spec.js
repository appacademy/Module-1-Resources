const assert = require('assert');

const [
    firstFruitObject,
    lastFruitObject,
    indexFruitObject,
    fruitNames,
    getFruitKeys,
    getNutritionsKeys
] = require('../problems/01-fruit-data-structure');

const fruits = require('../fruit-data');

describe('firstFruitObject()', function () {

    const fruits1 = JSON.parse(JSON.stringify(fruits));

    it('Return the first object in the fruits array', function () {

        const result1 = { genus: 'Malus', name: 'Apple', id: 6,
        family: 'Rosaceae', order: 'Rosales', nutritions: { carbohydrates: 11.4,
        protein: 0.3, fat: 0.4, calories: 52, sugar: 10.3 } };

        assert.deepStrictEqual(firstFruitObject(fruits1), result1);
    });
});

describe('lastFruitObject()', function () {

    const fruits2 = JSON.parse(JSON.stringify(fruits));

    it('Return the last object in the fruits array', function () {

        const result2 = { genus: 'Citrullus', name: 'Watermelon', id: 25,
        family: 'Cucurbitaceae', order: 'Cucurbitales', nutritions:
        { carbohydrates: 8, protein: 0.6, fat: 0.2, calories: 30, sugar: 6 } };

        assert.deepStrictEqual(lastFruitObject(fruits2), result2);
    });
});

describe('indexFruitObject()', function () {

    const fruits3 = JSON.parse(JSON.stringify(fruits));

    it('Return one object at the given index from the fruits array',
    function () {

        const index = 17;
        const result3 = { genus: 'Mangifera', name: 'Mango', id: 27, family: 'Anacardiaceae',
            order: 'Sapindales', nutritions: { carbohydrates: 15, protein: 0.82,
            fat: 0.38, calories: 60, sugar: 13.7 } };

        assert.deepStrictEqual(indexFruitObject(index, fruits3), result3);
    });
});

describe('fruitNames()', function () {

    const fruits4 = JSON.parse(JSON.stringify(fruits));

    it('Return a list of all of the fruit names', function () {

        const result4 = [
            'Apple',        'Apricot',    'Banana',
            'Blackberry',   'Blueberry',  'Cherry',
            'Durian',       'Fig',        'Gooseberry',
            'Grapes',       'GreenApple', 'Guava',
            'Kiwi',         'Lemon',      'Lime',
            'Lingonberry',  'Lychee',     'Mango',
            'Melon',        'Orange',     'Papaya',
            'Passionfruit', 'Pear',       'Persimmon',
            'Pineapple',    'Plum',       'Raspberry',
            'Strawberry',   'Tomato',     'Umbu',
            'Watermelon'
        ];

        assert.deepStrictEqual(fruitNames(fruits4), result4);
    });
});

describe('getFruitKeys()', function () {

    const fruits5 = JSON.parse(JSON.stringify(fruits));

    it('Return a list of all of the keys for each fruit record', function () {

        const result5 = [ 'genus', 'name', 'id', 'family', 'order', 'nutritions' ];

        assert.deepStrictEqual(getFruitKeys(fruits5), result5);
    });
});

describe('getNutritionsKeys()', function () {

    const fruits6 = JSON.parse(JSON.stringify(fruits));

    it("Return a list of all of the keys within each 'nutritions' object",
    function () {

        const result6 = [ 'carbohydrates', 'protein', 'fat', 'calories', 'sugar' ];

        assert.deepStrictEqual(getNutritionsKeys(fruits6), result6);
    });
});
