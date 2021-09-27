function mathTest (x, y) {
    if (x < 0 || y < 0) {
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
    mathTest(2, 2);
    mathTest(-2, 2);
    mathTest(2, -2);
    mathTest(2, 8);
    mathTest(3, 3);
    mathTest(0, 0);
}
module.exports = mathTest;