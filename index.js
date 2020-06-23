/* var firstName= "John";
var civilStatus = "single";

if (civilStatus === 'married') {
    console.log(firstName + " is married!")
}else{
    console.log(firstName + " hopes to marry soon")
}; */


var firstName= "John";
var age = 22;


///Ternery operator

///condition ..then ? then the if block... then : the els block
age >= 18 ? console.log(firstName + " Drinks Beer!")
: console.log(firstName + " Drinks Juice!");

///another example... then we can apss this into something
var drink = age >= 18 ? 'Beer' : 'Juice';
console.log(drink);


///switchstatement

///using the switch as a string

var job = 'Teacher';

switch(job) {
    case 'Teacher':
        console.log(firstName + 'Teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives a car.');
        break;
    case 'designer':    
        console.log(firstName + ' designs stuff.');
        break;
    default:
        console.log(firstName + ' Does something else.');
}


///using the switch as a condition test

switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy .');
        break;
    case age >= 13  && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age <30:    
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is an older man.');
}

