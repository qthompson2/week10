function cls () {
    console.clear()
}

// function greetUser (string) {
//     console.log(`Hello, ${string}.`)
// }

// let greetUser = function (string) {
//     console.log(`Hello, ${string}.`)
// }

// let greetUser = (string, time = 'Day') => {
//     console.log(`Good ${time.toLowerCase()}, ${string}.`);
// }

// let r = prompt('Enter the radius of a circle.')

// alert(`The area of a circle with a radius of ${r} is ${circleCalc(r).toFixed(2)}`)

// function circleCalc (radius) {
//     const radiusP = document.querySelector('.radius')
//     const resultP = document.querySelector('.result')

//     let circleArea = Math.PI * radius ** 2;

//     radiusP.textContent = `A circle of radius ${radius}`;
//     resultP.textContent = `has an area of ${circleArea.toFixed(2)}`;
//     return circleArea;
// }

// let userInput = prompt();
// circleCalc(userInput);
const unorderedList = document.querySelector('.shopping');

function populateList (list) {
    for (let i = 0; i < list.length; i += 1) {
        let listItem = document.createElement('li');
        listItem.textContent = list[i];
        unorderedList.appendChild(listItem);
    }
}

function changeListStyle(list) {
    list.classList.toggle('squareList')
    list.classList.toggle('circleList')
}

let shoppingList = ['Cheese', 'Bread', 'Green Pepper'];
populateList(shoppingList);

changeListStyle(unorderedList);

const listItems = document.querySelectorAll('.shopping li');
for (let i = 0; i < listItems.length; i += 1) {
    if (listItems[i].textContent.toLowerCase().includes('green')) {
        listItems[i].classList.add('green')
    }
}