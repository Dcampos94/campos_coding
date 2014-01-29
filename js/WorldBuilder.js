/**
 * Created by Daniel on 1/15/14.
 */

var world=[];

world[0]=[];
world[1]=[];
world[2]=[];
world[3]=[];
world[4]=[];
world[5]=[];
world[6]=[];
world[7]=[];
world[8]=[];
world[9]=[];

world[0][0]="Water";
world[0][1]="Water";
world[0][2]="Water";
world[0][3]="Water";
world[0][4]="Forest";
world[0][5]="Forest";
world[0][6]="Forest";
world[0][7]="Forest";
world[0][8]="Forest";
world[0][9]="Desert";

world[1][0]="Water";
world[1][1]="Water";
world[1][2]="Water";
world[1][3]="Forest";
world[1][4]="Forest";
world[1][5]="Forest";
world[1][6]="Forest";
world[1][7]="Forest";
world[1][8]="Desert";
world[1][9]="Desert";

world[2][0]="Water";
world[2][1]="Water";
world[2][2]="Water";
world[2][3]="Forest";
world[2][4]="Forest";
world[2][5]="Forest";
world[2][6]="Water";
world[2][7]="Water";
world[2][8]="Desert";
world[2][9]="Desert";

world[3][0]="Water";
world[3][1]="Water";
world[3][2]="Forest";
world[3][3]="Forest";
world[3][4]="Forest";
world[3][5]="Forest";
world[3][6]="Water";
world[3][7]="Water";
world[3][8]="Desert";
world[3][9]="Desert";

world[4][0]="Water";
world[4][1]="Dungeon";
world[4][2]="Forest";
world[4][3]="Forest";
world[4][4]="Forest";
world[4][5]="Forest";
world[4][6]="Forest";
world[4][7]="Forest";
world[4][8]="Desert";
world[4][9]="Desert";

world[5][0]="Forest";
world[5][1]="Forest";
world[5][2]="Forest";
world[5][3]="Forest";
world[5][4]="Forest";
world[5][5]="Forest";
world[5][6]="Forest";
world[5][7]="Forest";
world[5][8]="Desert";
world[5][9]="Desert";

world[6][0]="Forest";
world[6][1]="Forest";
world[6][2]="Forest";
world[6][3]="Forest";
world[6][4]="Forest";
world[6][5]="Forest";
world[6][6]="Forest";
world[6][7]="Forest";
world[6][8]="Desert";
world[6][9]="Desert";

world[7][0]="Forest";
world[7][1]="Forest";
world[7][2]="Forest";
world[7][3]="Forest";
world[7][4]="Forest";
world[7][5]="Forest";
world[7][6]="Forest";
world[7][7]="Desert";
world[7][8]="Desert";
world[7][9]="Desert";

world[8][0]="Forest";
world[8][1]="Forest";
world[8][2]="Dungeon";
world[8][3]="Forest";
world[8][4]="Forest";
world[8][5]="Forest";
world[8][6]="Desert";
world[8][7]="Desert";
world[8][8]="Desert";
world[8][9]="Desert";

world[9][0]="Forest";
world[9][1]="Forest";
world[9][2]="Forest";
world[9][3]="Forest";
world[9][4]="Forest";
world[9][5]="Forest";
world[9][6]="Desert";
world[9][7]="Desert";
world[9][8]="Desert";
world[9][9]="Desert";

function dungeonGenerator(world){
    var dungeonX1=0;
    var dungeonX2=1;
    var dungeonY1=2;
    var dungeonY2=3;
    var firstVsSecondDungeonInstance = true;
    var completedWorld=[];
    completedWorld[0]=world;
    completedWorld[1]=[];
    completedWorld[2]=[];
    completedWorld[3]=[];
    completedWorld[4]=[];
    completedWorld[5]=[];

    for(i=0;i<world.length;i++){
        for(j=0;j<world[i].length;j++){
//            completedWorld[2][i][j]=makeMonster(world, xx, yy, 0);
            if(world[i][j]=="Dungeon" && firstVsSecondDungeonInstance==true){
                dungeonX1=i;
                dungeonY1=j;
                firstVsSecondDungeonInstance = false;}
            else if(world[i][j]=="Dungeon"){
                dungeonX2=i;
                dungeonY2=j;
        }
    }
}
    for(i=0;i<world.length;i++){
        completedWorld[1][i]=[];
        completedWorld[2][i]=[];
        completedWorld[3][i]=[];
        completedWorld[4][i]=[];
        completedWorld[5][i]=[];

    for(j=0;j<world[i];j++){
    var randomWorldSeed=Math.random();
//    Cave, lava, dirt, ladder
    if((i==dungeonX1 && j==dungeonY1)
        ||
        (i==dungeonX2 && j==dungeonY2) ){
        completedWorld[1][i][j]="Ladder";
        } else if(randomWorldSeed<=1/3){
            completedWorld[1][i][j]="Caves";
        } else if(randomWorldSeed>=2/3){
        completedWorld[1][i][j]="Lava";
        } else{
        completedWorld[1][i][j]="Dirt";
        }
    }

    }
    for (i=0; i<world.length; i++) {
        for(j=0; j<world[i].length; j++) {
            completedWorld[2][i][j]=makeMonster(world, xx, yy, 0);
        }
    }
return completedWorld;
}

var twoLayerWorld = dungeonGenerator(world);
//console.log(twoLayerWorld[0]);
//console.log(twoLayerWorld[1]);