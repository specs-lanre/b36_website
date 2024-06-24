
a=44
b=50
c=a>b
console.log(c)
c=a<b
console.log(c)
c=a==b
console.log(c)
c=(a===b)
console.log(c)
c=(a>=b)
console.log(c)
c=a<=b
console.log(c)


c=(a>=b) && (a<=b)
console.log(c)

c=(a>=b) || (a<=b)
console.log(c)

console.log(!c)

g=120
console.log(g,g+=5)
console.log(g)
console.log(g,g-=5)
console.log(g)
console.log(g,g*=5)
console.log(g)

a="yes"
b="no !"

f=45
h=67

if(f>h){
	document.getElementById('display').innerHTML=a
}
else{
	document.getElementById('display').innerHTML=b
}

val = f>h? a: b
alert(val)














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