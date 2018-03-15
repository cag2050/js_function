// http://blog.csdn.net/fungleo/article/details/51596404
// javascript 判断数组中的重复内容

function arrRepeat(arr) {
    var arrStr = JSON.stringify(arr);
    for (var i = 0; i < arr.length; i++) {
        if ((arrStr.match(new RegExp('"' + arr[i] + '"', "g")).length) > 1) {
            return true;
        }
    }
    return false;
}

let arr1 = ['aa', 'aaa', 'aa']
console.log(arrRepeat(arr1))