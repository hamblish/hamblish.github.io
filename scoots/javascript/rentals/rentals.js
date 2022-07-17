"use strict"
async function rentalCards(){
    let response = await fetch("files/scoots_rentals.json")
    let data = await response.json()
    data.forEach(rental => {
        let mainDiv = document.getElementById("rental-cards")
        let section = document.createElement("section")
        section.setAttribute("class", "rentalCard")
        let heading = document.createElement("h2")
        heading.textContent = rental.name
        section.appendChild(heading)
        let img = document.createElement("img")
        img.setAttribute("alt", `${rental.name}`)
        img.setAttribute("src", `${rental.image}`)
        section.appendChild(img)
        let table = document.createElement("table")
        table.innerHTML=`<tr><th>Capacity</th><th colspan="2">Reservations</th><th colspan="2">Walk-Ins</th></tr><tr><th>&#8203;</th><th>Half-Day</th><th>Full-Day</th><th>Half-Day</th><th>Full-Day</th></tr><tr><td>${rental.capacity}</td><td>$${rental.reservation.half}</td><td>$${rental.reservation.full}</td><td>$${rental.walk.half}</td><td>$${rental.walk.full}</td></tr>`
        section.appendChild(table)
        let rentalDiv = document.createElement("div")
        rentalDiv.innerHTML = `<div><a href="reservations.html${rental.halfquery}">Reserve Half-Day</a></div><div><a href="reservations.html${rental.fullquery}">Reserve Full-Day</a></div>`
        rentalDiv.setAttribute("class", "rentalDiv")
        section.appendChild(rentalDiv)
        mainDiv.appendChild(section)
    });
}
rentalCards()