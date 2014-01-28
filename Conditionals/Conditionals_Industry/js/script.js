/**
 * Created by Daniel on 1/10/14.
 */

//Assigning variables

var programmers=parseInt(prompt("How many programmers are available?"));
var designers=parseInt(prompt("How many designers are available?"));
var programmersNeeded=parseInt(prompt("How many programmers are needed?"));
var designersNeeded=parseInt(prompt("How many designers are needed"));
var remainingProgrammers=programmersNeeded-programmers;
var remainingDesigners=designersNeeded-designers;

//Checking if there are sufficient employees
if (programmers>=programmersNeeded && designers>=designersNeeded) {
    console.log("You have enough employees for this job");
} else {
//Checking number of programmers
    if (programmers<programmersNeeded) {
        console.log("You do not have enough programmers, you need "+remainingProgrammers+" more programmer(s).");
    } else {
//Checking number of designers
        if (designers>designersNeeded) {
            console.log("You do not have enough designers, you need "+remainingDesigners+" more designer(s).");
        }
    }
}