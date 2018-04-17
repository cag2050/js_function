var a = ['啊', '厉害', '百'];
var collator = new Intl.Collator('zh');
a.sort(collator.compare);
console.log(a.join(', '));