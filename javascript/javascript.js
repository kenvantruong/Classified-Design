/*****************************************************/
/*************THE NET NINJA**************************/
/***************************************************/


alert('Hello World');


















/*****************************************************/
/*************TEAM TREE HOUSE************************/
/***************************************************/


/*************** Quick Flexible Random Number Generating Function Challenge********

1. Function needs to accept 2 values (lower & upper Value)
you want the function to be able to produce random values
between say 10 and 100 or 9 and 78, as well as between
and 6 or even 0 and 6.
2. Once the function is done, make sure you call it by
passing different values. You can either display the values
using the alert, document.write or console.log functions.

**/
//Random Number Challenge, Part I*************


/*
function getRandomNumber(lower, upper){
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomNumber (1, 6) );
console.log(getRandomNumber (1, 100) );
console.log(getRandomNumber (200, 700) );
console.log(getRandomNumber (1000, 50000) );
console.log(getRandomNumber (50, 200) );
*/


//Random Number Challenge, Part II*************

/*function getRandomNumber(lower, upper){
  if ( isNaN(lower)|| isNan(upper) ) {
    throw new Error('error MUST BE NUMBERS!!! DUMBIE!!');    
 } else {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomNumber (1, 6) );
console.log(getRandomNumber (1, 100) );
console.log(getRandomNumber (200, 700) );
console.log(getRandomNumber (1000, 50000) );
console.log(getRandomNumber (50, 200) );
*/

/*******************************************/
// function getRandomNumber(upper) {
// 	var randomNumber = Math.floor( Math.random() * upper) + 1;
// 	return randomNumber;
// }
//  console.log( getRandomNumber(6) );
// console.log( getRandomNumber(6) );

// function getArea(width, length, unit) {
// 	var area = width * length;
// 	return area + " " + unit;
// }

// console.log(getArea(10, 20, 'sq ft'));





/****************Coffee Shop Runs****************/
// function goToCoffeeShop(drink, pastry) {
// 	alert(drink + pastry + ' is on the way!');
// }

// goToCoffeeShop('Grande Earl Grey Hot Tea');



/*************** Empty Email Function********/
// function isEmailEmpty () {
// 	var field = document.getElementById('email');
// 	if (field.value === ' ') {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// var fieldTest = isEmailEmpty();
// if (fieldTest === true) {
// 	alert('Please provide your email');
// }






/*************** 5 Questions with winning Metal!!!********/
// var correct = 0;
// alert('There will be 5 questions. Let\'s see if you can get them right! LET\'S GO!!!');

// var answer1 = prompt('What planet do you live in?');
// if ( answer1.toUpperCase() === "EARTH") {
// 	correct += 1;
// }
// var answer2 = prompt('What color is the Moon?');
// if (answer2.toUpperCase()==='GREY') {
// 	correct += 1;
// }
// var answer3 = prompt('What is Ken\'s favorite color?');
// if (answer3.toUpperCase()==='GREY') {
// 	correct += 1;
// }
// var answer4 = prompt('What kind of car do Ken drives?');
// if (answer4.toUpperCase()==='TOYOTA PRIUS') {
// 	correct += 1;
// }
// var answer5 = prompt('What ethnicity is Ken Truong?');
// if (answer5.toUpperCase()==='VIETNAMESE') {
// 	correct += 1;
// }

// document.write("<p> You got " + correct + " out of 5 questions correct.</p>");

// //output rank
// if (correct === 5) {
// 	document.write("<p><strong>You earned a The King Gold Crown!</strong></p>");
// } else if (correct >= 3 ) {
// 	document.write("<p><strong>You earned a Silver Crown!</strong></p>");
// } else if (correct >= 1 ) {
// 	document.write("<p><strong>You earned a The Bronze metal trophy!</strong></p>");
// } else {
// 	document.write("<p><strong>You earned a NO rewards! GO BACK TO SCHOOL ROOKIE!!</strong></p>");
//}









/*************** The Random Number Guessing Game Generates********
a number between 1 and 10 and gives 
a player two attempts to guess the number********/
// /*
// 1. correct
// 2. guess way higher than 10
// 3. guess too high
// 4. guess too low
// */

// var correctGuess = false; // Assume the player didn't guess correctly
// var randomNumber = Math.floor(Math.random() * 10) + 1; //Generate random numbers from 1-10

// var guess = prompt("I am thinkng of a number between 1 and 10. What is it?");
// if (parseInt(guess) === randomNumber || guess === 'password' || guess === 'kenisthebest') { //correct #, cheat code, cheat code 
// 	correctGuess = true;
// } else if (parseInt(guess) > 10) {
// 	var guessDramatic = alert ('Bro....WTF!? I said 1-10 not fucking more than 10....'); 
// } else if (parseInt(guess) < randomNumber) {
// 	var  guessMore = prompt ("Try again. The number I am thinking is more than " + guess);
// }   if (parseInt(guessMore) === randomNumber) {
// 		correctGuess = true;
// } else if (parseInt(guess) > randomNumber) {
// 	var guessLess = prompt ("Try again. The number I am thinking is less than " + guess);
// }   if (parseInt(guessLess) === randomNumber) {
// 		correctGuess = true;
// }
// if ( correctGuess ) { //Test if players are correct and message appears
// 	document.write("<style> p { color: red; font-style: bold; font-size: 56px; font-family: lulo-clean-w01-one-bold; text-align: center;} </style> <p> WE GOT OUR SELF A WINNER!!!! WHOOO!!!!" + " it is " + randomNumber + "!!!</p>");
// } else {
// 	document.write("<style> p { color: black; font-size: 33px; font-family: lulo-clean-w01-one-bold; text-align: center;} </style> <p>NOOOOO SIR! " + " TRY AGAIN!" + " It is actually " + randomNumber + "</p>");
// }












// /*****Condition Statements****/
// var answer = prompt("What is your last name?");
// if (answer.toUpperCase() === "TRUONG") {
// 	document.write("NICE MY NIGGA! That's Right Homie G Love!");
// } else {
// 	document.write("You a dumb mutha fucka!!!");
// }




/*********** Random Number Generator ***********/
// 1. Create a random number generator
// 2. Collect the number from a user and print a random number from 1 to the user provided #
// 3. Create a program that accepts two value and generate a random number from the 1st to the second.
// ***************/
// // var input1 = prompt ('Pick any number you want.');
// // var bottomNumber = parseInt(input1);
// // var input = prompt("Put another number");
// // var topNumber = parseInt(input);
// // var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber; 
// // var message = "<h1>" + randomNumber + " is a number between 1 and " + topNumber + ".</h1>";
// document.write(message);




/*********** Dice Craps Game ***************/
// var diceRollOne = Math.floor(Math.random() * 6) + 1;
// var diceRollTwo = Math.floor(Math.random() * 6) + 1;
// alert('You rolled a ' + '(' + diceRollOne +')' +' (' + diceRollTwo+')');






/***********SECONDS PER YEAR ***************/

// var secondsPerMin = 60;
// var minPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var secondsPerDay = secondsPerMin * minPerHour * hoursPerDay;
// var secondsPerYear = secondsPerDay * 365;
// document.write('There are ' + secondsPerDay + ' seconds in a day.');

/********** QUESTIONS AND COUNTDOWNS ***************/
// var questions = 3;
// var questionsLeft = "[" + questions + " questions left]";
// var yearsAlive = prompt("How Old Are You??" + questionsLeft);
// questions -= 1;
// var questionsLeft = "[" + questions + " questions left]";
// alert("Nice! " + yearsAlive + "!?");
// var salary2016 = prompt("How much did you made in 2016?" + questionsLeft);
// questions -= 1;
// var questionsLeft = "[" + questions + " questions left]";
// var salary2017 = prompt("Ok...How much did you made in 2017?" + questionsLeft);


// var totalSalary16n17 = parseInt(salary2016) + parseInt(salary2017);
// alert("Nice! so you made " + totalSalary16n17 + " total!?");
// document.write("$" + totalSalary16n17 + " Annually " + "and.......");
// var secondsPerAge = secondsPerYear * yearsAlive;
// alert("Also! since you are " + yearsAlive + " " + ". You been alive for more than " + secondsPerAge + "seconds" + " LMAO!!");
// document.write("You been alive for "+secondsPerAge + "seconds+.");


/*************** STORY TELLING ***************/

// document.write("<h1>Story-Telling Program</h1>");
// var nouns = prompt("Ready!?! soo name me any Nouns");
// var verbs = prompt("Give me a verb");
// var adjectives = prompt("NICE!!! now give me any adjectives!");
// var name = prompt("Oh yeah!! one more thing, give me a name... quick!");

// var story_telling = "Once upon a time, there was a " + adjectives + " individual" + " name " + name;
// story_telling += ". He was posted on " + adjectives +".st"+ " selling rocks, and than suddenly the cops rolled up, " + name + " straight up " + verbs;
// story_telling += " " + "...than!.... to be continued"
// alert("Are you ready for this crazy ass story!?");




// document.write(story_telling);