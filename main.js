console.log("callbacks");

function myFunc1(name) {

    return `hello ${name}!`;
}

function myFunc2(nicname) {

    return `call me ${nicname}!`;
}

function myFunc3(name, cb) {

    return cb(name);
}

console.log(myFunc3('Juan', myFunc1));
console.log(myFunc3('Tato', myFunc2));



//END