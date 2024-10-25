let nombre = 'Chanchito feliz';
let username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('soy function 1');
    return true;
}

function fn2() {
    console.log('soy function 2');
    return true;
}

//let x fn1() && fn2();