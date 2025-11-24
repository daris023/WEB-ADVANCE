var programingLanguages = ["JavaScript", "Python", "C++", "Java", "Ruby"];

console.log("Original array:", programingLanguages);

console.log(programingLanguages[1]);//First Element

console.log(programingLanguages.length);//Length of Array

console.log(programingLanguages[programingLanguages.length - 1]);//Last Element

programingLanguages.push("Go");//Add Element to the End
console.log("After push:", programingLanguages);

programingLanguages.pop();//Remove Last Element
console.log("After pop:", programingLanguages);

programingLanguages.unshift("TypeScript");//Add Element to the Beginning
console.log("After unshift:", programingLanguages);

programingLanguages.shift();//Remove First Element
console.log("After shift:", programingLanguages);

//Splice
programingLanguages.splice;(0, 2, "C++")
console.log("After splice:", programingLanguages);

//Random Number
console.log("Random number between 0 and 1:", Math.random()*5);
console.log("Random number between 1 and 4:", Math.floor(Math.random()*5)); 

//array destructuring
var students=["Daris", "Aldin", "Edis", "Amar"];
var [student1, student2, student3, student4]=students;
console.log("destructed Students:", student1, student2, student3, student4);
console.log("first student" ,student1)
console.log("second student" ,student2)
console.log("third student" ,student3)

var number  = [1, 2, 3, 4, 5 ,6 ,7, 8, 9, 10];
var [num1, num2, num3, ...othernumbers] = number; 
console.log("destructed Numbers",num1, num2, num3,  ...othernumbers);
console.log("first number" ,num1);
console.log("third number" ,num2);
console.log("fifth number" ,num3);
console.log(othernumbers.toString());
