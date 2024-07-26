const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai')


describe('calculateNumber', () => {
    it('...', () => {
        expect(calculateNumber('SUM', 2.0, 5.4)).to.equal(7);
    });

    it('...', () => {
        expect(calculateNumber('SUBTRACT', 2, 10)).to.equal(8);
    });

    it('...', () => {
        expect(calculateNumber('DIVIDE', 9.5, 5)).to.equal(2);
    });

    it('...', () => {
        expect(calculateNumber('SUM', 10.5, 5)).to.equal(16);
    });

    it('...', () => {
        expect(calculateNumber('SUBTRACT', 2, 5)).to.equal(3);
    });

    it('...', () => {
        expect(calculateNumber('DIVIDE', 4.3, 2.4)).to.equal(2);
    });

    it('...', () => {
        expect(calculateNumber('SUM', 3.5, 3.5)).to.equal(8);
    });

    it('...', () => {
        expect(calculateNumber('SUBTRACT', 6.2, 3.4)).to.equal(-3);
    });

    it('...', () => {
        expect(calculateNumber('DIVIDE', 2, 0)).to.equal("Error");
    });

    it('...', () => {
        expect(calculateNumber('SUM', 6.2, 3.4)).to.equal(9);
    });

    it('...', () => {
        expect(calculateNumber('SUBTRACT', 8.5, 3.4)).to.equal(-6);
    });
    
    it('...', () => {
        expect(calculateNumber('DIVIDE', 0, 2.5)).to.equal(0);
    });

    it('...', () => {
        expect(calculateNumber('SUM', 8.2, 3.4)).to.equal(11);
    });

    it('...', () => {
        expect(calculateNumber('SUBTRACT', 10, 3)).to.equal(-7);
    });
    
    it('...', () => {
        expect(calculateNumber('DIVIDE', 15, 2.5)).to.equal(5);
    });

});
