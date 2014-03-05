/**
 * Created by Daniel on 2/25/14.
 */
(function () {

//    var seconds = 0;
//    var interval = setInterval(update, 1000);
//
//    document.querySelector("#button").addEventListener("click", onClick);
//    document.querySelector("#displayAvg").addEventListener("click", display);
//    var studentList = [];
//
//    function onClick(e) {
//        var student = new Student();
//        student.name = document.querySelector("#nameInput").value;
//        student.grades.push(parseInt(document.querySelector("#gradeInput1").value));
//        student.grades.push(parseInt(document.querySelector("#gradeInput2").value));
//        studentList.push(student);
//    }
//
//    function display() {
//        studentList.forEach(function (ele) {
//            console.log(ele.name, ele.average());
//        });
//        clearInterval(interval);
//    }
//
//    function update () {
//        seconds++;
//        console.log(seconds);
//    }
//
//    console.log(studentList[0].average());

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

    //FINAL REVIEW
    function Student() {
        this.name = "";
        this.degree = "";
        this.id = 0;
        this.grades = [80, 90, 100];
    }

    Student.prototype.average = function () {
        var total = 0;
        this.grades.forEach(function (g) {
            total += g;
        });
        return total/this.grades.length;
    };

    window.Student = Student;


})();