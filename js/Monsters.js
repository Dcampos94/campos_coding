/**
 * Created by Daniel on 1/20/14.
 */

var randomMonsterHealth=Math.floor((Math.random()*5)+5);
var randomMonsterDamage=Math.floor((Math.random()*5)+5);

var type=0;
var expValue=1;
var dropGold=2;
var monsterHealth=3;
var monsterDamage=4;

var kobold=0;
var troll=1;
var dragon=2;


monster=[];
monster[kobold]=[];
monster[troll]=[];
monster[dragon]=[];

monster[kobold][type]="Kobold";
monster[kobold][expValue]=5;
monster[kobold][dropGold]=[2,6];
monster[kobold][monsterHealth]=randomMonsterHealth;
monster[kobold][monsterDamage]=randomMonsterDamage;

monster[troll][type]="Troll";
monster[troll][expValue]=10;
monster[troll][dropGold]=[4,12];
monster[troll][monsterHealth]=randomMonsterHealth;
monster[troll][monsterDamage]=randomMonsterDamage;

monster[dragon][type]="Dragon";
monster[dragon][expValue]=15;
monster[dragon][dropGold]=[8,18];
monster[dragon][monsterHealth]=randomMonsterHealth;
monster[dragon][monsterDamage]=randomMonsterDamage;

function makeMonster(world, monster, xx, yy){

    var spawnChance=Math.random();
    var koboldSpawn=.5;
    var trollSpawn=.3;
    var dragonSpawn=.1;
    var returnValue="";

    if (world[yy][xx]=="Forest" && spawnChance<koboldSpawn) {
        returnValue = "You have encountered a "+monster[0][0]+"!";
    } else
    if (world[yy][xx]=="Desert" && spawnChance<trollSpawn) {
        returnValue = "You have encountered a "+monster[1][0]+"!";
    } else
    if (world[yy][xx]=="Water" && spawnChance<dragonSpawn){
        returnValue = "You have encountered a "+monster[2][0]+"!";
    } else {
        returnValue = "No battles found.";
    }

    return returnValue;
}