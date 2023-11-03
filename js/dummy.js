// for the map for Baklava
var mapBaklava = L.map('mapBaklava').setView([45.4397, 15.9434], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(mapBaklava);

// Marker for Edirne
L.marker([41.6772, 26.5550]).addTo(mapBaklava)
    .bindPopup('Edirne, Turkey')
    .openPopup();

// Marker for Topkapı Palace in Istanbul
L.marker([41.0116, 28.9834]).addTo(mapBaklava)
    .bindPopup('Topkapı Palace, Istanbul')
    .openPopup();

// Marker for Şuhut, Afyonkarahisar
L.marker([38.7367, 30.5392]).addTo(mapBaklava)
    .bindPopup('Şuhut, Afyonkarahisar')
    .openPopup();

// Marker for Istanbul
L.marker([41.0082, 28.9784]).addTo(mapBaklava)
    .bindPopup('Istanbul, Turkey')
    .openPopup();

// Marker for Şanlıurfa
L.marker([37.1671, 38.7937]).addTo(mapBaklava)
    .bindPopup('Şanlıurfa, Turkey')
    .openPopup();

// Marker for Ankara
L.marker([39.9334, 32.8597]).addTo(mapBaklava)
    .bindPopup('Ankara, Turkey')
    .openPopup();

// Marker for UK
L.marker([51.5074, -0.1278]).addTo(mapBaklava)
    .bindPopup('United Kingdom')
    .openPopup();

// Marker for Austria
L.marker([48.2082, 16.3738]).addTo(mapBaklava)
    .bindPopup('Austria')
    .openPopup();

// Marker for Iran
L.marker([32.4279, 53.6880]).addTo(mapBaklava)
    .bindPopup('Iran')
    .openPopup();

// Marker for Belgrade
L.marker([44.7866, 20.4489]).addTo(mapBaklava)
    .bindPopup('Belgrade')
    .openPopup();

// Marker for Lebanon
L.marker([33.8547, 35.8623]).addTo(mapBaklava)
    .bindPopup('Lebanon')
    .openPopup();

// Marker for Algeria
L.marker([28.0339, 1.6596]).addTo(mapBaklava)
    .bindPopup('Algeria')
    .openPopup();

// Marker for Armenia
L.marker([40.0691, 45.0382]).addTo(mapBaklava)
    .bindPopup('Armenia')
    .openPopup();

// Marker for Greece
L.marker([37.9838, 23.7275]).addTo(mapBaklava)
    .bindPopup('Greece')
    .openPopup();

// Marker for Cyprus
L.marker([35.1264, 33.4299]).addTo(mapBaklava)
    .bindPopup('Cyprus')
    .openPopup();

// Marker for Azerbaijan
L.marker([40.1431, 47.5769]).addTo(mapBaklava)
    .bindPopup('Azerbaijan')
    .openPopup();

