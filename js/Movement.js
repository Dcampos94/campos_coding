/**
 * Created by Daniel on 1/15/14.
 */

var xx=3;
var yy=7;
var whileCondition=true;

var rowString="";


while(whileCondition==true){
    rowString="";
    for(loopItt=0;loopItt<world.length;loopItt++){
    for (loopItt2=0;loopItt2<world[loopItt].length;loopItt2++){
        if(xx==loopItt&&yy==loopItt2)
            rowString=rowString+"Player"+"\t";
        else{
            rowString=rowString+ world[loopItt][loopItt2]+"\t";
        }
    }
    rowString+="\n";
    }
        console.clear();
        console.log(rowString);

    var movement=prompt("Would you like to move Up, Down, Left, Right or Finish?").toLowerCase();
    if(movement=="up"){ xx--; }
    else if(movement=="down"){xx++;}
    else if(movement=="left"){yy--;}
    else if(movement=="right"){yy++;}
    else if(movement=="finish"){whileCondition=false}
    }
//    console.log(world[xx][yy]);

if(xx>=world.length){xx=0}
else if(xx<0){xx=world.length-1}
else if(yy>=world.length){yy=0}
else if(yy<0){yy=world.length-1}

