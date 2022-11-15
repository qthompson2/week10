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

function circleCalc (radius) {
    const radiusP = document.querySelector('.radius')
    const resultP = document.querySelector('.result')

    let circleArea = Math.PI * radius ** 2;

    radiusP.textContent = `A circle of radius ${radius}`;
    resultP.textContent = `has an area of ${circleArea.toFixed(2)}`;
    return circleArea;
}

let userInput = prompt();
circleCalc(userInput);