let array = [1, 2, 3]
function compare(currentValue) {
    if (currentValue >= 2) {
        console.log('当前值= '+ currentValue + '，大于等于2')
    } else {
        console.log('当前值= '+ currentValue + '，小于2')
    }
}
array.forEach(compare)
console.log(array)