let array = [1, 2, 3]
function getSum(total, num) {
    console.log('total=' + total)
    console.log('num=' + num)
    return total + num
}
console.log(array.reduce(getSum))