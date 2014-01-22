/**
 * Created by Daniel on 1/22/14.
 */

var strength=0;
var dexterity=1;
var intelligence=2;
var stamina=3;
var health=4;
var mana=5;
var armor=6;
var damage=7;
var experience=8;
var currency=9;

var stat=0;
var funModifier=1;
var minStat=2;

characterStats=[];

characterStats[strength]=[];
characterStats[dexterity]=[];
characterStats[intelligence]=[];
characterStats[stamina]=[];
characterStats[health]=[];
characterStats[mana]=[];
characterStats[armor]=[];
characterStats[damage]=[];
characterStats[experience]=[];
characterStats[currency]=[];

characterStats[strength][stat]=Math.floor((Math.random()*15)+3);
characterStats[strength][funModifier]="";
characterStats[dexterity][stat]=Math.floor((Math.random()*15)+3);
characterStats[dexterity][funModifier]="";
characterStats[intelligence][stat]=Math.floor((Math.random()*15)+3);
characterStats[intelligence][funModifier]="";
characterStats[stamina][stat]=Math.floor((Math.random()*15)+3);
characterStats[stamina][funModifier]="";
characterStats[health][stat]=Math.floor((Math.random()*15)+3);
characterStats[health][funModifier]=(characterStats[stamina][stat]*2)+characterStats[health][stat];
characterStats[health][minStat]=Math.floor((Math.random()*15)+3);
characterStats[mana][stat]=Math.floor((Math.random()*15)+3);
characterStats[mana][funModifier]=(characterStats[intelligence][stat]*2)+characterStats[mana][stat];
characterStats[mana][minStat]=Math.floor((Math.random()*15)+3);
characterStats[armor][stat]=Math.floor((Math.random()*15)+3);
characterStats[armor][funModifier]="";
characterStats[damage][stat]=Math.floor((Math.random()*15)+3);
characterStats[damage][funModifier]=characterStats[strength][stat]+characterStats[damage][stat];
characterStats[experience][stat]=Math.floor((Math.random()*15)+3);
characterStats[experience][funModifier]="";
characterStats[currency][stat]=Math.floor((Math.random()*15)+3);
characterStats[currency][funModifier]="";