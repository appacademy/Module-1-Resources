const { expect } = require('chai');

const [
    addKeyAndValueToAll,
    addKeyAndValueToOne,
    updateKeyName,
    updateIdValues,
    deleteKeysAndValues
] = require('../problems/02-manipulate-fruit-objects');

const fruits = require('../fruit-data');

describe('addKeyAndValueToAll()', function () {

    const fruitCopy1 = JSON.parse(JSON.stringify(fruits));
    const fruitCopy1a = JSON.parse(JSON.stringify(fruits));


    const updated1 = addKeyAndValueToAll(fruitCopy1, "inStock", true)
    const updated1a = addKeyAndValueToAll(fruitCopy1a, "fresh", "always")


    it('returns an array of all fruit objects', function () {
        expect(updated1).to.be.an("array");
        expect(updated1[0]).to.be.an("object");
        expect(updated1.length).to.equal(31);
    });

    it('adds the given key and value to each fruit object', function () {
        expect(updated1[0]).to.have.property("inStock");
        expect(updated1[0]["inStock"]).to.equal(true);
        expect(updated1[27]).to.have.property("inStock");
        expect(updated1[27]["inStock"]).to.equal(true);

        expect(updated1a[0]).to.have.property("fresh");
        expect(updated1a[0]["fresh"]).to.equal("always");
        expect(updated1a[27]).to.have.property("fresh");
        expect(updated1a[27]["fresh"]).to.equal("always");
    });
});


describe('addKeyAndValueToOne()', function () {

    const fruitCopy2 =  JSON.parse(JSON.stringify(fruits));
    const fruitCopy2a =  JSON.parse(JSON.stringify(fruits));


    const updated2 = addKeyAndValueToOne(fruitCopy2, "color", "red", 0);
    const updated2a = addKeyAndValueToOne(fruitCopy2a, "price", 1, 12);

    it('returns a single object', function () {
        expect(updated2).to.be.an("object");
        expect(updated2a).to.be.an("object");
    });

    it('returns object at the correct index array', function () {
        expect(updated2.id).to.deep.equal(6);
        expect(updated2a.id).to.deep.equal(66);
    });

    it('adds the given key and value to the correct fruit object', function () {
        expect(updated2).to.have.property('color');
        expect(updated2["color"]).to.deep.equal("red");
        expect(fruitCopy2[1]).to.not.haveOwnProperty('color');

        expect(updated2a).to.have.property('price');
        expect(updated2a["price"]).to.deep.equal(1);
        expect(fruitCopy2a[0]).to.not.haveOwnProperty('price');
    });
});


describe('updateKeyName()', function () {

    const fruitCopy3 =  JSON.parse(JSON.stringify(fruits));
    const updated3 = updateKeyName(fruitCopy3, "nutritions", "nutrition");

    it('returns an array of objects', function () {
        expect(updated3).to.be.an("array");
        expect(updated3).to.have.length(31);
        expect(updated3[7]).to.be.an("object");
        expect(updated3[7]).to.haveOwnProperty("genus");
    });

    it("objects have the correct keys 'genus', 'name', 'id', 'family', 'order'",
    function () {
        expect(updated3[7]).to.haveOwnProperty("genus");
        expect(updated3[7]).to.haveOwnProperty("name");
        expect(updated3[7]).to.haveOwnProperty("id");
        expect(updated3[7]).to.haveOwnProperty("family");
        expect(updated3[7]).to.haveOwnProperty("order");
    });

    it('change the old key name to the new key name in all objects',
    function () {
        expect(updated3[0]).to.haveOwnProperty("nutrition");
        expect(updated3[0]).to.not.haveOwnProperty("nutritions");
        expect(updated3[0].nutrition).to.haveOwnProperty("protein");

        expect(updated3[16]).to.haveOwnProperty("nutrition");
        expect(updated3[16]).to.not.haveOwnProperty("nutritions");
        expect(updated3[16].nutrition).to.haveOwnProperty("protein");
    });
});


describe('updateIdValues()()', function () {

    const fruitCopy4 =  JSON.parse(JSON.stringify(fruits));

    const updated4 = updateIdValues(fruitCopy4);

    const result4 = [ '000006', '000035', '000001', '000064', '000033',
    '000009', '000060', '000068', '000069','000047', '000072', '000037',
    '000066', '000026', '000044', '000065', '000067', '000027', '000041',
    '000002', '000042', '000070', '000004', '000052', '000010', '000071',
    '000023', '000003', '000005', '000073', '000025' ];

    it('returns an array of all ids', function () {
        expect(updated4).to.be.an("array");
        expect(updated4).to.have.length(31);
    });

    it('correctly changes old 1-digit ids into 6-digit ids', function () {
        expect(updated4[0]).to.be.a("string");
        expect(updated4[0]).to.have.length(6);
        expect(updated4[0]).to.include("00000");

        expect(updated4[2]).to.be.a("string");
        expect(updated4[2]).to.have.length(6);
        expect(updated4[2]).to.include("00000");
    });

    it('correctly changes old 2-digit ids into 6-digit ids', function () {
        expect(updated4[1]).to.be.a("string");
        expect(updated4[1]).to.have.length(6);
        expect(updated4[1]).to.include("0000");
        expect(updated4[1]).to.not.include("00000");

        expect(updated4[3]).to.be.a("string");
        expect(updated4[3]).to.have.length(6);
        expect(updated4[3]).to.include("0000");
        expect(updated4[3]).to.not.include("00000");
    });

    it('returns the correct output with all `id` values formatted correctly',
    function () {
        expect(updated4).to.have.length(31);
        expect(updated4).to.deep.equal(result4);
    });
});


describe('deleteKeysAndValues()', function () {

    const fruitCopy5 =  JSON.parse(JSON.stringify(fruits));
    const fruitCopy5a =  JSON.parse(JSON.stringify(fruits));


    const updated5 = deleteKeysAndValues(fruitCopy5, "sugar");
    const updated5a = deleteKeysAndValues(fruitCopy5a, "fat");


    it('return an array of fruit objects', function () {
        expect(updated5).to.be.an("array");
        expect(updated5).to.have.length(31);
        expect(updated5[30]).to.be.an("object");
    });

    it("objects have the correct keys 'genus', 'name', 'id', 'family', 'order'",
    function () {
        expect(updated5[30]).to.haveOwnProperty("genus");
        expect(updated5[30]).to.haveOwnProperty("name");
        expect(updated5[30]).to.haveOwnProperty("id");
        expect(updated5[30]).to.haveOwnProperty("family");
        expect(updated5[30]).to.haveOwnProperty("order");
    });

    it("'nutritions' objects have the correct keys",
    function () {
        expect(updated5[30]["nutritions"]).to.haveOwnProperty("carbohydrates");
        expect(updated5[30]["nutritions"]).to.haveOwnProperty("protein");
        expect(updated5[30]["nutritions"]).to.haveOwnProperty("calories");

        expect(updated5a[30]["nutritions"]).to.haveOwnProperty("carbohydrates");
        expect(updated5a[30]["nutritions"]).to.haveOwnProperty("protein");
        expect(updated5a[30]["nutritions"]).to.haveOwnProperty("calories");
    });

    it("deletes the 'keyToDelete' from the nutritions object from every fruit",
    function () {
        expect(updated5[0]).to.haveOwnProperty("nutritions");
        expect(updated5[0]["nutritions"]).to.not.haveOwnProperty("sugar");

        expect(updated5a[0]).to.haveOwnProperty("nutritions");
        expect(updated5a[0]["nutritions"]).to.not.haveOwnProperty("fat");
    });
});
