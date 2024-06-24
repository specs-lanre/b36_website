//variables in JS

var val1=100
console.log(val1)

var val1=900
console.log(val1)

val1=800
console.log(val1)


let  val2=100
console.log(val2)

{
let  val2=900
console.log(val2)
}
val2=450


const  val3=100
console.log(val2)

//val3=700





function  greater(){

val1 = document.getElementById("data1").value
val2 = document.getElementById("data2").value
result=parseFloat(val1)>parseFloat(val2)
console.log(result)
document.getElementById('display').innerHTML=result
}
function  minus(){
val1 = document.getElementById("data1").value
val2 = document.getElementById("data2").value
result=parseFloat(val1)-parseFloat(val2)
console.log(result)
document.getElementById('display').innerHTML=result
}



function  divide(){
val1 = document.getElementById("data1").value
val2 = document.getElementById("data2").value
result=parseFloat(val1)/parseFloat(val2)
console.log(result)
document.getElementById('display').innerHTML=result
}


function  floorDiv(){
val1 = document.getElementById("data1").value
val2 = document.getElementById("data2").value
result=parseFloat(val1)%parseFloat(val2)
console.log(result)
document.getElementById('display').innerHTML=result
}




function  Inc(){
val1 = document.getElementById("data1").value
val1++
console.log(val1)
document.getElementById('display').innerHTML=val1
}