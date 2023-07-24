// let homeScoreEl = document.getElementById('homescore')
// let guestScore = document.getElementById('guestscore')

let homeScoreEl = document.getElementById('homescore')
let guestScoreEl = document.getElementById('guestscore')
let resetBtn = document.getElementById('resetbutton')
let homeCount = 0
let guestCount = 0

// for home section

function addBy1() {
    homeCount = homeCount + 1 
    homeScoreEl.innerHTML =  homeCount
}


function addBy2() {
    homeCount = homeCount + 2
    homeScoreEl.innerHTML =  homeCount
}



function addBy3() {
    homeCount = homeCount + 3
    homeScoreEl.innerHTML =  homeCount
}

// for reset button 


function resetbutton() {
    
    homeCount = 0
    guestCount = 0
    homeScoreEl.textContent = homeCount;
    guestScoreEl.textContent = guestCount;
    
}


//for guest section 

function incrementBy1() {
    guestCount = guestCount + 1 
    guestScoreEl.innerHTML =  guestCount
}




function incrementBy2() {
    guestCount = guestCount + 2
 guestScoreEl.innerHTML =  guestCount
}



function incrementBy3() {
    guestCount = guestCount + 3
   guestScoreEl.innerHTML =  guestCount
}

// leading score //

