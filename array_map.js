// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
// map() 方法按照原始数组元素顺序依次处理元素。
// 注意： map() 不会对空数组进行检测。
// 注意： map() 不会改变原始数组。如果对原数组的值进行操作，会改变原数组。

let arr = [
    {key: 'name', value: 'cag'},
    {key: 'age', value: '18'}
]

let newArr = arr.map((item, index, thisArr) => {
    // if (item.key === 'age') {
        return `<text>${item.key}</text>`
    // }
})

console.log(arr)
console.log(newArr)
console.log(newArr[0] === undefined)
