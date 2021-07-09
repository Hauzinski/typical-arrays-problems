exports.min = function min(array) {
    if (!array || !array.length) {
        return 0;
    }
    let count = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < count) {
            count = array[i];
        }
    }
    return count;
};

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    }
    let count = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > count) {
            count = array[i];
        }
    }
    return count;
};

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    }
    let sum = 0;
    let count = array.length;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / count;
};
