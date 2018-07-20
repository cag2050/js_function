var params = {
    action: 'addUser',
    username: '',
    password: 'admin'
}
console.log(params)
for (var key of Object.keys(params)) {
    if (params[key] === '') {
        delete params[key]
    }
}
console.log(params)