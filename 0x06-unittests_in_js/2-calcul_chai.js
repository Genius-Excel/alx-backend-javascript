function calculateNumber(type, a, b){
    if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
    }
    else if (type === 'SUBTRACT') {
        return Math.round(b) - Math.round(a);
    }
    else if (type === 'DIVIDE') {
        // check for zero division
        if (Math.round(b) === 0) {
            return "Error";
        }

        return Math.round(a) / Math.round(b);
    }
}

// Export module fucntion.
module.exports = calculateNumber;
