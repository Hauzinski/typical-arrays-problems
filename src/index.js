exports.min = function min(array) {
    if (!array || !array.length) {
        return 0;
    }
    let count = array[0];
    for (let value of array) {
        if (value < count) {
            count = value;
        }
    }
    return count;
};

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    }
    let count = array[0];
    for (let value of array) {
        if (value > count) {
            count = value;
        }
    }
    return count;
};

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    }
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    return sum / array.length;
};
