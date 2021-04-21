export const extend = (a, b) => Object.assign({}, a, b);

const getWordForm = (n, array) => {
    const modN = n % 10;
    if (n > 10 && n < 21) {
        return n + ' ' + array[2];
    } else if (modN > 1 && modN < 5) {
        return n + ' ' + array[1];
    } else if (modN === 1) {
        return n + ' ' + array[0];
    } else {
        return n + ' ' + array[2];
    }
};

export const range = (count) => {
   return [...Array(count).keys()]
};
