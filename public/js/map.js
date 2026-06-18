const map = new mapboxgl.Map({
  accessToken: mapToken,
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates,
  zoom: 9,
});


const el = document.createElement("img");
el.src = "/images/location.png";
el.style.width = "40px";
el.style.height = "40px";

new mapboxgl.Marker(el)
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 })
      .setHTML(`
        <h4>${listing.title}</h4>
        <p>Destination!</p>
      `)
      .setMaxWidth("300px")
  )
  .addTo(map);