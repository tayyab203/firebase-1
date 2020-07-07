var username = document.getElementById('username')
var callnumber = document.getElementById('callnumber')
var email = document.getElementById('email')
var password = document.getElementById('password')
var passwordrepeat = document.getElementById('passwordrepeat')

function signup() {
var user = {
    username:username.Value,
    callnumber:callnumber.Value,
    email:email.Value,
    password:password,
    passwordrepeat:passwordrepeat,
}
console.log('user', user)
}