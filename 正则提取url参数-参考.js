let urlParam = '#埋点日志\neventid=事件id\nparam1=111\nparam2=222'
// var urlParam = '?foo=123&bar=&baz=789';

// console.log(str.match(/#(\S*)\n/)[1])
// console.log(str.match(/eventid=(\S*)\n/)[1])
// var regExp = /(([^?&=]+)(?:=([^?&=]*))*)/g;
   var regExp = /(([^(\n)=]+)(?:=([^(\n)=]*))*)/g;
var match;
while (match = regExp.exec(urlParam)) {
    // console.log(match)
    console.log(`${match[2]} = ${match[3]}`)

}