/*
    Created: 7/13/2019
    Author: John Devine
    Description: Personal site JavaScript
    Last Updated: 7/14/2019
 */

// Change greeting on index page to reflect time of day
function setGreeting() {
    let dateNow = new Date();
    let hourNow = dateNow.getHours();
    let greetingEl = document.getElementById("greeting");
    let greeting = "Good Day!";

    if (hourNow >= 3 && hourNow <= 11) {
        greeting = "Good Morning!";
    } else if (hourNow >= 12 && hourNow <= 17) {
        greeting = "Good Afternoon!";
    } else if ((hourNow >= 18 && hourNow <= 23) || (hourNow >= 0 && hourNow <= 2)) {
        greeting = "Good Evening!";
    }

    // If there's a greeting element id, change greeting
    if (greetingEl) {
        greetingEl.innerHTML = greeting;
    }
}
// Set greeting on index page
setGreeting();

// DOM built
window.onload = function () {
    // Add box shadow on fixed header (mobile viewport) when scroll past top
    $(window).scroll(function() {
        if ($(window).scrollTop() > 15) {
            $('header').addClass('header-shadow');
        } else {
            $('header').removeClass('header-shadow');
        }
    });
    // Toggle expandable/accordian class
    $(".expand-title").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("with-border");
        $(this).children(".material-icons").toggleClass("rotate135");
        $(this).next().toggleClass("display-block");
    });
}