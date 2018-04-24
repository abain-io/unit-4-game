$(document).ready(function() {
    var randomNumber = 0
    var count = 0
    var wins = 0
    var losses = 0
    var numberOptions = []


    function pickRandomNumber(){
        randomNumber = Math.floor(Math.random() * 102) + 19; 
        $("#random-number").text(randomNumber);
    }
    pickRandomNumber();

    function pickNumberOptions() {
        for (var i = 0; i < 4; i++) {
            var genNumber = Math.floor(Math.random() *9) + 1;
            numberOptions.push(genNumber);
        }
        console.log(numberOptions);      
    }
    pickNumberOptions();


})