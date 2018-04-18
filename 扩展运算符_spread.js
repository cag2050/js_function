// 扩展运算符：将数组转换为连续的函数参数。
function f(x, y, z) {
    return x + y + z;
}

// 传递数组的每个元素作为参数
console.log(f(...[1, 2, 3])); // 6