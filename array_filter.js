// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
let arr = [1, 2, 3]

let newArr = arr.filter((currentValue, index, thisArr) => {
    return currentValue === 1
})

console.log('arr =')
console.log(arr)
console.log('newArr =')
console.log(newArr)