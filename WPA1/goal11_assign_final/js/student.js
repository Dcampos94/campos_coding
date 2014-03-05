/**
 * Created by Daniel on 3/1/14.
 */

(function () {

    function Student(name, street, city, state, gpa) {
        this.name = name;
        this.address = {
            street: street,
            city: city,
            state: state
        };
        this.gpa = gpa;
        this.average = '';
    }

    //Average GPA Calculator
    Student.prototype.averageCalc = function () {
        var total = 0;
        for (var i = 0; i < this.gpa.length; i++) {
            total += this.gpa[i];
        }

        this.average = total / this.gpa.length;

    };

    window.Student = Student;
})();