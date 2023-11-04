
//Didnt add Turkey as a pin to the map 
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




// for the map for food-cities
var mapFood = L.map('mapFood').setView([45.4397, 15.9434], 3); // Centered on Europe and Asia, lower zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapFood);

// Marker for France
L.marker([48.8566, 2.3522]).addTo(mapFood)
    .bindPopup('France')
    .openPopup();

// Marker for China
L.marker([35.8617, 104.1954]).addTo(mapFood)
    .bindPopup('China')
    .openPopup();

// Marker for Gaziantep
L.marker([37.0662, 37.3833]).addTo(mapFood)
    .bindPopup('Gaziantep, Turkey')
    .openPopup();

// Marker for Syria
L.marker([34.8021, 38.9968]).addTo(mapFood)
    .bindPopup('Syria')
    .openPopup();

// Marker for Antakya
L.marker([36.2066, 36.1572]).addTo(mapFood)
    .bindPopup('Antakya, Turkey')
    .openPopup();

// Marker for Antalya
L.marker([36.8969, 30.7133]).addTo(mapFood)
    .bindPopup('Antalya, Turkey')
    .openPopup();

// Marker for Konya
L.marker([37.8714, 32.5023]).addTo(mapFood)
    .bindPopup('Konya, Turkey')
    .openPopup();

// Marker for Trabzon
L.marker([41.0053, 39.7248]).addTo(mapFood)
    .bindPopup('Trabzon, Turkey')
    .openPopup();

// Marker for Black Sea
L.marker([42.0000, 35.0000]).addTo(mapFood)
    .bindPopup('Black Sea')
    .openPopup();

// Marker for İzmir
L.marker([38.4192, 27.1287]).addTo(mapFood)
    .bindPopup('İzmir, Turkey')
    .openPopup();

// Marker for Adana
L.marker([37.0000, 35.3213]).addTo(mapFood)
    .bindPopup('Adana, Turkey')
    .openPopup();

// Marker for Seyhan River
L.marker([37.0000, 35.3213]).addTo(mapFood)
    .bindPopup('Seyhan River, Turkey')
    .openPopup();

// Marker for Istanbul
L.marker([41.0082, 28.9784]).addTo(mapFood)
    .bindPopup('Istanbul, Turkey')
    .openPopup();



// for the map for Rakı
var mapRaki = L.map('mapRaki').setView([45.4397, 15.9434], 3); // Centered on Europe and Asia, lower zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapRaki);

// Marker for Iraq
L.marker([33.3152, 44.3661]).addTo(mapRaki)
    .bindPopup('Iraq')
    .openPopup();

// Marker for Sicilia (Sicily)
L.marker([37.5998, 14.0154]).addTo(mapRaki)
    .bindPopup('Sicilia (Sicily)')
    .openPopup();

// Marker for Trabzon
L.marker([41.0053, 39.7248]).addTo(mapRaki)
    .bindPopup('Trabzon, Turkey')
    .openPopup();

// Marker for İzmir
L.marker([38.4192, 27.1287]).addTo(mapRaki)
    .bindPopup('İzmir, Turkey')
    .openPopup();

// Marker for Bodrum
L.marker([37.0359, 27.4303]).addTo(mapRaki)
    .bindPopup('Bodrum, Turkey')
    .openPopup();

// Marker for İstanbul
L.marker([41.0082, 28.9784]).addTo(mapRaki)
    .bindPopup('Istanbul, Turkey')
    .openPopup();

// Marker for Aegean Region
L.marker([37.9000, 27.2500]).addTo(mapRaki)
    .bindPopup('Aegean Region, Turkey')
    .openPopup();

// Marker for Marmara Region
L.marker([40.7500, 29.5000]).addTo(mapRaki)
    .bindPopup('Marmara Region, Turkey')
    .openPopup();

// Marker for Black Sea
L.marker([42.0000, 35.0000]).addTo(mapRaki)
    .bindPopup('Black Sea')
    .openPopup();

// Marker for Portugal
L.marker([38.7223, -9.1393]).addTo(mapRaki)
    .bindPopup('Portugal')
    .openPopup();

// Marker for France
L.marker([48.8566, 2.3522]).addTo(mapRaki)
    .bindPopup('France')
    .openPopup();

// Marker for Spain
L.marker([40.4168, -3.7038]).addTo(mapRaki)
    .bindPopup('Spain')
    .openPopup();

// Marker for Macedonia
L.marker([41.6086, 21.7453]).addTo(mapRaki)
    .bindPopup('Macedonia')
    .openPopup();

// Marker for Albania
L.marker([41.3275, 19.8187]).addTo(mapRaki)
    .bindPopup('Albania')
    .openPopup();


