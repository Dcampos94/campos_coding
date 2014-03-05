//Daniel

function getAverage(arr){
    var total=0;
    var average=0;
    for (var i=0;i<arr.length;i++){
        total+=arr[i];
    }
    average = total/arr.length;
    return average
}


var average = getAverage([10, 20, 30]);

console.log(average);