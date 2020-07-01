/* /* var firstName= "John";
var civilStatus = "single";

if (civilStatus === 'married') {
    console.log(firstName + " is married!")
}else{
    console.log(firstName + " hopes to marry soon")
}; */

/* 
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


///arrow functions----------------.-.-.-.-.-.-.-.-.-.-...............----------------

///single line no arguments (Anon function)

let doThis = () => console.log("Victory!")

doThis();

///single line with one arguments

let doThat = d => d * 17;

console.log(doThat(6));


///multi line with arguments

let Boxer = (wins, losses) => {
    let record = wins > losses;
    var isGood = (record) ? "i win a lot" : "i lose a lot - my name is probably gordo";
   console.log(isGood);
}

Boxer(1, 5);
 */
////want to do more work on this these are cool AF.


/////Functions statements Vs Function Expressions

//-0-0-0-0-0-0-  This is function declaration

/* function whatdoYouDo (job, firdName) {};

// =-=-=-=-=-=-=-   this is a function expression

var whatdoyouDo = function(job, firstName) {
        switch(job) {
            case "Teacher":
                return firstName + "Teaches kids how to code"; /// no need to break here because we used the return keyword - after it returns the output it ends the function and back to where we called this functionl
            case "driver":
                return firstName + " Drives a car";
            case "Designer":
                return firstName + " Designs stuff";
            case "Boxer":
                return firstName + " Boxes things";
            defualt:
                return firstName + " Does something else";
        }
}

console.log(whatdoyouDo('driver', 'Ben'));

//JS arrays stuff
var bennyg = ['Boxing', "Muay Thai", "Jiu-Jitsu"];

bennyg.push('Escrima'); //// this adds to the end of the list
bennyg.unshift('MR.'); //adds to the start of the list.
bennyg.pop(); ///removes the last index of the array.
bennyg.shift() //removes the first element of the array.

var isBoxertype = bennyg.indexOf("drunken boxing") === -1 ?  "Ben is not a drunken boxer" : "Ben is a drunken boxer";

console.log(isBoxertype)
 */

//// objects and properties //////

///Key Value pairs

///using the OBJECT literal to create our object

/* var Ben = {
    fisrtName: 'Ben',
    lastName: "Gardiner",
    birtYear: 1990, // can put difernt types here.
    boxingGyms: ['Sityodtong', 'WMC Samui', 'Dominance Richmond', 'Singpatong', 'Sor.Vorapin'], // you can also put another object inside an array here.
    job: 'Programmer',
}

// to retreive the element by key name you can use the brackets like this..

console.log(Ben['boxingGyms']);
var x = 'job';
//then pass it in like this...
console.log(Ben[x]);

///another way to create an object using the New object syntax

var JayJay = new Object();
///then fill it up using dot notation
JayJay.name = "JAyJay";
JayJay.birtYear = "18882";
JayJay["lastName"] = "Gardiner";
console.log(JayJay);
 */

var Ben = {
    fisrtName: 'Ben',
    lastName: "Gardiner",
    birtYear: 1990, // can put difernt types here.
    boxingGyms: ['Sityodtong', 'WMC Samui', 'Dominance Richmond', 'Singpatong', 'Sor.Vorapin'], // you can also put another object inside an array here.
    job: 'Programmer',
    calcGyms: function() 
    {
        return this.boxingGyms.length;
    }
}

console.log(Ben.calcGyms());