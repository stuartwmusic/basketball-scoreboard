let add = document.getElementById("home-score")
let addG = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0
 
function add1Home() {
    homeScore +=1
    add.textContent = homeScore
}

function add2Home() {
    homeScore +=2
    add.textContent = homeScore   
}

function add3Home() {
    homeScore +=3
    add.textContent = homeScore  
}

function add1Guest() {
    guestScore +=1
    addG.textContent = guestScore   
}

function add2Guest() {
    guestScore +=2
    addG.textContent = guestScore   
}

function add3Guest() {
    guestScore +=3
    addG.textContent = guestScore   
}