/**
 * Created by Daniel on 1/10/14.
 */

//setting up variables
var puppies=parseInt(prompt("How many puppies do you own?"));
var kittens=parseInt(prompt("How many kittens do you own?"));
var userPrompt=prompt("Would you like to 'multiply', 'divide', 'add' or 'subtract' your pets?");
var subtraction=puppies-kittens;
var addition=puppies+kittens;
var multiply=puppies*kittens;
var divide=puppies/kittens;

//if prompt is multiply
if (userPrompt=="multiply") {
//console log product
    console.log("You have "+multiply+" pets.");
} else {
//if prompt is divide
    if (userPrompt=="divide") {
//console log quotient
        console.log("You have "+divide+" pets.");
    } else {
//if prompt is add
        if (userPrompt=="add") {
//console log sum
            console.log("You have "+addition+" pets.");
        } else {
//if prompt is subtract
            if (userPrompt=="subtract") {
//console log difference
                console.log("You have "+subtraction+" pets.");
            }
        }
    }
}