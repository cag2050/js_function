let urlParam = '#埋点日志\neventId=事件id\nparam1=111\nparam2=222'
// let urlParam = '?foo=123&bar=&baz=789';

// console.log(urlParam.match(/#(\S*)\n/)[1])
// console.log(urlParam.match(/eventid=(\S*)\n/i)[1])
// let regExp = /(([^?&=]+)(?:=([^?&=]*))*)/g;
   let regExp = /(([^(\n)=]+)(?:=([^(\n)=]*))*)/g;
// let match;
let match = regExp.exec(urlParam)
let resultArr = []
/*
while (regExp.exec(urlParam)) {
    match = regExp.exec(urlParam)
    console.log(match)
}
*/
while (match) {
    // console.log(match)
    console.log(`${match[2]} = ${match[3]}`)
    if (/^#/.test(match[2]) || match[2] === 'eventid') {

    } else {
        // result[match[2]] = match[3]
        resultArr.push({
            inputValue1: match[2],
            inputValue2: match[3]
        })

    }
    match = regExp.exec(urlParam)
}
console.log(resultArr)
