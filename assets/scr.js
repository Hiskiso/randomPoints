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

function setCustom(x1, x2, y1, y2){
    click({x: x1, x2: x2, y: y1, y2: y2}, true)
}

function click(event, custom=false){

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



let xRand = !custom? Math.floor(Math.random() * window.innerWidth) : event.x2
let yRand = !custom? Math.floor(Math.random() * window.innerHeight) : event.y2

randomGenCircle.style.visibility = "visible"
randomGenCircle.style.left = xRand - 25 + "px"
randomGenCircle.style.top = yRand - 25 + "px"

console.log("y","x");
console.log(yClick, xClick)
console.log(yRand, xRand)

 
let dist = Math.floor(Math.sqrt(Math.pow((xClick-xRand), 2) + Math.pow((yClick-yRand), 2)))

if(dist < 10){
    document.write("Чел.....")
    setTimeout(()=>{window.close()},500)
}

scoreDisp.innerHTML = dist

if (dist>120) {
    userCrircle.style.background = "linear-gradient(108deg, #673ab7, #f44336)"
    randomGenCircle.style.background = "linear-gradient(108deg, #673ab7, #f44336)"
    line.style.background = `rgb(${dist},0,0)`
}
else{
    userCrircle.style.background = "linear-gradient(108deg, #8bc34a, #4caf50)"
    randomGenCircle.style.background = "linear-gradient(108deg, #8bc34a, #4caf50)"
    line.style.background = `rgb(0,${dist},0)`
}



line.style.visibility  = "visible"
line.style.width = dist + "px"
line.style.left = xClick + "px"
line.style.top = yClick + "px"


if(xClick > xRand){
    line.style.top = yRand + "px"
    line.style.left = xRand + "px"

}

line.style.transform = `rotate(${Math.atan( (yClick-yRand) / (xClick-xRand) ) * 180 / Math.PI}deg)`

delay()

}
