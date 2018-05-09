// 求对象数组中，某个对象属性的最大值

let arr = [
    {value: 1},
    {value: 2},
    {value: 211}
]
let newArr = arr.map(
    (item) => {
        return item.value
    }
)
console.log(newArr)
let max = Math.max(...newArr)
console.log(max)