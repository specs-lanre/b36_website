order1 = {
	'name':'Plumbing',
'location':'Lagos',
'client':'adbc company',
'detail':function (){return this.name+" "+this.location}
}

order2 = {
	'name':'Electrical',
'location':'Abuja',
'client':'xyz company',
'detail':function (){return this.name+" "+this.location}
}

order2['phone']='12345678'


console.log(order1['name'])
console.log(order1['location'])
data="<li>"+order1['name']+" </li><li>"+order1['location']+"</li><li>"+order1['client']+"</li>"
//document.getElementById("display").innerHTML=data
document.getElementById("display").innerHTML=order1.detail()
console.log(order2)

for(prop in order2 ){
console.log(prop)	
}


for(prop in order2 ){
console.log(order2[prop])	
}

