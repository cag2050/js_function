let arr = [{dt: '20171119', index: '1'}, {dt: '20171118', index: '2'}, {dt: '20171120', index: '3'}];

let compare = function (obj1, obj2) {
    let value1 = obj1.dt
    let value2 = obj2.dt
    if (value1 < value2) {
        return 1;
    } else if (value1 > value2) {
        return -1;
    } else {
        return 0;
    }
}
arr.sort(compare);
console.log(arr)