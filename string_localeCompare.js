// let arr = ['2', '1', 3, 2, 1, '汉字', '你', 'a', 'b', 'c']
let arr = ['汉字', '你', '啊']

arr.sort((a, b) => {
    // return a.toLocaleString().localeCompare(b.toLocaleString(), 'zh')
    // return a.toString().localeCompare(b.toString())
    // return a.localeCompare(b, 'zh')
    return a.localeCompare(b)
})

console.log(arr)