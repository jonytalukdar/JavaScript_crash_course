// var , let , const

// let age = 21;
// age = 23;
// console.log(age);

// const name = "joney";
// name = 'roneey'   const is not changeable
// console.log(name);

// data types = strings , number , boolean , null , undefined

// const name = "joney";
// const age = 21;
// const rating = 4.5;
// const isCool = true;
// const a = null ;
// const b = undefined;
// const c = '';

// concatenation

// const name = 'joney'
// const age = 21

// console.log('my name is ' + name +  ' and i am ' + age + ' years old')

// template strings

// const details =  `My name is ${name} and I am ${age} years old`
// console.log(details)

// strings method

// const a = 'hello world !'
// const somethings = 'technology , mobile , desktop, it , codeing, somethingelse'

// console.log(a.length)
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log(a.substring(0 , 5))
// console.log(a.substring(0 , 5).toUpperCase())
// console.log(a.split(''))
// console.log(somethings.split(','))

// array in javascript
// array is variables that hold multiple values

// array literal

// const fruits = ['mango' , 'apple' , 'banana' , 'orange' , 'litchi']

// fruits[5] = 'grapes'
// console.log(fruits)
// console.log(fruits[2])

// const various = ['mango' , 'apple' , 12 , 'banana' , true]
// console.log(various)

// // Array constructor

// const numbers = new Array(12,23,45,67)
// console.log(numbers)

// arrays method

// const arr = ['one' , 2 , 'three' , 4 , 'five' , 6 , 'seven' , 8 , 'nine']

// arr.push(10)
// arr.pop()
// arr.unshift('zero')
// arr.shift()
// arr.splice(2 , 1 , 3,3,3,3,3,3)

// console.log(arr.indexOf('seven'))
// console.log(Array.isArray(arr))
// console.log(arr)

// object literal

// const person = {
//     firstName : 'joney',
//     lastName : 'talukdar',
//     age : 21,
//     hobbies : ['coding' , 'music' , 'cricket' , 'journey'],
//     address : {
//         street: '50 main street',
//         city : 'Boston',
//         state : 'MA'
//     }
// }

// person.email = 'jonytalukdar@gmail.com'

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.hobbies[2])
// console.log(person.address.state)
// console.log(person)

// array object

// const todos = [
//     {
//         id: 1,
//         text : 'Take out complete',
//         isCompleted : true
//     },

//     {
//         id: 2,
//         text : 'Meeting with boss',
//         isCompleted : true
//     },

//     {
//         id: 3,
//         text : 'Dentist appt',
//         isCompleted : false
//     }
// ]

// console.log(todos[0])
// console.log(todos[1].text)
// console.log(todos[2]['text'])

// const todos = [
//     {
//         id: 1,
//         text : 'Take out complete',
//         isCompleted : true
//     },

//     {
//         id: 2,
//         text : 'Meeting with boss',
//         isCompleted : true
//     },

//     {
//         id: 3,
//         text : 'Dentist appt',
//         isCompleted : false
//     }
// ]

// const todosJson = JSON.stringify(todos)
// console.log(todosJson)

// loops in javascript

// for loop

// for ( let i = 0 ; i < 10 ; i++) {
//     console.log(i + (' my name is joney'))
// }

// while loop

// while(true){
//     let rand = Math.floor(Math.random() * 12 + 1)
//     if(rand == 8){
//         console.log('winner winner chicken dinner')
//         break
//     }else{
//         console.log('you have entered ' + rand)
//     }
// }

// const todos = [
//     {
//         id: 1,
//         text : 'Take out complete',
//         isCompleted : true
//     },

//     {
//         id: 2,
//         text : 'Meeting with boss',
//         isCompleted : true
//     },

//     {
//         id: 3,
//         text : 'Dentist appt',
//         isCompleted : false
//     }
// ]

// for ( let todo of todos){
//     console.log(todo.id)
// }

// forEach , map , filter

// let todos = [
//     {
//         id : 1,
//         test : 'this is first day todos',
//         isCompleted : false
//     },
//       {
//         id : 2,
//         test : 'this is second day todos',
//         isCompleted : true
//     },
//       {
//         id : 3,
//         test : 'this is third day todos',
//         isCompleted : false
//     },
// ]

// todos.forEach(function(todo){
//     console.log(todo.test);
// })

// const todoTest = todos.map(function(todo){
//     return todo.test
// })
// console.log(todoTest);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted ===true;
// })
// console.log(todoCompleted);



// condition in javascript

const n = 12;
