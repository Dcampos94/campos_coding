/**
 * Created by Daniel on 2/13/14.
 */
(function () {

    var objTest = person.skills.category;

    for (var i = 0; i < person.skills.length; i++) {
        console.log(person.skills[i].category);

        for (var j = 0; j < person.skills[i].tests.length; j++) {
//            console.log(j);
            console.log("persons name:  "+ person.skills[i].tests[j].name+" "+"score: "+ person.skills[i].tests[j].score)

        }
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx");
    }

})();