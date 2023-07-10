const prompt = require("prompt-sync")();

var age = prompt("enter the age: ");
if(age<18){
    console.log("Sorry, you are too young to drive this car. Powering off");
}
else if(age===18){
    console.log("Congratulations on your first year of driving. Enjoy the ride!");
}
else if(age>18){
    console.log( "Powering On. Enjoy the ride!");
}