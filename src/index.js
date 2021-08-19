exports.min = function min(array) {

    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
        let compnum = array[0];
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < compnum) {
                compnum = array[i]
            }
        }
        return compnum;
    } else {
        return 0;
    }

}

exports.max = function max(array) {
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
        let compnum = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > compnum) {
                compnum = array[i]
            }
        }
        return compnum;
    } else {
        return 0;
    }

}

exports.avg = function avg(array) {
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        return sum / array.length;
    } else {
        return 0;
    }
}