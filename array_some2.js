let arr = [true, true, true, true, true, true, true, true, true, false]

console.log(arr.some(currentValue => {
    return currentValue === false
}))

console.log(arr.findIndex((currentValue) => {
    return currentValue === false
}))
arr.splice(9, 1)
console.log(arr)