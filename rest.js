let arr = [1, 2, 3]
// console.log(...arr)

function sum(...arr) {
    // console.log(...arr)
    for (let item of arr) {
        console.log(item)
    }
}

sum([1,2])