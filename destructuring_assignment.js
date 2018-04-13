// Destructuring assignment：解构赋值

// 数组的解构赋值
// let arr = [1, 2, 3]
//
// let arr2 = [...arr]
// console.log('arr2=' + arr2)
// arr2.push(4)
// console.log('arr=' + arr)
// console.log('arr2=' + arr2)
// console.log(arr === arr2)

// 对象的解构赋值
let obj = {
    key1: 'value1',
    key2: 'value2'
}
let {key1, key2} = obj
console.log('key1 = ' + key1)
console.log('key2 = ' + key2)