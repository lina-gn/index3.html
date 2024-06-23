var plusBTns= Array.from(document.querySelectorAll('.fa-plus-circle'))
var minusBTns= Array.from(document.querySelectorAll('.fa-minus-circle'))
var deleteBTns= Array.from(document.querySelectorAll('.fa-trash-alt'))
var favs= Array.from(document.querySelectorAll('.fa-heart'))
var cards= Array.from(document.querySelectorAll('.card'))

for (let plusBTn of plusBTns ) {
    plusBTn.addEventListener("click" ,function(){
        plusBTn.nextElementSibling.innerHTML++
        total()
    })
}
for (let minusBTn of minusBTns ) {
    minusBTn.addEventListener("click" ,function(){
        minusBTn.previousElementSibling.innerHTML > 0 ?
        minusBTn.previousElementSibling.innerHTML-- : null , total()
    })
}
for (let i in deleteBTns) {
    deleteBTns[i].addEventListener("click", function(){
        cards[i].remove()
        total()
    })
}
for (let fav of favs) {
    fav.addEventListener("click", function(){
        if (fav.style.color=="black"){
            fav.style.color="red"  
        } else {
            fav.style.color="black"  
        }
    })
}
function total() {
    let s=0
    let qte= Array.from(document.querySelectorAll(".qute"));
    let price= Array.from(document.querySelectorAll(".unitt-price"));
    for (let i=0 ; i<price.length ; i++)
        {
            s=s+price[i].innerHTML*qte[i].innerHTML;
        }
    document.getElementById("total-price").innerHTML=s

}