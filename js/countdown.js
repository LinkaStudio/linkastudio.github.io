//We create a var countdownDate to the 19 July 2024 13:00:00
var countdownDate = new Date("July 19, 2023 13:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countdownDate - now;

    //We calculate the relative distance of time 
    //We want a 01 years 11 months 24 days 03 hours 13 44 seconds format
    var year = Math.floor(distance / (1000 * 60 * 60 * 24 * 30 * 12));
    var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("countdown").innerHTML = year + " : " + months + " : " + days + " : " + hours + " : " + minutes + " : " + seconds;
})