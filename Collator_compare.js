var arr = ['啊', '厉害', '百'];
var collator = new Intl.Collator('zh');
arr.sort(collator.compare);
console.log(arr);