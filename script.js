// ==============================
// WMO WEERCODES → emoji + beschrijving
// Open-Meteo geeft een getal terug dat het weertype aangeeft
// ==============================
const weatherCodes = {
  0:  { icon: '☀️',  desc: 'Helder' },
  1:  { icon: '🌤️', desc: 'Overwegend helder' },
  2:  { icon: '⛅',  desc: 'Gedeeltelijk bewolkt' },
  3:  { icon: '☁️',  desc: 'Bewolkt' },
  45: { icon: '🌫️', desc: 'Mist' },
  48: { icon: '🌫️', desc: 'IJsmist' },
  51: { icon: '🌦️', desc: 'Lichte motregen' },
  53: { icon: '🌦️', desc: 'Motregen' },
  55: { icon: '🌧️', desc: 'Zware motregen' },
  61: { icon: '🌧️', desc: 'Lichte regen' },
  63: { icon: '🌧️', desc: 'Regen' },
  65: { icon: '🌧️', desc: 'Zware regen' },
  71: { icon: '🌨️', desc: 'Lichte sneeuw' },
  73: { icon: '❄️',  desc: 'Sneeuw' },
  75: { icon: '❄️',  desc: 'Zware sneeuw' },
  80: { icon: '🌦️', desc: 'Lichte buien' },
  81: { icon: '🌧️', desc: 'Buien' },
  82: { icon: '⛈️',  desc: 'Zware buien' },
  95: { icon: '⛈️',  desc: 'Onweer' },
  99: { icon: '⛈️',  desc: 'Onweer met hagel' },
};

// ==============================
// DATA: vakantiebestemmingen
// Foto's via Unsplash (gratis, geen API key nodig)
// Formaat: https://images.unsplash.com/photo-ID?w=800&q=80
// ==============================
const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Griekenland",
    continent: "Europa",
    flag: "🇬🇷",
    color: "#1a6b9a",
    photo: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    description: "Santorini is een vulkanisch eiland in de Egeïsche Zee, bekend om zijn dramatische kliffen, iconische witte gebouwen met blauwe koepels en spectaculaire zonsondergangen. Het stadje Oia trekt elk jaar miljoenen bezoekers.",
    stats: { temp: "27°C", flight: "3u 30m", budget: "€€€" },
    highlights: [
      "Zonsondergang in Oia bekijken",
      "Zwemmen bij het zwarte zandstrand",
      "Wijnproeverijen bij lokale wijngaarden",
      "Boottocht naar de vulkaan",
      "Authentieke Griekse tavernas"
    ],
    tip: "Bezoek buiten het hoogseizoen (april–mei of september–oktober) voor rustigere straten en lagere prijzen.",
    lat: 36.3932,
    lng: 25.4615
  },
  {
    id: 2,
    name: "Kyoto",
    country: "Japan",
    continent: "Azië",
    flag: "🇯🇵",
    color: "#8b3a3a",
    photo: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    description: "Kyoto was duizend jaar lang de keizerlijke hoofdstad van Japan en is vandaag de dag het culturele hart van het land. Met meer dan 1.600 boeddhistische tempels, eeuwenoude geisha-wijken en prachtige Japanse tuinen is Kyoto een absolute must-see.",
    stats: { temp: "22°C", flight: "12u 00m", budget: "€€€" },
    highlights: [
      "Fushimi Inari — duizend rode tori-poorten",
      "Arashiyama bamboebos",
      "Gion-wijk — geishas spotten",
      "Kinkaku-ji Gouden Paviljoen",
      "Kersenbloesem in het Maruyama Park"
    ],
    tip: "Huur een fiets — dit is verreweg de beste manier om de tempels en wijken te ontdekken.",
    lat: 35.0116,
    lng: 135.7681
  },
  {
    id: 3,
    name: "Marrakech",
    country: "Marokko",
    continent: "Afrika",
    flag: "🇲🇦",
    color: "#b5631a",
    photo: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80",
    description: "Marrakech is een betoverende mix van geuren, kleuren en geluiden. De duizend jaar oude medina met zijn kronkelende souks, weelderige riads en het bruisende Djemaa el-Fna-plein is UNESCO-werelderfgoed.",
    stats: { temp: "30°C", flight: "3u 00m", budget: "€€" },
    highlights: [
      "Dwalen door de souks van de medina",
      "Djemaa el-Fna — het grote plein",
      "Majorelle Tuin — stralend blauw",
      "Overnachten in een traditionele riad",
      "Dagtocht naar de Atlasgebergte"
    ],
    tip: "Onderhandel altijd over de prijs in de souks — de eerste prijs is nooit de echte prijs.",
    lat: 31.6295,
    lng: -7.9811
  },
  {
    id: 4,
    name: "Bali",
    country: "Indonesië",
    continent: "Azië",
    flag: "🇮🇩",
    color: "#2d7a4f",
    photo: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    description: "Bali is het 'eiland der goden' — een tropisch paradijs met rijstterrassen, hindoetempels, vulkanen en smetteloze stranden. Van de surfspoton Kuta tot het spirituele Ubud, elk hoekje van Bali heeft zijn eigen karakter.",
    stats: { temp: "29°C", flight: "14u 30m", budget: "€" },
    highlights: [
      "Tegalalang rijstterrassen in Ubud",
      "Zonsopgang op de Gunung Batur vulkaan",
      "Tempel Uluwatu boven de kliffen",
      "Surflessen op de stranden van Kuta",
      "Balinese kookworkshop"
    ],
    tip: "Huur een scooter voor maximale vrijheid — maar rij voorzichtig! De wegen zijn smal.",
    lat: -8.3405,
    lng: 115.0920
  },
  {
    id: 5,
    name: "New York",
    country: "Verenigde Staten",
    continent: "Amerika",
    flag: "🇺🇸",
    color: "#2c3e6b",
    photo: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80",
    description: "New York is de stad die nooit slaapt. Van de skyline van Manhattan tot de bruisende buurten Brooklyn en Harlem — elke wijk heeft zijn eigen verhaal. Wereldklasse musea, Broadway-shows en eindeloze energie.",
    stats: { temp: "18°C", flight: "8u 30m", budget: "€€€€" },
    highlights: [
      "Central Park — 843 hectare stadsoase",
      "Times Square & Broadway shows",
      "MoMA & Metropolitan Museum",
      "Brooklyn Bridge wandeling",
      "High Line park in Chelsea"
    ],
    tip: "Koop een metrokaart voor meerdere dagen — goedkoper en sneller dan taxi's in de stad.",
    lat: 40.7128,
    lng: -74.0060
  },
  {
    id: 6,
    name: "Tromsø",
    country: "Noorwegen",
    continent: "Europa",
    flag: "🇳🇴",
    color: "#1a3a5c",
    photo: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    description: "Tromsø, gelegen ver boven de poolcirkel, is de beste plek in Europa om het noorderlicht te aanschouwen. In de winter biedt de poolnacht een magische sfeer, terwijl de middernachtzon in de zomer voor een onwerkelijk schouwspel zorgt.",
    stats: { temp: "-2°C", flight: "3u 30m", budget: "€€€€" },
    highlights: [
      "Noorderlicht jacht (okt–maart)",
      "Husky-sledgetocht door de toendra",
      "Middernachtzon in de zomer",
      "Arctic Cathedral — architectuurparel",
      "Walvissen spotten in de fjorden"
    ],
    tip: "Boek een noorderlicht-tour met een lokale gids — zij weten precies waar en wanneer de kansen het grootst zijn.",
    lat: 69.6492,
    lng: 18.9553
  },
  {
    id: 7,
    name: "Rio de Janeiro",
    country: "Brazilië",
    continent: "Amerika",
    flag: "🇧🇷",
    color: "#1e7a3e",
    photo: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    description: "Rio de Janeiro is een van de meest spectaculaire steden ter wereld. De combinatie van weelderige bergtoppen, uitgestrekte stranden, bruisend nachtleven en de iconische Christus de Verlosser maakt Rio tot een onvergetelijke bestemming.",
    stats: { temp: "28°C", flight: "11u 00m", budget: "€€" },
    highlights: [
      "Christus de Verlosser op de Corcovado",
      "Copacabana en Ipanema strand",
      "Suikerbroodberg — kabelbaan omhoog",
      "Carnaval in februari/maart",
      "Santa Teresa — kunstenaarswijk"
    ],
    tip: "Vermijd het dragen van dure sieraden en houd je waardevolle spullen uit het zicht — wees bewust van je omgeving.",
    lat: -22.9068,
    lng: -43.1729
  }
];

// ==============================
// ACTIEVE FILTER BIJHOUDEN
// ==============================
let activeFilter = 'alle';

// ==============================
// KAARTEN AANMAKEN IN DE GRID
// ==============================
function buildGrid() {
  const grid = document.getElementById('destinationsGrid');
  grid.innerHTML = ''; // leegmaken voor hergebruik bij filteren

  const searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();

  // Filter op continent EN zoekterm
  const filtered = destinations.filter(dest => {
    const matchesFilter = activeFilter === 'alle' || dest.continent === activeFilter;
    const matchesSearch = 
      dest.name.toLowerCase().includes(searchQuery) ||
      dest.country.toLowerCase().includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  // Toon "geen resultaten" melding indien nodig
  const noResults = document.getElementById('noResults');
  if (filtered.length === 0) {
    noResults.style.display = 'block';
    document.getElementById('noResultsQuery').textContent = searchQuery || activeFilter;
  } else {
    noResults.style.display = 'none';
  }

  // Maak een kaart voor elke gefilterde bestemming
  filtered.forEach((dest, index) => {
    const card = document.createElement('div');
    card.className = 'dest-card';

    card.innerHTML = `
      <div class="dest-card-bg" style="background-image: url('${dest.photo}'); background-color: ${dest.color};"></div>
      <span class="dest-card-tag">${dest.continent}</span>
      <div class="dest-card-body">
        <div class="dest-card-flag">${dest.flag}</div>
        <h3 class="dest-card-name">${dest.name}</h3>
        <p class="dest-card-country">${dest.country}</p>
        <span class="dest-card-cta">Ontdek meer →</span>
      </div>
    `;

    // Kaarten verschijnen met kleine vertraging na elkaar
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.4s ease ${index * 0.08}s, transform 0.4s ease ${index * 0.08}s`;

    card.addEventListener('click', () => openModal(dest));
    grid.appendChild(card);

    // Kleine vertraging zodat de animatie werkt
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });
  });
}

// ==============================
// ZOEKFUNCTIE
// ==============================
function filterDestinations() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClear');

  // Toon/verberg het X-knopje
  if (input.value.length > 0) {
    clearBtn.classList.add('visible');
  } else {
    clearBtn.classList.remove('visible');
  }

  buildGrid(); // herlaad de grid met de nieuwe zoekterm
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').classList.remove('visible');
  buildGrid();
}

// ==============================
// CONTINENT FILTER
// ==============================
function setFilter(continent, btn) {
  activeFilter = continent;

  // Verwijder "active" van alle knoppen, voeg toe aan geklikt knopje
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  buildGrid();
}

// ==============================
// LIVE WEER OPHALEN via Open-Meteo
// Gratis API, geen sleutel nodig
// ==============================
async function fetchWeather(dest) {
  const widget = document.getElementById('weatherWidget');
  const loadingEl = document.getElementById('weatherLoading');
  const dataEl = document.getElementById('weatherData');

  // Reset: toon laadstatus
  loadingEl.style.display = 'flex';
  dataEl.style.display = 'none';

  try {
    // Bouw de API URL op met de coördinaten van de bestemming
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${dest.lat}&longitude=${dest.lng}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&wind_speed_unit=kmh&timezone=auto`;
    
    const response = await fetch(url);
    const data = await response.json();
    const current = data.current;

    // Haal het weertype op uit onze tabel
    const weerCode = current.weather_code;
    const weer = weatherCodes[weerCode] || { icon: '🌡️', desc: 'Onbekend' };

    // Vul de widget in met de echte data
    dataEl.innerHTML = `
      <div class="weather-header">
        <span class="weather-label">🌍 Live weer in ${dest.name}</span>
        <span class="weather-label">${new Date().toLocaleTimeString('nl-BE', {hour:'2-digit', minute:'2-digit'})}</span>
      </div>
      <div class="weather-main">
        <span class="weather-icon">${weer.icon}</span>
        <div>
          <div class="weather-temp">${Math.round(current.temperature_2m)}°C</div>
          <div class="weather-desc">${weer.desc}</div>
        </div>
      </div>
      <div class="weather-extras">
        <span class="weather-extra-item">💧 ${current.relative_humidity_2m}% vochtigheid</span>
        <span class="weather-extra-item">💨 ${Math.round(current.wind_speed_10m)} km/u wind</span>
      </div>
    `;

    loadingEl.style.display = 'none';
    dataEl.style.display = 'block';

  } catch (error) {
    // Als het ophalen mislukt, toon een foutmelding
    loadingEl.innerHTML = '⚠️ Weer tijdelijk niet beschikbaar';
  }
}

// ==============================
// MODAL OPENEN
// ==============================
function openModal(dest) {
  // Foto instellen
  const img = document.getElementById('modalHeroImg');
  img.src = dest.photo;
  img.alt = dest.name;

  document.getElementById('modalFlag').textContent = dest.flag;
  document.getElementById('modalTitle').textContent = dest.name;
  document.getElementById('modalSubtitle').textContent = `${dest.country} · ${dest.continent}`;
  document.getElementById('modalDesc').textContent = dest.description;

  // Statistieken
  document.getElementById('modalStats').innerHTML = `
    <div class="stat-item">
      <div class="stat-icon">🌡️</div>
      <div class="stat-value">${dest.stats.temp}</div>
      <div class="stat-label">Gem. temp</div>
    </div>
    <div class="stat-item">
      <div class="stat-icon">✈️</div>
      <div class="stat-value">${dest.stats.flight}</div>
      <div class="stat-label">Vluchttijd</div>
    </div>
    <div class="stat-item">
      <div class="stat-icon">💶</div>
      <div class="stat-value">${dest.stats.budget}</div>
      <div class="stat-label">Budget</div>
    </div>
  `;

  // Hoogtepunten
  const items = dest.highlights.map(h => `<li>${h}</li>`).join('');
  document.getElementById('modalHighlights').innerHTML = `
    <h3 class="highlights-title">Hoogtepunten</h3>
    <ul class="highlights-list">${items}</ul>
  `;

  // Reistrip
  document.getElementById('modalTips').innerHTML = `
    <div class="tips-box">
      <h4>💡 Reistrip</h4>
      <p>${dest.tip}</p>
    </div>
  `;

  // Toon modal
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';

  // Laad live weer voor deze bestemming
  fetchWeather(dest);
}

// ==============================
// MODAL SLUITEN
// ==============================
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);

document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ==============================
// LEAFLET KAART
// ==============================
function buildMap() {
  const map = L.map('map', { center: [20, 20], zoom: 2 });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap bijdragers',
    maxZoom: 18
  }).addTo(map);

  destinations.forEach(dest => {
    const icon = L.divIcon({
      className: '',
      html: `<div style="
        background: ${dest.color};
        color: white;
        width: 36px; height: 36px;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 1.1rem;
        border: 2px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        cursor: pointer;
      ">${dest.flag}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });

    const marker = L.marker([dest.lat, dest.lng], { icon }).addTo(map);

    marker.bindPopup(`
      <div class="map-popup">
        <h3>${dest.flag} ${dest.name}</h3>
        <p>${dest.country} · ${dest.continent}</p>
        <button onclick="openModalById(${dest.id})">Meer info →</button>
      </div>
    `);
  });
}

// Hulpfunctie voor kaart popup
function openModalById(id) {
  const dest = destinations.find(d => d.id === id);
  if (dest) openModal(dest);
}

// ==============================
// START: alles uitvoeren bij laden
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  buildGrid();
  buildMap();
});
