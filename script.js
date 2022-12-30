// const first_name = 'Tony';
// const last_name = 'Ng';

// console.log(`${first_name} ${last_name}`)

// const personal_info = {
//     first_name: 'Tony',
//     last_name: 'Ng',
//     city: 'Singapore'
// }

//+ Destructuring hash maps
// const {first_name:fn, last_name:ln} = personal_info
// console.log(`${fn} ${ln}`)

//+ Destructuring arrays
// const [first_name, middle_name, last_name] = ['Tony', 'Coding-God', 'Ng'];
// console.log(`${first_name} ${middle_name} ${last_name}`)

// //+ Object Literals
// function addressMaker(city, state) {
//     const {city, state} = address;
//     const newAddress = {city, state};
//     console.log(newAddress)
// }

// addressMaker('Malaysia', 'Singapore')

// //+ Object literals challegne
// function addressMaker(address) {
//     const {city:c, state:s} = address;
    
//     const newAddress = { 
//         // city: city,
//         // state: state,
//         c,
//         s,
//         country: 'Singapore'
//     }
//     console.log(`${c} ${s}, ${newAddress.country}`)
// };

// addressMaker({city: 'Singapore', state: 'stillSingapore'})

// //+ For of loop
// const incomes = [50000, 60000, 70000];
// let total = 0

// for (const income of incomes) {
//     console.log(income);
//     total += income;
// }

// console.log(total);

// //+ Spread operator
// const example1 = [1,2,3,4,5];
// const example2 = [...example1];
// example2.push(true);
// console.log(example2);

// //+ Rest operator
// function add(...nums) {
//     console.log(nums);
// }

// add(4,5,6,7)


// //+ Arrow functions
// function add(...nums) {
//     const total = nums.reduce((x, y) => x + y);
//     console.log(total);
// }

// add(4,5,6,7,8)

// //+ Default params

// function add(numArray = [1,2,3]) {
//     let total = 0;
//     numArray.forEach((element) => {
//         total += element
//     });
//     console.log(total);
// }

// add();

// //+ Default params 2
// const numArray = [1,2,3,4,5]
// console.log(numArray.includes(2));

// Let & Const

// if (false) {
//     let example = 6;
// }

// console.log(example);

// const example = [1,2,3];
// example.push(4)
// console.log(example);

// //+ Import and export
// export const data = [1,2,3];

//+ PadStart and PadEnd
// const name = 'Tony';
// console.log(name.padEnd(10, "lol"));

// //+ Class
// class Animal {
//     constructor(type, legs) {
//         this.type = type;
//         this.legs = legs;
//     }

//     makeNoise(sound = "Loud Noise") {
//         console.log(sound);
//     }

//     static return10() {
//         return 10
//     }

//     get metaData() {
//         return `Type: ${this.type}\nLegs: ${this.legs}`
//     }
// }

// class Cat extends Animal {
//     constructor(type, legs, tail) {
//         super(type, legs);
//         this.type = type;
//         this.tail = tail;
//     }
// }

// function add(params1,) {
//     const example = {
//         name: 'Tony'
//     }
// }

//+ async

// const url = 'https://www.tutorialspoint.com/http/http_responses.htm';

// async function getSomething() {
//     const response = await fetch(url);
//     const json = await response.json();

//     console.log(json[0]);
// }

// function getTop100Campers() {
//     fetch(url)
//     .then((r) => r.json())
//     .then((json) => {
//         console.log(json[0]);
//     }).catch((error) => {
//         console.log('failed');
//     });
// }

// getSomething();

// const mySet = new Set([1,2,3,2,1]);
// mySet.add(5);
// // mySet.values
// console.log(mySet);

// const posts = [
//   { title: 'Post one', body: 'This is post one'}
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = true;

//             if (!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong');
//             }
//             // callback();
//         }, 2000);
//     });
// }

// getPosts();
// createPost({ title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// Promise.all

// const promise1 = Promise.resolve('Hello World!');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
// setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))

// Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values))

// Async/Await/Fetch
// async function init() {
//     await createPost({title: 'Post three', body: 'This is post three'});
// }

// async function fetchUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json;
//     console.log(data);
// }

// // L1
// console.log('Synchronous 1');

// // L2
// setTimeout(_ => console.log(`Timeout 2`), 0);

// // L3
// Promise.resolve().then(_ => console.log(`Promise 3`));

// // L4
// console.log('Synchronous 4');

// const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json.title))
//     .catch(err => console.error('Error!', err));

// console.log('Sync')


//+ Axios

// const axios = require('axios');

// function getTodos() {
//     axios.get('https://jsonplaceholder.typicode.com/todos?_limits=5')
//     .then(res => console.log(res.data))
//     .catch(err => console.error(err))
// }
// getTodos()

// function addTodo() {
//     axios({
//         method: 'post',
//         url: 'https://jsonplaceholder.typicode.com/todos',
//         data: {
//             title: "New Todo",
//             completed: false
//         }
//     })
//     .then(res => console.log(res))
//     .catch(err => console.error(err));
// }

// addTodo();

// function getdata() {
//     axios.all([
//         axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5'),
//         axios.get('http://jsonplaceholder.typicode.com/posts?_limit=5')
//     ])
//     .then(axios.spread((todos, posts) => console.log(posts)))
//     .catch(err => console.error(err));
// }
// getdata()

// function getData() {
//     const myVar = "yo";
//     console.log(`A${myVar} what`); 
// }

// getData();

// const Person = require('./person');

// import Person from './person';

// const person1 = new Person('Tony', 30)
// person1.greeting();

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>');
})
const PORT = process.envPORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
