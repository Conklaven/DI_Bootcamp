// setTimeout (saleEnd, 2000);
// let banner = document.getElementById("banner");

// function saleEnd(){
//     banner.classList.remove("hide");
// }
let close = document.getElementById("close")
close.addEventListener("click", disapear)
function disapear(){
    banner.classList.add("hide")
};

let seconds = document.getElementById("seconds");
let countItDown = function(){ 
    seconds.textContent = parseFloat (seconds.textContent) -1;
    if (seconds.textContent <= 0){
        clearInterval(counting);
    }
}
let counting = window.setInterval(countItDown, 1000);
