let str = 'App Store'
console.log(encodeURIComponent(str))
console.log(encodeURIComponent(str).replace(/%20/g, ' '))

let str2 = 'App%20Store'
console.log(decodeURIComponent(str2))