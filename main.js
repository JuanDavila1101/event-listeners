 console.log("event-listeners3");


 // const btnClickMe = document.querySelector('#main-btn');

 // const btnClickMeToo = document.querySelector('#main-btnToo');
 // const container = document.querySelector('#container');


 // btnClickMe.addEventListener('click', () => {
 // console.log('You clicked me!');
 // });

 // btnClickMe.addEventListener('click', (e) => {
 //   console.log('You clicked me!');
 //   });

 // btnClickMe.addEventListener('click', (event) => {
 //     console.log('You clicked me!');
 //     console.log(event);
 // });

 // btnClickMe.addEventListener('click', (event) => {
 //     console.log(`You clicked me! ${event.target.id}`);
 //     console.log(event.altKey);
 // });


 // //callback
 // const whatIsTheId = (event) => {
 //     console.log(`You clicked ${event.target.id}`)
 // }

 console.log("event-listeners2");


 const btnClickMe = document.querySelector('#main-btn');

 const btnClickMeToo = document.querySelector('#main-btnToo');
 const container = document.querySelector('#container');

 //callback
 const whatIsTheId = (event) => {
     console.log(`You clicked ${event.target.id}`);

     if (event.target.id === 'main-btn') {
         container.innerHTML = 'You clicked the main button ';
     } else {
         container.innerHTML = 'You clicked the other button ';
     }

 }

 btnClickMe.addEventListener('click', whatIsTheId);

 btnClickMeToo.addEventListener('click', whatIsTheId);


 // Const whatIsTheId = e => {
 //   return `The element ID is ${e.target.id}!`;
 //  }
 // //  Button.addEventListener('click', whatIsTheId);


 // END