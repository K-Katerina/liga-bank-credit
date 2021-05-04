export const extend = (a, b) => Object.assign({}, a, b);

export const getWordForm = (n, array) => {
    const modN = n % 10;
    if (n > 10 && n < 21) {
        return array[2];
    } else if (modN > 1 && modN < 5) {
        return array[1];
    } else if (modN === 1) {
        return array[0];
    } else {
        return array[2];
    }
};

export const getWordFormWithValue = (n, array) => n.toLocaleString() + ' ' + getWordForm(n, array);

export const range = (count) => {
   return [...Array(count).keys()];
};
