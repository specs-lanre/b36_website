//alert("hello page")

function  Show(){
alert("this is external javascript")
}
//Show()

function  Serv1(){
document.getElementById('title').innerHTML="This is an example of an alert pop up dialogue  box."
val = alert("This is an example of an alert pop up dialogue  box")
document.getElementById('dsplay').innerHTML="alert returned : "+val
}
function  Serv2(){
	document.getElementById('title').innerHTML="This is an example of a confirm  pop up dialogue  box."

val = confirm("This is an example of an confirm pop up dialogue  box.Click ok or cancel")
document.getElementById('dsplay').innerHTML="confrim dialogue box  returned : "+val

}
function  Serv3(){
document.getElementById('title').innerHTML="This is an example of an prompt pop up dialogue  box."
val = prompt("Enter your email")
document.getElementById('dsplay').innerHTML="confrim dialogue box  returned : "+val

}