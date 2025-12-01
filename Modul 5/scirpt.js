for (i  = 0; i < 5; i++){
 text += "The number is " + i + "<br>";
}  

//the Number is 0
//the Number is 1
//the Number is 2
//the Number is 3
//the Number is 4

var person = {
    firstName: "John",  
    lastName: "Doe",
    age: 26
}

var text = "";
var x;
for (x in person) {
     console.log (text += person[x]);
}

//Loping over a list

var names = ["John", "Doe", "Smith"];
var x;

for (x of names) {
    //console.log(x);
    document.write(x + "<br>");
}

//Loping over a string
var txt  = "JavaScript";
var x;
for (x of txt) {
    document.write(x + "<br>");
}  

//do while loop
let j = 0;
do {
    j += 1;
    console.log(j);
} while (j < 5);

//while loop 
let k = 0;
while (k < 5) {
    console.log(k);
    k += 1;
}