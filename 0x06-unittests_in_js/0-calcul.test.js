const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', () => {
    it('...', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber(3.5, 2), 6);
    });

    it('...', () => {
        assert.strictEqual(calculateNumber(2.5, 4), 7);
    });
})