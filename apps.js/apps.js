function fillCity() {
    var cityName = ""; 
    var zipEntered = document.getElementById("zip").value.trim(); 

    switch (zipEntered) {
        case "60608": 
        cityName = "Chicago, USA"; 
        break;
        case "68114": 
        cityName = "Omaha, USA"; 
        break;
        case "53212": 
        cityName = "Milwaukee, USA"; 
        break;
        case "110001": 
        cityName = "Delhi, India";
         break;
        case "110011": 
        cityName = "New Delhi, India";
         break;
        case "N1A 1A1":
         cityName = "Ottawa, Canada"; 
         break;
        case "M5A 1A1": 
        cityName = "Toronto, Canada";
         break;
        case "20001":
         cityName = "Washington, D.C., USA"; 
         break;
        case "10115": 
        cityName = "Berlin, Germany"; 
        break;
        case "75001":
         cityName = "Irving, TX, USA";
          break;
        case "70000": 
        cityName = "Paris, France"; 
        break;
        case "12345":
        cityName = "Schenectady, NY, USA"; 
         break;
        case "10001": 
        cityName = "New York City, USA"; 
        break;
       case "20001": 
          cityName = "Washington, D.C., USA"; 
          break;
       case "75001":
           cityName = "Plano, Texas, USA"; 
            break;

        default:
            cityName = "City not found for this ZIP Code";
    }

 
    document.getElementById("city").value = cityName;
    document.getElementById("result").textContent = cityName ? "" : "Please enter a valid ZIP code.";
}
