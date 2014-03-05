/*
 * Mid Terms for PWA-1
 */
//Daniel Campos
(function () {
//   Opening Variables
    var student = {
        name: "Andrew Reiter",
        address: {
            street: "1304 Salem Ct.",
            city: "Spring Hill",
            state: "FL"
        },
        gpa: [2.5, 3, 3.5],
        average: gpaCalculator(gpa)};
    var studentList = [student];
    var i = 0;
    var gpaToCalc = student.gpa;
//    Displaying Original Data
    console.log("*ORIGINAL DATA*");
    logFunction();
    function addStudent(n, s1, c, s2, g, ga) {
        var newStudent = {name: n, address: {street: s1, city: c, state: s2}, gpa: g, average: ga};
        studentList.push(newStudent);
    }

//    Log Display Function
    function logFunction() {
        for (var i = 0; i < studentList.length; i++) {
            console.log("Student Name: " + studentList[i].name);
            console.log("Address: " + studentList[i].address.street + " " + studentList[i].address.city + " , " + studentList[i].address.state);
            console.log("GPA: " + studentList[i].gpa);
            console.log("Average GPA: " + studentList[i].average);
            console.log("--------------------------------------------------");

        }

    }

//Variables for onClick Function
    var name = document.querySelector("#name");
    var address = document.querySelector("#address");
    var gpa = document.querySelector("#gpa");
    var average = document.querySelector("#gpaavg");
    var btnStudent = document.querySelector(".buttonred");

//Display First Student Info
    name.innerHTML = "Student Name: " + studentList[i].name;
    address.innerHTML = "Address: " + studentList[i].address.street + " " + studentList[i].address.city + " , " + studentList[i].address.state;
    gpa.innerHTML = "GPA: " + studentList[i].gpa;
    average.innerHTML = "Average GPA: " + studentList[i].average;

//onClick Function to change display info
    btnStudent.addEventListener("click", onClick);
    function onClick(e) {
        i++;
        if (i == studentList.length - 1) {
            btnStudent.removeEventListener("click", onClick);
        }
        name.innerHTML = "Student Name: " + studentList[i].name;
        address.innerHTML = "Address: " + studentList[i].address.street + " " + studentList[i].address.city + " , " + studentList[i].address.state;
        gpa.innerHTML = "GPA: " + studentList[i].gpa;
        average.innerHTML = "Average GPA: " + studentList[i].average;

    }

//Average GPA Calculator
    function gpaCalculator(gpaToCalc) {
        var sum = 0;
        for (i = 0; i < gpaToCalc; i++) {
            sum = sum + gpaToCalc[i];
        }
        return sum / gpaToCalc;
    }

//Adding other students and then console.log of modified data
    addStudent("Zack Rosenka", "1314 Salem Ct.", "Spring Hill", "Fl", [2, 2.5, 3], gpaCalculator(gpa));
    addStudent("Daniel Campos", "32792 University Blvd.", "Winter Park", "Fl", [4, 3, 2.5], gpaCalculator(gpa));
    console.log("*MODIFIED DATA*");
    logFunction();
})();
