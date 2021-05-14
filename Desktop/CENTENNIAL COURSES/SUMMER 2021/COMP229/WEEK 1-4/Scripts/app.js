// IIFE -- immediately invoked function expression
"use strict";
(function(){

    function Start()
    {
        let myVariable =20;
        console.log("my number is: " + myVariable);
    }
    window.addEventListener("load", Start);
})();


