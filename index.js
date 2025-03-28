//document.getElementById('count-el').innerText = 5

//let firstBatch = 5
//let secondBatch = 7

//let count = firstBatch * secondBatch
//console.log(count)

//let myage = 70
//console.log(myage)

//let myAge = 35
//let humanDogRatio = 7

//let myDogAge = myAge * humanDogRatio
//console.log(myDogAge)

function increment() {
    console.log('The button was clicked')
}

function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

//countdown()

function myLogger() {

}

let lap1 = 34
let lap2 = 33
let lap3 = 36

function logLapTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

//logLapTime()

let countEl = document.getElementById('count-el')

console.log(countEl)

let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
    
}

function save() {
    console.log(count)
}


let welcomeEl = document.getElementById('welcome-el')
let yourName = 'Burn Lai'
let greeting = 'Welcome back '

welcomeEl.innerText = greeting + yourName