/**
 * Created by Daniel on 1/10/14.
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
world[0][4]="Water";
world[0][5]="Forest";
world[0][6]="Forest";
world[0][7]="Forest";
world[0][8]="Forest";
world[0][9]="Forest";

world[1][0]="Water";
world[1][1]="Water";
world[1][2]="Water";
world[1][3]="Water";
world[1][4]="Forest";
world[1][5]="Forest";
world[1][6]="Forest";
world[1][7]="Forest";
world[1][8]="Forest";
world[1][9]="Forest";

world[2][0]="Water";
world[2][1]="Water";
world[2][2]="Water";
world[2][3]="Forest";
world[2][4]="Forest";
world[2][5]="Forest";
world[2][6]="Forest";
world[2][7]="Forest";
world[2][8]="Forest";
world[2][9]="Forest";

world[3][0]="Water";
world[3][1]="Forest";
world[3][2]="Forest";
world[3][3]="Forest";
world[3][4]="Forest";
world[3][5]="Forest";
world[3][6]="Forest";
world[3][7]="Forest";
world[3][8]="Forest";
world[3][9]="Forest";

world[4][0]="Forest";
world[4][1]="Forest";
world[4][2]="Forest";
world[4][3]="Forest";
world[4][4]="Forest";
world[4][5]="Forest";
world[4][6]="Forest";
world[4][7]="Forest";
world[4][8]="Forest";
world[4][9]="Forest";

world[5][0]="Forest";
world[5][1]="Forest";
world[5][2]="Forest";
world[5][3]="Forest";
world[5][4]="Forest";
world[5][5]="Forest";
world[5][6]="Forest";
world[5][7]="Forest";
world[5][8]="Forest";
world[5][9]="Forest";

world[6][0]="Forest";
world[6][1]="Forest";
world[6][2]="Water";
world[6][3]="Water";
world[6][4]="Forest";
world[6][5]="Forest";
world[6][6]="Forest";
world[6][7]="Forest";
world[6][8]="Desert";
world[6][9]="Desert";

world[7][0]="Forest";
world[7][1]="Forest";
world[7][2]="Water";
world[7][3]="Water";
world[7][4]="Forest";
world[7][5]="Forest";
world[7][6]="Forest";
world[7][7]="Desert";
world[7][8]="Desert";
world[7][9]="Desert";

world[8][0]="Forest";
world[8][1]="Forest";
world[8][2]="Desert";
world[8][3]="Desert";
world[8][4]="Desert";
world[8][5]="Desert";
world[8][6]="Desert";
world[8][7]="Desert";
world[8][8]="Desert";
world[8][9]="Desert";

world[9][0]="Desert";
world[9][1]="Desert";
world[9][2]="Desert";
world[9][3]="Desert";
world[9][4]="Desert";
world[9][5]="Desert";
world[9][6]="Desert";
world[9][7]="Desert";
world[9][8]="Desert";
world[9][9]="Desert";

if(world[0][0]=="Water"){
    console.log("WATER");
} else if{world[0][0]=="Forest"){
    console.log("Forest");
}
else {console.log("Desert");}

var seed1=1;
var seed2=4;
var seed3=9;

if(seed2>=seed1)
{
    console.log("seed2>=seed1");
}
else if(seed2==seed1)
{
    console.log("seed2==seed1");
}
else
{
console.log("seed2<=seed1");
}
if(seed1!=seed3){console.log("Seed1 and 3 are different");}
