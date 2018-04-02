let obj = {
    '20180401_111_222': ['1', '2'],
    '20180402_111_222': ['3', '4'],
    '20180311_111_222': ['5', '6']
}
// 先取出对象的key存入数据，然后排序
let arr = []
for (let key of Object.keys(obj)) {
    arr.push(key)
}
console.log(arr)
arr.sort((a, b) => {
    return a < b
})
console.log(arr)
console.log(obj[arr[0]])
