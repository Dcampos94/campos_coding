//Daniel

(function () {

//    number 1
    var avgNumbers = function (arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    };

    console.log("avg number = ", avgNumbers([1, 2, 3, 4, 5]));

//    number 2
    var firstName = "James";
    var lastName = "Bond";

    function fullName() {
        return firstName + " " + lastName;
    }

    console.log(fullName('James', 'Bond'));

//    number 3
    var ipsum = "this is test text that is being used as input to a function";

    function wordCount(word) {
        var words = word.split(" ");
        return words.length;
    }

    console.log(wordCount(ipsum));

//    number 4
    function charCount(word) {
        return word.length;
    }

    console.log(charCount(ipsum));

//    number 5
    var wordToCount="Javascript";
    function vowelsInWord(wordToCount){
        for (var i=0; i<wordToCount.length; i++){
            var vowelCheck=
        }
    }

    console.log(vowelsInWord('JavaScript'));


})();