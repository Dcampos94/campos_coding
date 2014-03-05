//Daniel

console.log("Dom stuff started");

(function () {

    var big = document.querySelector("#big");
    var med = document.querySelector("#med");
    var btn = document.querySelector("button");


    btn.addEventListener("click" ,onClick);

    function onClick(e){
        big.innerHTML = "Kewl";

        med.innerHTML = "Pizza";
    }

})();
