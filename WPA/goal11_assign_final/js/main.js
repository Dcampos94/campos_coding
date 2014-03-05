/*
 * Mid Terms for PWA-1
 */
//Daniel Campos
(function () {

    var student1 = new Student("Andrew Reiter", "1304 Salem Ct.", "Spring Hill", "Florida", [2.5, 3, 3.5]);
    var studentList = [];
    var i = 0;

//    Displaying Original Data
    console.log("*ORIGINAL DATA*");

    student1.averageCalc();
    studentList.push(student1);

    logFunction();

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


//Adding other students and then console.log of modified data
    var student2 = new Student("Zack Rosenka", "1314 Salem Ct.", "Spring Hill", "Florida", [2, 2.5, 3]);
    student2.averageCalc();
    studentList.push(student2);
    var student3 = new Student("Daniel Campos", "32792 University Blvd.", "Winter Park", "Florida", [4, 3.5, 4]);
    student3.averageCalc();
    studentList.push(student3);
    var student4 = new Student("Matt Burkett", "32792 University Blvd.", "Winter Park", "Florida", [3, 5, 4]);
    student4.averageCalc();
    studentList.push(student4);
    console.log("*MODIFIED DATA*");
    logFunction();
})();
