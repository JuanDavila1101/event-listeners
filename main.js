// console.log("event-listeners");

// Objects

// const firstObj = {}; // this is an example of a valid object 

// const user = {
//     username: 'tato',
//     password: 'abc123',
//     lovesJavascript: true,
//     favoriteNumber: 42,
// }

// // dot notation
// // Get values out of an object using dot notation
// console.log(user.lovesJavascript);
// console.log(user.username);

// //Bracket notation
// const passwordCode = 'password';
// console.log(user[passwordCode]);
// console.log(user['username']);
// console.log(user['favoriteNumber']);
// console.log(user.favoriteNumber);

// Assigning values
const newUser = {
    isNew: true,
}

// newUser.userName = 'JuanD'; // dot notation 
// newUser['password'] = 'abc1234'; // bracket notation
// console.log(newUser);

// Methods (functions as values)
const newObject = {
    userName: 'Juan',
    // sayHello: function() { // Anonimous methods
    //     console.log('Hi everyone');
    // }
    sayHello: function() { // Anonimous methods
        console.log(`${this.userName} Says Hello`);
    }
}


// newObject.userName = 'Ignacio';
// newObject.sayHello(); // this invokes the function
// // console.log(newObject.sayHello);  


const userTwo = {
    userName: 'Juan D',
    password: '3426',
    lovesJavascript: true,
    favoriteNumber: 12,
}

// for (let key in userTwo) { // this gives us the keys
//     console.log(key);
// }

for (let key in userTwo) { // this gives us the value
    console.log(userTwo[key]);
}

// for (let key in userTwo) { // this doesn't work
//     console.log(userTwo.key);
// }





//End