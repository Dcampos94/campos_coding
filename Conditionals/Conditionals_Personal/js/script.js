/**
 * Created by Daniel on 1/10/14.
 */

//Setting up variables
var hoursToSleep=parseInt(prompt("How many hours of sleep did you need this week?"));
var hoursSleptMon=parseInt(prompt("How  many hours did you sleep on Monday?"));
var hoursSleptTues=parseInt(prompt("How  many hours did you sleep on Tuesday?"));
var hoursSleptWed=parseInt(prompt("How  many hours did you sleep on Wednesday?"));
var hoursSleptThurs=parseInt(prompt("How  many hours did you sleep on Thursday?"));
var hoursSleptFri=parseInt(prompt("How  many hours did you sleep on Friday?"));
var hoursSleptSat=parseInt(prompt("How  many hours did you sleep on Saturday?"));
var hoursSleptSun=parseInt(prompt("How  many hours did you sleep on Sunday?"));
var sleepEquation=hoursSleptMon+hoursSleptTues+hoursSleptWed+hoursSleptThurs+hoursSleptFri+hoursSleptSat+hoursSleptSun;
//Your hours slept should equal the hours needed to sleep
if (sleepEquation<hoursToSleep) {
//console.log You didn't sleep enough
    console.log("You haven't slept long enough.");
} else {
// if your hours slept is greater than or equal to the hours needed
    if (sleepEquation>=hoursToSleep) {
//console log success
        console.log("Congratulations, you slept the requried amonut this week!");
    }
}