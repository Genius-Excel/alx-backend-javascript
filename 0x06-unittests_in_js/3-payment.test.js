const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');


describe('sendPaymentToApi', () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(Utils, 'calculateNumber');

    });

    afterEach(() => {
        spy.restore();
    });


    it('...', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    });

});