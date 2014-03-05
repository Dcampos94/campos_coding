//Daniel Campos

(function(){
    var playerOneName= "Thrall";
    var playerTwoName= "Varian Wrynn";

    var playerOneDamage= 20;
    var playerTwoDamage= 20;

    var playerOneHealth= 100;
    var playerTwoHealth= 100;

    var round=0;

    function fight(){

        alert(playerOneName+":"+playerOneHealth+" START "+playerTwoName+":"+playerTwoHealth);

        for (var i=0;i<10;i++){

            var minDamage1=playerOneDamage*.5;
            var minDamage2=playerTwoDamage*.5;
            var f1=Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
            var f2=Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);

            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

            var results=winnerCheck();
            console.log(results);

            if (results === "no winner"){
                round++;
                alert(playerOneName+":"+playerOneHealth+" Round "+round+" OVER "+playerTwoName+":"+playerTwoHealth);
            }else{
                alert(results);
                break
            }

        }

    }

    function winnerCheck(){

        var result="no winner";

        if (playerOneHealth<1 && playerTwoHealth<1){
            result="You both Die";
        }else if(playerOneHealth<1){
            result=playerTwoName+" WINS!!!";
        }else if(playerTwoHealth<1){
            result=playerOneName+" WINS!!!";
        }

        return result;

    }

    fight()

})();