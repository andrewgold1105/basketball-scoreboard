let btn1 = document.getElementById("home") 

let btnN1 = document.getElementById("guest") 

let quarterTime = document.getElementById("quarter")

let homeFoul = document.getElementById("home-foul")

let guestFoul = document.getElementById("guest-foul")


let count = 0
function add1(){
    count = count + 1
    btn1.innerText = count
}
function add2(){
    count = count + 2
    btn1.innerText = count
}
function add3(){
    count = count + 3
    btn1.innerText = count
}
function homereset(){
    count = 0
    btn1.innerText = count
}

function addGuest1(){
    count = count + 1
    btnN1.innerText = count
}
function addGuest2(){
    count = count + 2
    btnN1.innerText = count
}
function addGuest3(){
    count = count + 3
    btnN1.innerText = count
}
function guestreset(){
    count = 0
    btnN1.innerText = count
}
function nextQuater(){
    count = count + 1
    quarterTime.innerText = count
}
function resetnextQuater(){
    count = 0
    quarterTime.innerText = count
}
function addhomeFoul(){
    count = count + 1
    homeFoul.innerText = count
}
function resethomeFoul(){
    count = 0
    homeFoul.innerText = count
}
function addguestFoul(){
    count = count + 1
    guestFoul.innerText = count
}
function resetguestFoul(){
    count = 0
    guestFoul.innerText = count
}