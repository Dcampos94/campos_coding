/**
 * Created by Daniel on 1/22/14.
 */
function worldDisplay(world, xx, yy, character){
rowString="";
for(loopItt=0;loopItt<world.length;loopItt++){
    for (loopItt2=0;loopItt2<world[loopItt].length;loopItt2++){
        if(loopItt==xx && loopItt2==yy){
            rowString=rowString+character+"\t";
        }
        else{
            rowString=rowString+ world[loopItt][loopItt2]+"\t";
        }
    }
    rowString+="\n";
}
return rowString;
}