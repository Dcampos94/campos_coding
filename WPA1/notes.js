/**
 * Created by Daniel on 2/15/14.
 */
(function () {

//var person = {name:"Ortiz", address:{city:"Orlando",state:"FL"},date:""};
//var months = ["jan","feb","march","april","may","june","jul","aug","sept","oct","nov","dec"];
//
//var people = [person];
//
//console.log("orig. data");
//logStuff();
//addPerson("dave","Winter Park","FL");
//
//console.log("new person added");
//logStuff();
//
//
//
////var myButton = document.querySelector("#btn");
////
////myButton.addEventListener("click",onClick);
////
////function onClick(e){
////    logStuff();
////}
//
//
//
//function logStuff(){
//    for(var i = 0; i<people.length; i++){
//        console.log("person's name:"+ people[i].name);
//        console.log("Address: " +people[i].address.city+","+people[i].address.state);
//        console.log("-------------------------------------------");
//    }
//
//}
//
//
//
//function addPerson(n,c,s){
//    var obj = {name:n, address:{city:c,state:s}, date:new Date()};
//    people.push(obj);
//
//}
//
//var myDate = new Date();
//console.log(myDate);
//
//var month2 = months[myDate.getMonth()];
//
//var month= myDate.getMonth()+1;
//var date = myDate.getDate();
//var year = myDate.getFullYear();
//var day = myDate.getDay();
//
//var coolDate = month+"/"+date+"/"+year;
//
//person.date=coolDate;
//
//console.log(person);
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//    var grades= [36,46,52];
//    grades.forEach(function(element){
//        console.log(element);
//    })
//
//    var dice = ~~(Math.random()*11+2);
//
//    switch(dice){
//        case 2:
//            console.log("you rolled a 2");
//            break;
//        case 3:
//            console.log("you rolled a 3");
//            break;
//        default:
//
//    }
//
//    var emailPattern=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//    var btn = document.querySelector("button");
//    var email = document.querySelector("#input");
//
//    btn.addEventListener("click",onClick);
//
//    var pass = emailPattern.test(email);
//
//    if (pass){
//        console.log("Good Job!")
//    }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//    function House(c, a) {
//        this.color = c;
//        this.age = a;
//    }
//
//    var patricksHouse = new House("White", 12);
//    var scottsHouse = new House("Green", 25);
//    scottsHouse.color = "Blue";
//    console.log(patricksHouse.color);
//    console.log(scottsHouse.color);
//
//    var colors = ["Green", "Black", "Blue", "White", "Yellow", "Red", "Brown", "Grey", "Gold", "Pink", "Purple"];
//    var neighborhood = [];
//
//    for (var i = 0; i < 1000; i++) {
//        var color = colors[Math.floor(Math.random()*colors.length)];
//        var house = new House(color, ~~(Math.random()*100));
//        neighborhood.push(house);
//    }
//    listHouses();
//    function listHouses (){
//        for (var i = 0; i<neighborhood.length; i++){
//            console.log("House Number: "+i, neighborhood[i].color,neighborhood[i].age);
//        }
//
//        neighborhood.forEach(function (e) {
//            console.log(e.color, e.age);
//        })
//    }

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//    function Car() {
//        this.color = "";
//        this.doors = "";
//        this.price = 0;
//    }
//
//    var myCar = new Car();
//    myCar.price = 20000;
//
//    var pCar = new Car();
//    pCar.price = 100000;
//
//    var cars = [myCar, pCar];
//    console.log(cars[1].price);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//
//    function Student() {
//        this.name = "";
//        this.studentID = "";
//        this.degree = "";
//        this.grades = [];
//    }
//
//    Student.prototype.average = function () {
//        var total = 0;
//        for (var i = 0; i < this.grades.length; i++) {
//            total += this.grades[i];
//        }
//        return total / this.grades.length;
//
//    };
//    window.Student = Student;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

    var canvas = document.createElement("canvas");  //program in a script tag
    document.body.appendChild(canvas)   //adds the canvas to the DOM
    var ctx = canvas.getContext("2d");   //gain access to the canvas API
    canvas.width = 400;
    canvas.height = 400;

//    //draw line
//    ctx.beginPath();
//    ctx.strokeStyle = "#ff0000";
//    ctx.lineWidth = 2;
//    ctx.moveTo(200, 0);
//    ctx.lineTo(200, 400);
//    ctx.stroke();
//
//    //draw rectangle
//    ctx.beginPath();
//    ctx.fillStyle = "#ff0000";
//    ctx.rect(175, 175, 50, 50);
//    ctx.fill();
//    ctx.lineWidth = 3;
//    ctx.strokeStyle = "black";
//    ctx.stroke();
//
//    //draw circle
//    ctx.beginPath();
//    ctx.fillStyle = "rgb(0.0.255.255)";
//    ctx.strokeStyle = "#000000";
//    ctx.lineWidth = 8;
//    ctx.arc(300, 100, 40, 0, 2*Math.PI)
//    ctx.fill();
//    ctx.stroke();
//
//    //draw triangle
//    ctx.beginPath();
//    ctx.lineWidth = 3;
//    ctx.strokeStyle = "orange";

//    function lineMaker() {
//        ctx.beginPath();
//        ctx.strokeStyle = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
//        ctx.lineWidth = 2;
//        ctx.moveTo(Math.random() * 401, Math.random() * 401);
//        ctx.lineTo(Math.random() * 401, Math.random() * 401);
//        ctx.stroke();
//    }
//
//    function circleMaker() {
//        ctx.beginPath();
//        ctx.fillStyle = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
//        ctx.strokeStyle = "#000000";
//        ctx.lineWidth = 2;
//        ctx.arc(Math.random()*400, Math.random()*400, Math.random()*40*10, 0, 2*Math.PI);
//        ctx.stroke();
//        ctx.fill();
//    }
//    for (i = 0; i < 1000; i++) {
//        circleMaker()
//    }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

    //FINAL REVIEW
    var stud = new Student();
    stud.grades = [10, 20, 30];
    var avg = stud.average();
    console.log(stud.grades,avg);


})();