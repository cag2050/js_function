let str = '   \n  \n  limit'
// 去掉limit前面的空格、\n、tab
let newStr = str.replace(/(\s|\n|\t)+limit/g, 'limit')
console.log(newStr)