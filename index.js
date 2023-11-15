// <button id="add1-btn" onclick="add1Home()"></button>
        //    <div class="home-score">0</div>





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


// CAN I USE ANY OF this
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
// }

// This is what I had before which had some partial functionality:

// let addOne = document.getElementById("home-score")
// let homeScore = 0
 
// function add1Home() {
//     addOne.textContent +=1
// 
// }





