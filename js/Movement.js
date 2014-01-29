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
var currentLayer=0;
var character="XXXX";

console.log(worldDisplay(twoLayerWorld[currentLayer], xx, yy, character));
while(whileCondition){

        console.clear();
        console.log(twoLayerWorld[currentLayer][xx][yy]);
        console.log(worldDisplay(twoLayerWorld[currentLayer], xx, yy, character));

    if (monsterMaker!="No battles found.") {
        var mobHealth="Health: "+randomMonsterHealth;
        var mobDamage="Damage: "+randomMonsterDamage;
    } else {
        mobHealth="\t";
        mobDamage="\t";
    }
    var statDisplay=

        "Strength:      \t"+characterStats[0][0]+"\tExperience:\t"+characterStats[8][0]+"\t"+"\t |"+
            "\t"+ monsterMaker +"\n"+
            "Dexterity:     \t"+characterStats[1][0]+"\tGold:\t\t"+characterStats[9][0]+"\t"+"\t |"+
            "\t"+mobHealth+"\n"+
            "Intelligence:  \t"+characterStats[2][0]+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+" |"+
            "\t"+mobDamage+"\n"+
            "Stamina:       \t"+characterStats[3][0]+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+" |"+"\n"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t |"+"\n"+

            "Armor:         \t"+characterStats[6][0]+"\tHealth:\t\t"+characterStats[4][2]+"/"+characterStats[4][1]+"\t |"+"\n"+
            "Damage:        \t"+characterStats[7][1]+"\tMana:\t\t"+characterStats[5][2]+"/"+characterStats[5][1]+"\t |";

    console.log(statDisplay);

    var movement=prompt("Would you like to move North, South, West, East, Up, Down, or Finish? (n, s, w, e, u, d, f)").toLowerCase();
    if(movement=="n"){ xx--; }
    else if(movement=="s"){xx++;}
    else if(movement=="w"){yy--;}
    else if(movement=="e"){yy++;}
    else if(movement=="f"){whileCondition=false;}
    if(twoLayerWorld[currentLayer][xx][yy]="Ladder" && movement=="u"){currentLayer--;}
//    (twoLayerWorld[currentLayer][xx][yy]=="Ladder" && movement="u")?currentLayer--:currentLayer;
    if(twoLayerWorld[currentLayer][xx][yy]="Dungeon" && movement=="d"){currentLayer++;}
    }

if(xx>=world.length){xx=0;
}
else if(xx<0){xx=world.length-1;
}
else if(yy>=world.length){yy=0;
}
else if(yy<0){yy=world.length-1;
}

