//document.getElementById("count-el").innerText=5
// let count=0
// console.log(count)
// function increment(){
//     console.log("button was clicked")
// }
let saveEL=document.getElementById("save-el")
let count=0
let countEl=document.getElementById("count-el")
//console.log(countEl)
function increment(){
    count=count+1
    countEl.textContent=count
   //console.log(count)
}
function save(){
   
    let coutnStr=count+" - "
    saveEL.textContent+=coutnStr
    //console.log(count)
    countEl.textContent=0
    count=0
}