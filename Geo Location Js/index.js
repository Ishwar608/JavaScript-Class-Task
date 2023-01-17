

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log( "Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  let obj = {};

   let lag = position.coords.latitude ; 
    let log = position.coords.longitude;
   obj['lat'] = lag;
   obj['lng'] = log;
   
   initMap(obj)
}
getLocation();

// Initialize and add the map
function initMap(text) {
    // console.log(text);
  // The location of Uluru
    const uluru = text;
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 30,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;


