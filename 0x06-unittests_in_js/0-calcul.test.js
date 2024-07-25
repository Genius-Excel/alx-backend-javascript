const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', () => {
    it('should return 4 when inputs are 1 and 3', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 6 when inputs are 3.5 and 2', () => {
        assert.strictEqual(calculateNumber(3.5, 2), 6);
    });

    it('should return 7 when inputs are 2.5 and 4', () => {
        assert.strictEqual(calculateNumber(2.5, 4), 7);
    });
})