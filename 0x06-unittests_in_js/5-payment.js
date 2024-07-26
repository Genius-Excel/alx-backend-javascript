const Utils = require('./utils')

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    let result;
    result = Utils.calculateNumber(type='SUM', totalAmount, totalShipping);

    console.log(`The total is: ${result}`);

}

module.exports = sendPaymentRequestToApi;