$(document).ready(function () {
    var randomNumber = 0;
    var count = 0;
    var wins = 0;
    var losses = 0;
    var numberOptions = [];
    var images = ["assets/images/crystal1.png", "assets/images/crystal2.png", "assets/images/crystal3.png", "assets/images/crystal4.png"];
    var crystal = $("#image-wrapper");


    function pickRandomNumber() {
        randomNumber = Math.floor(Math.random() * 102) + 19;
        $("#random-number").text(randomNumber);
    }
    pickRandomNumber();

    function pickNumberOptions() {
        for (var i = 0; i < 4; i++) {
            var genNumber = Math.floor(Math.random() * 9) + 1;
            numberOptions.push(genNumber);
        }
        // console.log(numberOptions);
    }
    pickNumberOptions();

    function genImages() {
        for (var i = 0; i < numberOptions.length; i++) {
            var imageOfCrystal = $("<img>");
            imageOfCrystal.addClass("crystal-image");
            for (var j = 0; j < images.length; j++) {
                var newImage = images[j];
                imageOfCrystal.attr("src", newImage);
            }
            imageOfCrystal.attr("data-crystalvalue", numberOptions[i]);
            crystal.append(imageOfCrystal);
        }

    }
    genImages();

    crystal.on("click", ".crystal-image", function () {
        var crystalValue = $(this).attr("data-crystalvalue");
        // 
        crystalValue = parseInt(crystalValue);
        count += crystalValue;
        $("#score").text(count);
        if (count === randomNumber) {
            wins++;
            $("#wins").text(wins);
            reset();
            // console.log("win");      
        } else if (count >= randomNumber) {
            losses++;
            $("#losses").text(losses);
            // console.log("loss");
            reset();
        }
    })
    console.log(randomNumber);
    console.log(numberOptions);
    console.log(count);


    function reset() {
        randomNumber = 0;
        count = 0;
        numberOptions = [];
        $(".crystal-image").remove();
        $("#random-number").text("");
        $("#score").text(count);
        pickRandomNumber();
        pickNumberOptions();
        genImages();
       



        console.log(randomNumber);
        console.log(numberOptions);
        console.log(count);


    }


})