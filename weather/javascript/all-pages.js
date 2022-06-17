"use strict";
var current_date = new Date();
var date_string =current_date.toLocaleString('en-us', {  weekday: "long", day: "numeric", month: "long", year:"numeric" })
date_string = date_string.replace(",", "")
date_string = date_string.replace(",", "")
let date_array = date_string.split(" ")
document.getElementById("cur_date").innerText = date_array[0] + ", " + date_array[2] + " " + date_array[1] + " " + date_array[3]
document.getElementById("current_year").innerText= current_date.getFullYear();
function togglemenu() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
};