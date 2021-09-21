var total = 0;

function funcWithArg(digit) {
    total = (digit + 9) / 5
    return total;
}
funcWithArg(6);

console.log(total);
module.exports = funcWithArg;