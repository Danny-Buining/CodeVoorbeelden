
function getCountries() {
$.getJSON("https://restcountries.com/v2/all", function(countryJson){
    console.log(countryJson);
    showCountries(countryJson); 
});

function showCountries(countriesJson) {
        let countries = "";

        for(let i = 0; i < countriesJson.length; i++) {
            let htmlborders = "";
            if(countriesJson[i].borders) {
                for(let y = 0; y < countriesJson[i].borders.length; y++) {
                    htmlborders += countriesJson[i].borders[y] + "<br>";
                }
            }

            countries +=
            "<tr>" 
                + "<td>"
                    + countriesJson[i].name
                + "</td>"
                + "<td>"
                    + "<img src='" + countriesJson[i].flag + "' class='flagStyle'>" 
                + "</td>"
                + "<td>"
                    + htmlborders
                + "</td>"
            + "</tr>"
        }

        document.getElementById("test").innerHTML = countries;
    }
}
