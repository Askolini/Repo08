var sum = 0;

function addThree() {
    sum = sum + 3;
}
addThree(3);

function addFive() {
   sum = sum + 5;
}
addFive(5);

module.exports = {
    addThree,
    addFive
};