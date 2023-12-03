const map = L.map('map').setView([42.443333, -76.5], 12);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012' }
).addTo(map);

const gardens = await (await fetch('./gardens.json')).json();
for (const garden of gardens) {
    L.marker([garden.lat, garden.long]).addTo(map).bindPopup(garden.name);
}