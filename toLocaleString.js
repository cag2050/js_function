// toLocalString()是调用每个数组元素的 toLocaleString() 方法，然后使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串。

let arr = [12345, '1234']

console.log(arr.toLocaleString())
// 12,345,123

// 覆盖 toLocaleString 的对象
// Array：Array.prototype.toLocaleString()
// Number：Number.prototype.toLocaleString()
// Date：Date.prototype.toLocaleString()