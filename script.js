// var a =  [1,2,3,4,5,6,7,8,9];

// a.forEach(function(val){
//     console.log(val-2);
// })

// console.log(a);

// var obj = {
//     name: "Vineet",
//     age: 21,
//     city: "Lucknow"
// };

// for ( var key in obj)
// {
//     console.log(key, obj[key]);
// }



// setTimeout(function()  
// {   // callback
//     console.log("after 2 seconds")
// }, 2000)

// function abc(a){
//     a();      //first call function
// }

// abc(function(){
//     console.log("hello")
// })


// DOM
// 4 Piller of DOM
// 1.selection of an Element
// 2.changing in HTML
// 3.changing in css 
// 4.event listener 

// var a = document.querySelector("h1");
// console.log(a);
// a.innerHTML = 'hewllo'
// a.style.color="red"
// a.style.backgroundColor="black"

// console.log(document.querySelector("h2"));

// console.log(document.querySelector("p"));


// var a = document.querySelector("h1");
// a.innerHTML = "lets do it";

// var a = document.querySelector("h1");
// a.style.color = "red";
// a.style.backgroundColor = "yellow"
// a.style.fontSize = "50px"


// var a = document.querySelector("h1");

// a.addEventListener("click", function(){
//     a.innerHTML = "How are you buddy!!";
//     a.style.color = "green";
//     a.style.backgroundColor = "#000";

//     console.log("How are you!")
// })


// var b = document.querySelector("p")

// console.log(b);
// var a = document.querySelector("div");

// var btn = document.querySelector("button");

// var flag = 0;

// btn.addEventListener("click", function () {
//     if (flag == 0) {
//         a.style.backgroundColor = "yellow";
//         flag = 1;
//         btn.innerHTML = "OFF";
//     }

//     else {
//         a.style.backgroundColor = "transparent";
//         flag = 0;
//         btn.innerHTML = "ON";
//     }
// })
//-----------------------------------------------------------------------------------------------------
// sync means one by one
// async all work will start at once, got the ans. one by one.
// we use async, in which we don't know the time to complete.

// asyn code 
// setTimeout(function(){

// }, timeout)

// javascript is not a async (not a multithread)
// async code always move to main stack (when main stack in empty then we will check the side stack)
// event loop :->  
// javacript is a singleThread
// async :-> 1. fetch
// 2.axios
// 3.promises
// 4.setTimeout
// 5.setInterval 
// 6.XMLHttpRequest

// var ans = new Promise((res, rej) => {
//     var n = Math.floor(Math.random() * 10);

//     if (n < 5) {
//         return res();
//     }
//     else {
//         return rej();
//     }

// })

// ans.then(function () {
//     console.log("below");
// })
//     .catch(function () {
//         console.log("above");
//     })


// var work = new Promise(function(res, rej) {
//     return res("Chalo maggi banate hai");
// })

// var p1 = work.then(function(maggi){
//     console.log(maggi);

//     return new Promise(function(res, rej) {
//         return res("take a pan boil water accordingly");
//     })
// })

// var p2 = p1.then(function(maggi){
//     console.log(maggi);

//     return new Promise(function(res, rej){
//         return res ("break the maggi and then put in boiled water");
//     })
// })

// var p3 = p2.then(function(maggi){
//     console.log(maggi);

//     return new Promise(function(res, rej){
//         return res ("add maggi masala into the maggai");
//     })
// })

// var p4 = p3.then(function(maggi){
//     console.log(maggi);

//     return new Promise(function(res, rej){
//         return res("boil the maggai with maggai masala");
//     })
// })

// var p5 = p4.then(function(maggi){
//     console.log(maggi);

//     return new Promise(function(res, rej){
//         return res("take out from the stove and enjoy your meal");
//     })
// })

// p5.then(function(maggi){
//     console.log(maggi);
// })

// let text ="djfhjdbhfjhjfhfkhga";
// console.log(text.length);

// let text = "Apple, Banana, Kiwi";
// console.log(text.slice(-12, -6));
// console.log(text.replace("Banana", "Samosa" ));
// console.log(text)
// console.log(text.replace("Apple", "Spring Roll"))


//-----------------------------------------------------------------------------------------
// "use strict";  //used for avoid mistake
// console.log("hello world");

// const person = {
//     name: "vineet",
//     age:22,
//     graduation: "BE in CSE",
//     hobbies: ["reading", "playing", "enjoyig coffee"]
// }
// console.log(person.hobbies);


// const array1 = [1,2,3,4,5];
// const array2 = [8,9,10];

// const newArray = [...array1, ...array2];
// console.log(newArray);

// const array = [..."and"];
// console.log(array)

// objects inside of array

// const userInformation = [
//     {userId : 1, firstName : "Vineet", Age : 20},
//     {userId : 2, firstName : "Radhey", Age : 23},
//     {userId : 3, firstName : "Satyam", Age : 24}
// ]

// for(let users of userInformation)
// {
//     console.log(users)
// }

// const newArray = [...userInformation];
// console.log(newArray)

// console.log(userInformation);

// function sumTwoNumber(number1, number2)
// {
//     return number1+number2
// }

// console.log(sumTwoNumber(6,6));

// function findTarget(arr, target){

//     for(let i=0; i<=arr.length; i++)
//     {
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// const myArr = [8,4,9,10,1];

// console.log(findTarget(myArr, 10));

// const person = {
//      firstName : "Vineet Prajapati",
//      Gender : "Male"
// }



// const personDetails = (obj) => {
//     console.log(obj.firstName);
//     console.log(obj.Gender);
// }

// personDetails(person);

// const myFun = () => {
//     return function hello(){
//         return "Hello"
//     }
//     return hello
// }


// const ans = myFun();
// console.log(ans())

// const arr = [4,3,5,5,3];

// const myArr = (number, index) => {
//      console.log(`index is ${index} and number is ${number}`);
// }

// for(let i=0; i<arr.length; i++){
//    myArr(arr[i], i)
// }

// arr.forEach(myArr)


// const numbers = [4,5,4,6,3,6,9];

// const squareNumber =  (number) => {
//     return number*number
// }

// console.log(numbers.map(squareNumber))

// const userCart = [
//     {prductID : 1, productName : "Laptop", productPrice : 60000},
//     {prductID : 2, productName : "Tab", productPrice : 45000},
//     {prductID : 3, productName : "Mobile", productPrice : 80000},
//     {prductID : 4, productName : "Headsheat", productPrice : 25000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentPrice) => {
//     return totalPrice + currentPrice.productPrice
// }, 0 )

// console.log(totalAmount)

// const myArray = ["tiger", "cat", "buffalo", "dog"];

// const isLength3 = (string) => {
//     return string.length === 3;
// }

// const ans = myArray.find((string) => string.length === 3);
// console.log(ans);

// const users = [
//     {userID : 1, userName : "Abhishek"},
//     {userID : 2, userName : "Abhe"},
//     {userID : 3, userName : "Ram"},
//     {userID : 4, userName : "Shayam"},
//     {userID : 5, userName : "Lucky"}
// ]

// console.log(users.find((user) => user.userID === 4))

// const numbers = [854,678,29,46,34];

// const sortArr = (a,b) => a-b;
// console.log(numbers.sort(sortArr));

// const numbers = [1,29,5,7,25];
// console.log(numbers.every((number) => number % 2 !== 0))


// const userCart = [
//     {userId:1, userProduct:"Mackbook", price:17500},
//     {userId:2, userProduct:"iphone", price:8000},
//     {userId:3, userProduct:"Apple Watch", price:90000},
//     {userId:4, userProduct:"ipad", price:6000},
//     {userId:5, userProduct:"iMac", price:200000}
// ]

// console.log(userCart.every((item) => item.price<100000))
// console.log(userCart.some((anyItem) => anyItem.price >= 100000 ))

// const array = new Array(10).fill(0);
// console.log(array)

// const array = [3,6,7,1,0,8]

// console.log(array.fill(29, 1, 5))


// const array = ["item1", "item2", "item3", "item4", "item5"];
// const newArray = array.splice(5, 0, "item6");
// console.log(newArray)
// console.log(array); 

// const user1 = {
//     firstName : "Vineet",
//     age : 21,
//     about : function(a,b){
//         console.log(this.firstName, this.age, a, b);
//     } 
// }

// const user2 = {
//     firstName : "Abhe",
//     age : 29
// }

// user1.about.call(user2, "hobby");

// const userMethod = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },

//     is18 : function(){
//         return this.age>=18;
//     }
// }

// function userInfo(firstName, lastName, age, email){

//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age,
//     this.email = email

// }

// userInfo.prototype.about = function() {
//     return `${this.firstName} is ${this.age} years old.`;  
// }
// const user1 = new userInfo("Vineet", "Prajapati", 17, "vineetprajapti@gmail.com")
// console.log(user1);
// console.log(user1.about())
// console.log(user1.is18())


// class userInfo{
//     constructor(firstName, lastName, age, email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.email = email;
//     }

//     about(){
//         return `${this.firstName} is ${this.age} years old.`
//     }

//     is18(){
//         return this.age>=18;
//     }
// }

// const user1 = new userInfo("Vineet", "Prajapati", 20, "vineetprajapti2203@gmail.com")
// console.log(user1)
// console.log(user1.about())
// console.log(user1.is18())


// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     info(){
//         return `${this.name} is a loyal animal`;
//     }

// }

// class wildAnimal extends Animal{
//     constructor(name, age, speed){
//         super(name, age)
//         this.speed = speed;
//     }
// }

// const animal1 = new Animal("dog", 2)
// console.log(animal1);

// const animal2 = new wildAnimal("tiger", 5, 110)
// console.log(animal2);


// const hello = (x) =>
// {
//     const a = "varA";
//     const b = "VarB";

//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// console.log(ans());


// const squareNumber = function(power){
//     return function(number){
//         return number ** power
//     }
// }

// const square = squareNumber(2);
// const ans = square(4);
// console.log(ans);

// function func(){
//     let counter = 0
//     return function(){
//         if(counter<1){
//             console.log("Hi! Buddy")
//             counter++;
//         }
//         else{
//             console.log("I'm already called Buddy!")
//         }
//     }
// }

// const myFunc = func();
// myFunc()
// myFunc()
// myFunc()
// ----------------------------------------------
// DOM

// const mainheading = document.getElementById("main-heading");
// const header = document.querySelector(".header");
// const nav = document.querySelectorAll(".nav-list")
// console.log(nav)

// const mainheading = document.getElementById("main-heading")
// const newText = mainheading.textContent = "There is something else, how are you buddy! lets chill, enjoy your life as you want do not fear with anyone"
// console.log(newText)

// const mainHeading = document.querySelector("#main-heading");
// mainHeading.style.color = "blue";
// mainHeading.style.border = "5px solid black"

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"))
// console.log(link.setAttribute("href", "https://google.com"))


// const navItem = document.getElementsByClassName("nav-item")
// console.log(navItem[2])

// const navItem = document.querySelectorAll(".nav-item")
// console.log(navItem[0])

// const navItems = document.getElementsByTagName("a");
// console.log(navItems)

// const navItems = document.querySelectorAll("a")
// console.log(navItems)

// for(let i=0; i<navItems.length; i++){

//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
// }

// for(let navItem of navItems){
//     console.log(navItem);
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
// }

// for(let i=0; i<navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
// }

// for (let navItem of navItems){
//      navItem.style.backgroundColor = "#fff";
//      navItem.style.color = "green";
// }


// const sectionTodo = document.querySelector(".section-todo");
// sectionTodo.classList.add("code")
// sectionTodo.classList.remove("code")

// const newList = document.querySelector(".form-todo")
// const li = document.createElement("li")
// li.textContent = "New to do";
// newList.append(li)
// newList.prepend(li)


// const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click", function(){
//     console.log("you clicked me")
//     console.log(this)
// })


// const button = document.querySelectorAll("button");

// for(let btn of button){
//     btn.addEventListener("click", function(){

//         console.log(this.textContent)

//     })
// }


// const allButton = document.querySelectorAll("button")
// console.log(allButton.length)

// allButton.forEach( (btn) => {
//     btn.addEventListener("click", (e) => {
//         e.target.style.backgroundColor = "yellow"
//         e.target.style.color = "green"
//     })

// })

const formTodo = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type = 'text']")
const todoList = document.querySelector(".todo-list")

formTodo.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodotext = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span class="text">${newTodotext}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
})

todoList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("done")){
        const liSnpan = e.target.parentNode.previousElementSibling;
        liSnpan.style.textDecoration = "line-through";
    }
    else if(e.target.classList.contains("remove")){
        const targetedLi =  e.target.parentNode.parentNode;
        targetedLi.remove();
    }
})
