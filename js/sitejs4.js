val1=1
val1++
console.log(val1)
val1++
console.log(val1)
val1++
console.log(val1)
val1++
console.log(val1)
val1--
console.log(val1)
val1--
console.log(val1)

val1--
console.log(val1)
val1--
console.log(val1)
//console.log(c)
//document.getElementById('display').innerHTML=c


function  add(){

val1 = document.getElementById("data1").value
val2 = document.getElementById("data2").value
result=parseFloat(val1)+parseFloat(val2)
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