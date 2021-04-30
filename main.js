//  String, Numbers, Boolean, null, undefined

// const name = 'Adams';
// const age = 19;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof x);


// concatenation
// const fname = 'adams';
// const fage = 19;

// console.log('My name is ' + fname + ' and I am ' + fage);

// Template string 
// console.log(`My name is ${fname} and I am ${fage}`);
// ?I can do also with declaring variable

// const aboutMe = `My name is ${fname} and I am ${fage}`;

// alert(aboutMe);





// Methods

// const s = 'code, swift, javascript, it';

// console.log(s.length);

// console.log(s.substring(0, 5).bold());


// console.log(s.split(', '))




// Arrays - variables that hold multiple values

// const number = new Array(1,2,3,4,5);
// console.log(number);

// const fruits = ['apples', 'oranges', 'pears'];
// const lastElement = fruits[fruits.length - 1];

// console.log(lastElement);
// console.log(fruits.lastIndexOf('pears'));


// fruits[3] = 'grapes';

// fruits.push('mangos');

// fruits.unshift('strawberries');

// fruits.pop();

// console.log(Array.isArray('hello'))
// console.log(Array.isArray(fruits));


// console.log(fruits.lastIndexOf(''))


// console.log(fruits);



// console.log(fruits[1]);





// object and object literals 


// const person = {
//     firstName: "Adams",
//     lastName: 'Midov',
//     age: 30,
//     hobbies: ['playing DOTA 2', 'coding', 'chatting'],
//     address: {
//         street: 'Sarbon Yoshlik',
//         city: 'Namangan',
//         state: 'NN'
//     }
// };

// person.email = 'adamsmidov@gmail.com';

// // alert(person);
// // console.log(person.firstName, person.lastName, person.hobbies[1], person.address.city);

// const { firstName, lastName , address: {city}} = person;

// console.log(person)

// Now we are making a todolist using arrays and objects

// const todos = [
//     {
//         id: 1,
//         text: "watch videos about JavaScript",
//         isCompleted : true
//     },
//     {
//         id: 2,
//         text: "watch videos about Swift",
//         isCompleted : false
//     },
//     {
//         id: 3,
//         text: "go to Dentist",
//         isCompleted : false
//     }
// ];

// Using for with an array
// Method 1

// for(let i = 0; i <= todos.length; i++) {
//     console.log(todos[i].text);
// }

// Method 2



// for(let todo of todos) {
//     console.log(todo.text)
// }


// high order array method
// otherwise forEach, map, filter

// forEach
// todos.forEach(function(todo) {
//     console.log(todo.text)
// })


// map
// const textOfTodos = todos.map(function(smth) {
//     return smth.text;
// });
// console.log(textOfTodos);


// filter
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// });
// console.log(todoCompleted);


// console.log(todos[1]);

// const {id, text, isCompleted} = todos;

// console.log(todos[1].text)

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);











// For loops

// for(let i = 0; i <= 10; i++) {
//     console.log(`This is number ${i}`);
// }

// While loop


// let i = 0;
// while(i < 10) {
//     console.log(`Loop number ${i}`);
//     i = i + 2;
// }







// conditionals

// const x = 10;
// const y = 11;

// if(x > 5 || y < 20) {
//     console.log('X is more than 5 or y is less than 20');
// } 

// if(x > 5 && y > 10) {
//     console.log('X is more than 5, and y is more than 10');
// } 

// else if(x > 10) {
//     console.log('x is greater than 10');
// } else {
//     console.log('x is less than 10');
// }




// ternary

// const x = 10;
// const color = x > 10 ? 'red' : 'blue';

// console.log(color);

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
// }






// functions


// const addNums = num1 => num1 + 5;

// console.log(addNums(5));

// example of arrow function in case of forEach

// todos.forEach((todo) => console.log(todo.text))





// OOP


// Constructor function

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }
    // after creating a prototype I can remove that code
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }
//     this.getFullName = function() {
//         return `${firstName} ${lastName}`; 
//     }
// }
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }


// Class works the same as above but looks prettier

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new Person('Adams', 'Midov', '3-3-2002');
// const person2 = new Person('Mary', 'Midov', '29-8-2002');
// console.log(person1, person2)











// Instantiate function
// const person1 = new Person('Adams', 'Midov', '3-3-2002');
// const person2 = new Person('Mary', 'Midov', '29-8-2002');
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person1);
// console.log(person1.getFullName());

// console.log(`${person1.firstName} is in love with  ${person2.firstName}`);


// prototypes




















// DOM

// console.log(window);


// Single elements selectors


// console.log(document.getElementById('my-form'))

// const form = document.getElementById('my-form');
// console.log(form)

// console.log(document.querySelector('.item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));
// multiple elements selectors

// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));





// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'hello';

// ul.children[1].innerText = 'Adams';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


// const btn = document.querySelector('.btn');
// btn.style.background = 'red'


// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log(e.target.);
//     document.querySelector('#my-form').style.background = 'red';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// })








const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    // console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        // alert('Please enter fields');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));


        userList.appendChild(li);

        // Clear the fields

        nameInput.value = '';
        emailInput.value = '';
    }
}
