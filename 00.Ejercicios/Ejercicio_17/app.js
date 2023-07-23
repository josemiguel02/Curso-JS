const mapElement = document.getElementById('map')

const UK_POSITION = {
  lat: 55.378051,
  lng: -3.435973
}

const GER_POSITION = {
  lat: 51.165691,
  lng: 10.451526
}

const FR_POSITION = {
  lat: 46.227638,
  lng: 2.213749
}

function initMap() {
  const { Map, Marker } = google.maps

  const map = new Map(mapElement, {
    zoom: 4,
    center: UK_POSITION
  })

  new Marker({
    position: UK_POSITION,
    map
  })

  new Marker({
    position: GER_POSITION,
    map
  })

  new Marker({
    position: FR_POSITION,
    map
  })
}
