// Initialize and add the map
function initMap() {
    // The location of temasek_poly
    const temasek_poly = { lat: 1.345287, lng: 103.931779 };
    // The map, centered at temasek_poly
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: temasek_poly,
    });
    // The marker, positioned at temasek_poly
    const marker = new google.maps.Marker({
      position: temasek_poly,
      map: map,
    });
  }