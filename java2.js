var tal1;
var tal2;
var tal3;

// Alle opgaver før 1,5 c.

function konverter () {
	tal1= parseFloat(document.test.tal1.value);
	tal2= parseFloat(document.test.tal2.value);
	tal3= parseFloat(document.test.tal3.value);
}

function sum() {
	konverter();
	var resultat =tal1 + tal2;
	document.test.kommentar.value=resultat;
}

function sum1() {
	konverter();
	var resultat =tal1 - tal2;
	document.test.kommentar.value=resultat;
}

function sum2() {
	konverter();
	var resultat = tal1 * tal2;
	document.test.kommentar.value=resultat;
}

function sum3 () {
	konverter();
	var resultat =tal1 / tal2;
	document.test.kommentar.value=resultat;
}

// Opgave 1,5 c 

var b; 
var h;
var l;
function konverter2 () {
	b= parseFloat(document.test.b.value);
	l= parseFloat(document.test.l.value);
	h= parseFloat(document.test.h.value);
}

function sum4() {
	konverter2();
	var resultat = (2*b*h) + (2*l*b) + (2*l*h);
	document.test.kommentar.value=resultat;
}

function sum5() {
	konverter2();
	var resultat= l * b * h;
	document.test.kommentar2.value=resultat;
} 

//Opgave 2,1

function hvem() {
	name=document.test.name.value

	if(name=="Simon") {
		document.getElementById("hey").innerHTML="Worst Squad leader EU";
	}
	else {
		document.getElementById("hey").innerHTML="ehm... fisk";
	}
}

//Opgave 2,2

var tal;

function konverter3 () {
	tal = parseFloat(document.test.tal.value);
}

function vaerdi () {
	
	konverter3();
	
	name=document.test.tal.value 
	
	if(tal>20) {
		document.getElementById("fisk").innerHTML="Wow et stort tal!";
	}
	else {
		document.getElementById("fisk").innerHTML="Det er ikke så stort";
	}
}

//Opgave 2,3

var x;
var y;

function random () {
	x = Math.floor((Math.random() * 10) + 1);
	y = Math.floor((Math.random() * 10) + 1);	
}

function plus () {
	x + y 
}

//Opgave 3,1

function taelop () {
	var i=0;
	while (i<4) {
		document.getElementById("ud").innerHTML += i+"<br/>";
		i++;
	}
}

//Opgave 3,2

function tabel() {
	//document.getElementById("ud").innerHTML = "<table>";
	var f=3;
	var i=0;
	var m=2;
	
	while (i<=10) {
		m = f * i;
		//document.getElementById("ud").innerHTML +="<tr><td>"+m+"</td></tr>";
		document.getElementById("ud").innerHTML += m+"<br/>";
		i = i + 1;
	}
    //document.getElementById("ud").innerHTML +="</table>";
}

//Opgave 3,4

function taelop2 () {
	var f=3;
	var i=0;
	var m=2;
	
	for(var i=0; i<=10; i++) {
		m = f * i;
		document.getElementById("ud").innerHTML+=m+"<br/>"
	
	}
}

//Opgave 3,5

function taelop3 () {
	for(var b=1; b<=10; b++) {
		document.getElementById("ud").innerHTML +="<br/>"+ b+"Tabel"+  "<br/>";
		for(var a=1; a<=10; a++){
			c=b*a;
			document.getElementById("ud").innerHTML += c+" ";
		}
	}
}

//Opgave 3,6

function taelop4 () {
	for(var j=1; j<=10; j++){
		document.getElementById("ud").innerHTML +="<br/>"+ j+" " + "Tabellen"+ "<br/>" 
		for(var i=1; i<=10; i++) {
			k=j*i;
			document.getElementById("ud").innerHTML +=k+ " ";
		}
		document.getElementById("ud").innerHTML += "<br/>";
	}
}

// Opgave 3,9

function fib() {
	var fib = [1,1];
	var ud = document.getElementById("ud");
	ud.innerHTML = "1<br>1";
	for(var i=0; i<100; i++){
		fib.push(fib[i] + fib[i + 1]);
		ud.innerHTML +="<br>" + (fib[i] + fib[i + 1]).toString() ;
	}
	//document.write(fib); (tidligere kode som er taget ud af brug, da den er defineret i en anden kode længere oppe)	
}

// Opgave 6,1 

function rod(x,y){
		document.getElementById("ud").innerHTML = Math.pow(x,1/y);
} 

// 6,2 

function fak(n) {
	var f = 1;
	for(var i=0; i<n; i++)
		f = f *(n-i);
	//return f;
	document.getElementById("ud").innerHTML = f; 
}





















