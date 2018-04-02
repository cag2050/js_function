// 先将对象存到map里，
let obj = {
    '20180401_111_222': ['1', '2'],
    '20180402_111_222': ['3', '4'],
    '20180311_111_222': ['5', '6']
}

let map = new Map()

// map.set('20180401_11', ['1', '2'])
// map.set('20180402_11', ['3', '4'])
for (let key of Object.keys(obj)) {
    // console.log(key)
    map.set(key, obj[key])
}
console.log(map)
let arr = []
for (let key of map.keys()) {
    console.log(key)
    arr.push(key)
}
// console.log(arr)
// arr.sort((a, b) => {
//     return a < b
// })

// console.log(arr)