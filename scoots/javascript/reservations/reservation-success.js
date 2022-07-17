const queryString = window.location.search;
const urlString = new URLSearchParams(queryString);
var paragraphHTML = ""
document.getElementById("confirm-paragraph").innerHTML = ""
if (urlString.get("name") != ""){
    paragraphHTML += `Name: ${urlString.get("name")}<br>`
}
if (urlString.get("country") != ""){
    paragraphHTML += `Country of Origin: ${urlString.get("country")}<br>`
}
if (urlString.get("email") != ""){
    paragraphHTML += `Email: ${urlString.get("email")}<br>`
}
if (urlString.get("phone") != ""){
    paragraphHTML += `Phone: ${urlString.get("phone")}<br>`
}

if (urlString.get("cruise") != "on"){
    if (urlString.get("cruise-line") != ""){
        paragraphHTML += `Cruise Line: ${urlString.get("cruise-line")}<br>`
    }
}
if (urlString.get("scooter-model") != ""){
    let scooterModel = urlString.get("scooter-model")
    if (scooterModel == "metro"){
        paragraphHTML += `Scooter Model: Honda Metro Scooter<br>`
    }
    else if (scooterModel == "dio"){
        paragraphHTML += `Scooter Model: Honda Dio Scooter<br>`
    }
    else if (scooterModel == "pcx150"){
        paragraphHTML += `Scooter Model: Honda PCX150 Scooter<br>`
    }
    else if (scooterModel == "pioneer"){
        paragraphHTML += `Scooter Model: Honda Pioneer ATV<br>`
    }
    else if (scooterModel == "2door"){
        paragraphHTML += `Scooter Model: Jeep Wrangler—2 Door<br>`
    }
    else if (scooterModel == "4door"){
        paragraphHTML += `Scooter Model: Jeep Wrangler—4 Door with A/C<br>`
    }
}
if (urlString.get("scooter-count") != ""){
    paragraphHTML += `Scooter Count: ${urlString.get("scooter-count")}<br>`
}
if (urlString.get("location-select") == "main"){
    paragraphHTML += `Pickup Location: Playa del Carmen-Cozumel Ferry Dock<br>`
}
else if (urlString.get("location-select") == "secondary"){
    paragraphHTML += `Pickup Location: Puerta Maya Cruise Ship Terminal<br>`
}
else if (urlString.get("location-select") == "other"){
    paragraphHTML += `Dropoff Location: ${urlString.get("street-address")}<br>`
}
if (urlString.get("rental-type") != ""){
    if (urlString.get("rental-type") == "half"){
        paragraphHTML += `Rental Day Length: Half-Day<br>`
    }
    else if(urlString.get("rental-type") == "full"){
        paragraphHTML += `Rental Day Length: Full-Day<br>`
    }
}
if (urlString.get("rental-start") != ""){
    paragraphHTML += `Rental Start Date: ${urlString.get("rental-start")}<br>`
}
if (urlString.get("rental-end") != ""){
    paragraphHTML += `Rental End Date: ${urlString.get("rental-end")}<br>`
}
document.getElementById("confirm-paragraph").innerHTML = paragraphHTML