// let firstCard=6
// let secondCard=12
// let sum =firstCard +secondCard
// if(sum>21){
//     console.log("Do you want to draw a new card? 😊")
// }else if(sum===21){
//     console.log("wohoo! You've got Blackjaack! 👌 ")
// }//else if(sum>21){
// //     console.log("You'he out of the Game 😒")
// // }
// else{
//     console.log("fuck you")
// }
//  let age =22
//  if(age<=21){
//     console.log("i will fuck you the hard , you are not allowed")
//  }
//  else{
//     console.log("u can fuck other")
//  }
// let age=100
// if(age>100){
//     console.log("you are not eligible")
// }else if(age===100){
//     console.log("You are eligible")
// }else{
//     console.log("Not eligible, you have already gotten one")
// }
let firstCard=10
let secondCard=4
let sum=firstCard+secondCard
let hasBlackjack=false
isAlive=true
let message=""

let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
function startGame(){
    sumEl.textContent="sum: "+ sum
    cardsEl.textContent="Cards: "+ firstCard + " " +secondCard
if (sum<=20){
    message="Do you want to draw a new card? 😊"
}else if(sum===21){
    message="you got BlackJack!"
    hasBlackjack=true
}
else{
    message="You're out of the game!"
    isAlive=false
}
console.log(message)
messageEl.textContent=message
}
function newCard(){
    console.log("Drawing a new card from the deck!")
}
