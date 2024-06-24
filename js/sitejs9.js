ar1 = ['Plumbing','Lagos','adbc company']
ar2=[120,67,89,900,34]
ar3=[4,7,89,900,34]
/*
console.log(ar1[0])
console.log(ar1[1])
console.log(ar1[2])
*/
//console.log(ar1[3])
//console.log( ar1.concat(ar2))

function ask(x){
	return x>10
}
//console.log(ask(30))
//console.log(ask(8))


//console.log(ar2.every(ask))
//console.log(ar3.every(ask))

//console.log(ar2.find(ask))

//console.log(ar2.toString())

function add(x,y){
	result=x+y
	console.log(result)
}
//add(23,45)


//arrow function  or nameless functions
//define and arrow function
gama = (x,y)=>x+y
//call the arrow function
//console.log(gama(11,56))


//while loops
x=0
while(x<10){
	//uncomment to see the result
	//console.log(x)
	x=x+1
}
console.log(ar3.length)
console.log(ar2.length)


y=ar3.length
x=0
while(x<y){
	//uncomment to see the result
	console.log(x,ar3[x])
	x=x+1
}

for(x=0;x<y;x++){
	console.log(x,ar3[x])
	
}