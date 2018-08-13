// location.search 属性得到类似下面的字符串
var urlParam = '?foo=123&bar=&baz=789';
console.log('urlParam =');
console.log(urlParam);
// var regExp = /[^?=&]+/g;
var regExp = /(([^?&=]+)(?:=([^?&=]*))*)/g;
var match;
while (match = regExp.exec(urlParam)) {
    console.log(`${match[2]} = ${match[3]}`)
}