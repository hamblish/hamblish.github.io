const queryString = window.location.search;
const urlString = new URLSearchParams(queryString);
if (queryString != ""){
    const rental = urlString.get("rental");
    document.getElementById("scooter-model").value = rental
    const time = urlString.get("length");
    let elements = document.getElementsByName("rental-type")
    for (i=0;i<elements.length;i++) {
        if(elements[i].value == time) {
          elements[i].checked = true;
        }
      }
}
function displayRemoveOther() {
    var otherLoc = document.getElementById("otherLoc");
    var otherAddress = document.getElementById("otherAddress");
    if (otherLoc.checked){
        otherAddress.classList.add("shown")
        document.getElementById("streetAddress").setAttribute("required","required")
    }
    else{
        otherAddress.classList.remove("shown")
        document.getElementById("streetAddress").value=""
        document.getElementById("streetAddress").removeAttribute("required")
    }
}
function adjustStartDateMin(){
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1)
    document.getElementById("rentalStartDate").setAttribute("min", tomorrow.toISOString().substring(0,10))
}
function adjustEndDateMin() {
    document.getElementById("rentalEndDate").setAttribute("min", document.getElementById("rentalStartDate").value)
    if (document.getElementById("half-day").checked){
        if (document.getElementById("rentalStartDate").value != ""){
            document.getElementById("rentalEndDate").setAttribute("max", document.getElementById("rentalStartDate").value)
            document.getElementById("rentalEndDate").value = document.getElementById("rentalStartDate").value
        }
    }
    else{
        if (document.getElementById("rentalStartDate").value != ""){
        document.getElementById("rentalEndDate").removeAttribute("max")
        }
    }
}
function displayRemoveCruiseLine(){
    var cruise = document.getElementById("cruise");
    var cruiseLine = document.getElementById("cruise-line");
    if (cruise.checked){
        cruiseLine.classList.add("shown")
        document.getElementById("cruise-line-name").setAttribute("required","required")
    }
    else{
        cruiseLine.classList.remove("shown")
        document.getElementById("cruise-line-name").value=""
        document.getElementById("cruise-line-name").removeAttribute("required")
    }
}
adjustStartDateMin()
document.getElementById("rentalStartDate").addEventListener('input', adjustEndDateMin);
document.getElementById("half-day").addEventListener('input', adjustEndDateMin);
document.getElementById("full-day").addEventListener('input', adjustEndDateMin);