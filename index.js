//Ask the user to enter a word. Keep asking them to enter a word until they enter the letter 'q'.

var userInput = prompt("enter a word");
while(userInput !== "q"){
    userInput = prompt("enter a word");
}

//Make any string array all lower case strings. If you don't remember how to use that Google it.

//var names = ["Horse", "Cars", "Buses"];

var array1 = ["Horse","Cars","Buses","Houses","Planes"];
array1 = array1.map(function(eachElement){
    return eachElement.toLowerCase() });
console.log(array1);



