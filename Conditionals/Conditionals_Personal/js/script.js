/**
 * Created by Daniel on 1/10/14.
 */

//Setting up variables
var hoursToSleep=parseInt(prompt("How many hours of sleep do you need?"));
var hoursSlept=parseInt(prompt("How  many hours did you sleep today?"));
var sleepEquation=hoursToSleep-hoursSlept;

//Your hours slept should equal 0
if (sleepEquation<0) {
//console.log You didn't sleep enough
    console.log("You haven't slept long enough.");
} else {
// if your hours slept is greater than or equal to 0
    if (sleepEquation>=0) {
//console log success
        console.log("You slept a healthy amount, you should be ready for the day!");
    }
}