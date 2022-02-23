let hasLock = false

function Initial(){
document.getElementById("main").style.display = "none"
document.getElementById("field").style.display = "flex"
let body = document.body

body.onclick = click

}


function delay(){
let timertext = document.getElementById("timer")
const stepTime = 100
const delay = 700
let innerTime = delay - 100
hasLock = true
let interv = setInterval(()=>{timertext.innerHTML = innerTime; innerTime -= stepTime}, stepTime)
setTimeout(()=>{hasLock = false; clearInterval(interv)}, delay)


}

function click(event){

    if(hasLock){
        return
    }

let userCrircle = document.getElementById("userCrircle")
let randomGenCircle = document.getElementById("randomGenCircle")
let scoreDisp = document.getElementById("otpt")
let line = document.getElementById("line")

let xClick = event.x
let yClick = event.y



userCrircle.style.visibility  = "visible"
userCrircle.style.left = xClick - 25 + "px"
userCrircle.style.top = yClick - 25 + "px"


let xRand = Math.floor(Math.random() * window.innerHeight)
let yRand = Math.floor(Math.random() * window.innerWidth)

randomGenCircle.style.visibility = "visible"
randomGenCircle.style.left = xRand - 25 + "px"
randomGenCircle.style.top = yRand - 25 + "px"

console.log("y","x");
console.log(yClick, xClick)
console.log(yRand, xRand)

 
let dist = Math.floor(Math.sqrt(Math.pow((xClick-xRand), 2) + Math.pow((yClick-yRand), 2)))

scoreDisp.innerHTML = dist




line.style.visibility  = "visible"
line.style.width = dist + "px"
line.style.left = xClick + "px"
line.style.top = yClick + "px"
line.style.background = `rgb(0,${dist},0)`

if(xClick > xRand){
    line.style.top = yRand + "px"
    line.style.left = xRand + "px"

}

line.style.transform = `rotate(${Math.atan( (yClick-yRand) / (xClick-xRand) ) * 180 / Math.PI}deg)`

delay()

}