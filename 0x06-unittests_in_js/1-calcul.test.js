const assert = require('assert');
const calculateNumber = require('./1-calcul')


describe('calculateNumber', () => {
    it('...', () => {
        assert.strictEqual(calculateNumber('SUM', 2.0, 5.4), 7);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2, 10), 8);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 9.5, 5), 2);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber('SUM', 10.5, 5), 16);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2, 5), 3);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 4.3, 2.4), 2);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber('SUM', 3.5, 3.5), 8);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 6.2, 3.4), -3);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2, 0), "Error");
    });

    it('...', () => {
        assert.strictEqual(calculateNumber('SUM', 6.2, 3.4), 9);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 8.5, 3.4), -6);
    });
    
    it('...', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0, 2.5), 0);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber('SUM', 8.2, 3.4), 11);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 10, 3), -7);
    });
    
    it('...', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 15, 2.5), 5);
    });

});