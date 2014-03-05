//Daniel Campos

(function () {
    var playerOne = ["Batman", 20, 100];
    var playerTwo = ["Superman", 20, 100];

    var round = 0;

    function fight() {

        alert(playerOne[0] + ":" + playerOne[2] + " START " + playerTwo[0] + ":" + playerTwo[2]);

        for (var i = 0; i < 10; i++) {

            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;
            var f1 = Math.floor(Math.random() * (playerOne[1] - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (playerTwo[1] - minDamage2) + minDamage2);

            playerOne[2] -= f1;
            playerTwo[2] -= f2;

            console.log(playerOne[0] + ":" + playerOne[2] + " " + playerTwo[0] + ":" + playerTwo[2]);

            var results = winnerCheck();
            console.log(results);

            if (results === "no winner") {
                round++;
                alert(playerOne[0] + ":" + playerOne[2] + " Round " + round + " OVER " + playerTwo[0] + ":" + playerTwo[2]);
            } else {
                alert(results);
                break
            }

        }

    }

    function winnerCheck() {

        var result = "no winner";

        if (playerOne[2] < 1 && playerTwo[2] < 1) {
            result = "You both Die";
        } else if (playerOne[2] < 1) {
            result = playerTwo[0] + " WINS!!!";
        } else if (playerTwo[2] < 1) {
            result = playerOne[0] + " WINS!!!";
        }

        return result;

    }

    fight()

})();