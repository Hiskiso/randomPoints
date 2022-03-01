let hasLock = false
let devMode = false

function Initial() {
    document.getElementById("main").style.display = "none"
    document.getElementById("field").style.display = "flex"
    document.getElementById("userCrircle").style.visibility = "visible"
    document.getElementById("randomGenCircle").style.visibility = "visible"

    let body = document.body

    body.addEventListener("click", click)
    body.addEventListener("keydown", (ev)=>{if (ev.key == "D") devMode = !devMode})
}


function delay() {

    let timertext = document.getElementById("timer")
    const stepTime = 100
    const delay = 700
    let innerTime = delay - 100
    hasLock = true
    let interv = setInterval(() => { timertext.innerHTML = innerTime; innerTime -= stepTime }, stepTime)
    setTimeout(() => { hasLock = false; clearInterval(interv) }, delay)


}

function setCustom(x1, x2, y1, y2) {
    click({ x: x1, x2: x2, y: y1, y2: y2 }, true)
}

function click(event, custom = false) {

    if (hasLock) {
        return
    }

    let userCrircle = document.getElementById("userCrircle")
    let randomGenCircle = document.getElementById("randomGenCircle")
    let scoreDisp = document.getElementById("otpt")
    let line = document.getElementById("line")

    let xClick = event.x
    let yClick = event.y

    userCrircle.style.left = xClick - 25 + "px"
    userCrircle.style.top = yClick - 25 + "px"



    let xRand = !custom ? Math.floor(Math.random() * window.innerWidth) : event.x2
    let yRand = !custom ? Math.floor(Math.random() * window.innerHeight) : event.y2

    randomGenCircle.style.left = xRand - 25 + "px"
    randomGenCircle.style.top = yRand - 25 + "px"

    devMode && console.log("y", "x");
    devMode && console.log(yClick, xClick)
    devMode && console.log(yRand, xRand)


    let dist = Math.floor(Math.sqrt(Math.pow((xClick - xRand), 2) + Math.pow((yClick - yRand), 2)))
    let maxDist = Math.floor(Math.sqrt(Math.pow((0 - window.innerHeight), 2) + Math.pow((0 - window.innerWidth), 2)))


    if (dist < 10) {
        setTimeout(() => {
            document.getElementById("main").style.display = "block"
            document.getElementById("userCrircle").style.visibility = "hidden"
            document.getElementById("randomGenCircle").style.visibility = "hidden"
            document.querySelector(".main__prewiew").textContent = "ЧЕЛЛ....."
            document.querySelector(".main__disc").innerHTML = ""
            document.querySelector(".main__btn").remove()
            document.body.removeEventListener("click", click)
            setTimeout(() => { window.close() }, 900)
        }, 900)
    }

    scoreDisp.innerHTML = dist

    if (dist > 120) {
        userCrircle.style.background = `rgb(${(dist - maxDist) / (0 - maxDist) * (255 - 0) + 0},${(dist - maxDist) / (0 - maxDist) * (50 - 0) + 0},${(dist - maxDist) / (0 - maxDist) * (10 - 0) + 0})`
        randomGenCircle.style.background = `rgb(${(dist - maxDist) / (0 - maxDist) * (255 - 0) + 0},${(dist - maxDist) / (0 - maxDist) * (50 - 0) + 0},${(dist - maxDist) / (0 - maxDist) * (10 - 0) + 0})`
        line.style.background = `rgb(${(dist - maxDist) / (0 - maxDist) * (255 - 0) + 0},0,0)`
    }
    else {
        userCrircle.style.background = `rgb(${(dist - maxDist) / (0 - maxDist) * (50 - 0) + 0},${(dist - maxDist) / (0 - maxDist) * (255 - 0) + 0},${(dist - maxDist) / (0 - maxDist) * (10 - 0) + 0})`
        randomGenCircle.style.background = `rgb(${(dist - maxDist) / (0 - maxDist) * (50 - 0) + 0},${(dist - maxDist) / (0 - maxDist) * (255 - 0) + 0},${(dist - maxDist) / (0 - maxDist) * (10 - 0) + 0})`
        line.style.background = `rgb(0,${(dist - maxDist) / (0 - maxDist) * (255 - 0) + 0},0)`
    }

    line.style.visibility = "visible"
    line.style.width = dist + "px"
    line.style.left = xClick + "px"
    line.style.top = yClick + "px"


    if (xClick > xRand) {
        line.style.left = xRand + "px"
        line.style.top = yRand + "px"
    }

    line.style.transform = `rotate(${Math.atan((yClick - yRand) / (xClick - xRand)) * 180 / Math.PI}deg)`

    delay()

}