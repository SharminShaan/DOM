// GET ELEMENT BY ID
// GET ELEMENT BY tagname


// let itemUL = document.getElementById('items');
// let items = itemUL.getElementsByClassName('item');
// for(let i=0; i<items.length; i++) {
//     items[i].style.color = 'red';
// }

// let items = document.getElementsByTagName('h2');

// console.log(items);

//Query selector

// let header = document.querySelector('#new-task');
// console.log(header);


// let lastItem = document.querySelector('.item:last-child');
// lastItem.style.color = 'red';

// let lastItems = document.querySelectorAll('.item:last-child');

// console.log(lastItems);

// for(let element of lastItems) {
//     element.style.color = 'red';
// }
// lastItem.style.color = 'red';

// let lastItem = document.querySelector('.item:nth-child(2)');
// lastItem.style.color = 'red';

//parent/child relation

// const parent = document.querySelector('#items');
// const children = parent.children;

// console.log(children);

// const grandparent = document.querySelector('.todo-list');
// const parent = grandparent.children;
// const children = parent[1].children;

// console.log(children);


// const grandparent = document.querySelector('.todo-list');
// const children = grandparent.querySelectorAll('.item');

// console.log(children);


// const children = document.querySelector('.item');
// const parent = children.parentElement;
// console.log(parent);


// const children = document.querySelector('.item');
// const grandparent = children.closest('.todo-list');
// console.log(grandparent);


// const childrenOne = document.querySelector('.item');
// const childrenTwo = childrenOne.nextElementSibling;

// console.log(childrenTwo);

// const childrenTwo = document.querySelector('.item').nextElementSibling;
// const childrenOne = childrenTwo.previousElementSibling;

// console.log(childrenOne);


//creating an element


// const divElement = document.createElement('div');
// console.dir(divElement);

// divElement.className = 'red';

// divElement.setAttribute('id', 'red');
// divElement.setAttribute('title', 'Red Div');

// const container = document.querySelector('.todo-list');
// const h2Element = container.querySelector('h2');
// container.insertBefore(divElement, h2Element);

// container.appendChild(divElement);

//event listeners

// const headerElement = document.querySelector('#header');
// headerElement.addEventListener('click', (event) => {
//     console.log(event);
// })
// headerElement.addEventListener('dblclick', (event) => {
//     console.log(event);
// })
// headerElement.addEventListener('mousedown', (event) => {
//     console.log(event);
// })
// headerElement.addEventListener('mouseup', (event) => {
//     console.log(event);
// })

// mouseenter, mouseleave, mouseover, mouseout,

// const inputElement = document.querySelector('input[type="text"]');
// inputElement.addEventListener('keydown', (event) => {
//     console.log(event);
// })

// keyup, keydown, keypress, focus, blur, cut, paste, input, 

// const formElement = document.querySelector('form');
// const inputElement = document.querySelector('input[type="text"]');

// inputElement.addEventListener('keydown', (event) => {console.log(event.target.value);
// });


/*
title: To Do Application using vanilla JS DOM
Description: This JS file has all the JS functions necessary to control the to do application
author: sharmin
Date: 19-10-2024
*/


// select elements & assign them to variables

let newTask = document.querySelector('#task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

//functions
let createTask = function(task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    // bind the new list item to the incomplete list

}
let completeTask = function() {
    
}

let bindIncompleteItems = function(taskItem, checkBox) {
    let checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxclick;
}

