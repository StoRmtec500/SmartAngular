

let login = function login(usrname, password) {
    if (usrname !== 'admin' || password !== 'radical') {
        console.log('incorrect login');
    } else {
        console.log('logged in');
    }
}

export {login }
