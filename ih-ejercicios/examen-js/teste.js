const array = ['apple', 'pear', 'strawberries', 'mango']

const longString = (strings) => {
    return strings.reduce((acc, string) => {
        let largestString = acc;
        if (string.length > acc) {
            largestString = string;
            acc = string.length;
        }
        return largestString;
    }, 0);
};

console.log(longString(array));