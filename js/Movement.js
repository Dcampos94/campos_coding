/**
 * Created by Daniel on 1/15/14.
 */

var yy=3;
var xx=7;
var whileCondition=true;
var rowString="";
var randomMonsterHealth=Math.floor((Math.random()*5)+5);
var randomMonsterDamage=Math.floor((Math.random()*5)+5);
var monsterMaker = makeMonster(world, monster, xx, yy);


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

    if (monsterMaker!="No battles found.") {
        var mobHealth="Health: "+randomMonsterHealth;
        var mobDamage="Damage: "+randomMonsterDamage;
    } else {
        mobHealth="\t";
        mobDamage="\t";
    }
    var statDisplay=

        "Strength:      \t"+characterStats[0][0]+"\tExperience:\t"+characterStats[8][0]+"\t |"+
            "\t"+ monsterMaker +"\n"+
            "Dexterity:     \t"+characterStats[1][0]+"\tGold:\t\t"+characterStats[9][0]+"\t |"+
            "\t"+mobHealth+"\n"+
            "Intelligence:  \t"+characterStats[2][0]+"\t"+"\t"+"\t"+"\t"+" |"+
            "\t"+mobDamage+"\n"+
            "Stamina:       \t"+characterStats[3][0]+"\t"+"\t"+"\t"+"\t"+" |"+"\n"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t |"+"\n"+

            "Armor:         \t"+characterStats[6][0]+"\tHealth:\t\t"+characterStats[4][2]+"/"+characterStats[4][1]+"\t |"+"\n"+
            "Damage:        \t"+characterStats[7][1]+"\tMana:\t\t"+characterStats[5][2]+"/"+characterStats[5][1]+"\t |";

    console.log(statDisplay);

    var movement=prompt("Would you like to move Up, Down, Left, Right or Finish?").toLowerCase();
    if(movement=="up"){ xx--; }
    else if(movement=="down"){xx++;}
    else if(movement=="left"){yy--;}
    else if(movement=="right"){yy++;}
    else if(movement=="finish"){whileCondition=false}
    }

if(yy>=world.length){yy=0}
else if(yy<0){yy=world.length-1}
else if(xx>=world.length){xx=0}
else if(xx<0){xx=world.length-1}

