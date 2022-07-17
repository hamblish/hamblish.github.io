"use strict";
var current_date = new Date();
document.getElementById("current_year").innerText= current_date.getFullYear();
function togglemenu() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
};