// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
let arr = [1, 2, 3, undefined]

let newArr = arr.filter((currentValue, index, thisArr) => {
    return currentValue !== undefined
})

console.log('arr =')
console.log(arr)
console.log('newArr =')
console.log(newArr)