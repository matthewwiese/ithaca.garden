const map = L.map('map').setView([42.443333, -76.5], 12);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012' }
).addTo(map);

const gardens = await (await fetch('./gardens.json')).json();
for (const garden of gardens) {
    const socials = garden.socials.map(social => {
        return `<a href="${Object.values(social)[0]}">${Object.keys(social)[0]}</a>`
    }).join(' · ');
    console.log(socials);
    L.marker([garden.lat, garden.long]).addTo(map).bindPopup(`<div><strong>${garden.name}</strong>
    ${garden.address}
    <p>${garden.description}</p>
    <a href="${garden.website}">website</a> · <a href="${garden.maps}">google maps</a> · ${socials}</div>`);
}