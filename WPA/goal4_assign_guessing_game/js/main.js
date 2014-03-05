/**
 * GUESSING GAME:
 *
 * Created By: Daniel Campos
 * Date:
 *
 * GUESSING GAME
 */

//Game variables
(function () {

    var dom = {};
    dom.input = document.querySelector("#input");
    dom.output = document.querySelector("#output");
    dom.button = document.querySelector("button");

    var guessNumber = 3;
    var randomNumber = Math.floor(Math.random() * 10) + 1;
//    var number;
    console.log(randomNumber);
    dom.button.addEventListener("click", onClick);

    function onClick(e) {
        validate();
    }

    function validate() {
        var number = dom.input.value;
        number = parseInt(number);

        if (number < 1 || number > 10 || isNaN(number) === true) {
            dom.output.innerHTML = "Incorrect Value";
        } else {
            letsPlay(number);
        }
    }

    function letsPlay(num) {
        guessNumber--;
        if (num > randomNumber) {
            dom.output.innerHTML = "You guessed too high! " + guessNumber + " guesses remaining.";
        } else if (num < randomNumber) {
            dom.output.innerHTML = "You guessed too low! " + guessNumber + " guesses remaining.";
        } else {
            dom.output.innerHTML = "You got it!";
            dom.button.removeEventListener("click", onClick);
        }

        if (guessNumber = 0) {
            dom.button.removeEventListener("click", onClick);
        }

    }

})();