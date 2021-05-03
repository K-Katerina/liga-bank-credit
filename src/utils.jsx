export const extend = (a, b) => Object.assign({}, a, b);

export const getWordForm = (n, array) => {
    const modN = n % 10;
    if (n > 10 && n < 21) {
        return n.toLocaleString() + ' ' + array[2];
    } else if (modN > 1 && modN < 5) {
        return n.toLocaleString() + ' ' + array[1];
    } else if (modN === 1) {
        return n.toLocaleString() + ' ' + array[0];
    } else {
        return n.toLocaleString() + ' ' + array[2];
    }
};

export const range = (count) => {
   return [...Array(count).keys()];
};
