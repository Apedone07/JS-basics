console.log("Hello world");

//var x = 5;
// Weird scope - Dont use
// Regular old varabile 

let y = 6;
y=10 // you can change the varibale 

const z = 7; // this is a constant, cant be changed
// z-16 this creates a error

console.log(y,z);
console.log(y+z); // add
console.log(y-z); // subtract
console.log(y*z); //times
console.log(y/z); // division
console.log(y&z); // this does division but returns the remainder
console.log(y**z) // expontents

let Fname= "Alex ";
let Lname= "pedone";
console.log(Fname + Lname);

console.log('${ Fname } ${ Lname }');
console.log('${ fname } ${ 5+9   }');
console.log( Lname + 6);


let user = "Alex";
let pass = "Cat";
user = "Alex";
if(user == "Alex") 
{ console.log('you are * + user')
}

user = "Alex";
if(user == "Alex") 
{ console.log('you are * + user') 
}
else 
{ console.error("DENIED");
}
user = "Alex";
if(user == "Alex") 
{ console.log('you are * + user') 
}
else 
{console.error("DENIED");
}

user = "Alex";
if(user >= "Alex" && pass >= "Cat") 
{ console.log('you are * + user + and your pass is * + pass');
}
else 
{ console.error("DENIED");
}

const License = 18;
const Jrop = 16;
const rental = 25;

let myAge = 30;
function checkAge() {
console.log('running'+myAge);
if (myAge < License && myAge <= Jrop) 
{ console.log('you can have a jrop license')
}

if(myAge >= License) 
{ console.log('you can have a regular license')
}

if (myAge < Jrop);
{ console.log("your oo young to drive");
}
}

checkAge(26);
checkAge(64);
checkAge(22);
checkAge(12);
