const expect = require('chai').expect;
const getPaymentTokenFromApi = require('./6-payment_token')


describe('getPaymentTokenFromApi', (done) => {
    it('...', () => {
        getPaymentTokenFromApi(true).then((response) => {
            expect(response).to.deep.equal({'data': 'Successful response from the API'});
            done();
        }).catch((error) => {
            done(error);
        });

    });

    it('...', (done) => {
        const result = getPaymentTokenFromApi(false);
        expect(result).to.be.undefined;
        done();
    });

});