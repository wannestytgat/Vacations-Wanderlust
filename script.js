// ==============================
// DATA: alle vakantiebestemmingen
// Voeg hier eenvoudig nieuwe bestemmingen toe!
// ==============================
const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Griekenland",
    continent: "Europa",
    flag: "🇬🇷",
    color: "#1a6b9a",           // kleur voor de modal header
    description: "Santorini is een vulkanisch eiland in de Egeïsche Zee, bekend om zijn dramatische kliffen, iconische witte gebouwen met blauwe koepels en spectaculaire zonsondergangen. Het stadje Oia trekt elk jaar miljoenen bezoekers die komen voor de unieke sfeer en uitzichten.",
    stats: {
      temp: "27°C",
      flight: "3u 30m",
      budget: "€€€"
    },
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
    description: "Kyoto was duizend jaar lang de keizerlijke hoofdstad van Japan en is vandaag de dag het culturele hart van het land. Met meer dan 1.600 boeddhistische tempels, eeuwenoude geisha-wijken en prachtige Japanse tuinen is Kyoto een absolute must-see.",
    stats: {
      temp: "22°C",
      flight: "12u 00m",
      budget: "€€€"
    },
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
    description: "Marrakech is een betoverende mix van geuren, kleuren en geluiden. De duizend jaar oude medina met zijn kronkelende souks, weelderige riads en het bruisende Djemaa el-Fna-plein is UNESCO-werelderfgoed. Een stad die al je zintuigen prikkelt.",
    stats: {
      temp: "30°C",
      flight: "3u 00m",
      budget: "€€"
    },
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
    description: "Bali is het 'eiland der goden' — een tropisch paradijs met rijstterrassen, hindoetempels, vulkanen en smetteloze stranden. Van de surfspoton Kuta tot het spirituele Ubud, elk hoekje van Bali heeft zijn eigen karakter en magie.",
    stats: {
      temp: "29°C",
      flight: "14u 30m",
      budget: "€"
    },
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
    description: "New York is de stad die nooit slaapt. Van de skyline van Manhattan tot de bruisende buurten Brooklyn, Harlem en Greenwich Village — elke wijk heeft zijn eigen verhaal. Wereld­klasse musea, Broadway-shows, iconische restaurants en eindeloze energie.",
    stats: {
      temp: "18°C",
      flight: "8u 30m",
      budget: "€€€€"
    },
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
    description: "Tromsø, gelegen ver boven de poolcirkel, is de beste plek in Europa om het noorderlicht te aanschouwen. In de winter biedt de poolnacht een magische sfeer, terwijl de middernachtzon in de zomer voor een onwerkelijk schouwspel zorgt.",
    stats: {
      temp: "-2°C",
      flight: "3u 30m",
      budget: "€€€€"
    },
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
  }
];

// ==============================
// KAARTEN AANMAKEN IN DE GRID
// ==============================
function buildGrid() {
  const grid = document.getElementById('destinationsGrid');
  
  // Loop door alle bestemmingen en maak een kaart per bestemming
  destinations.forEach((dest, index) => {
    const card = document.createElement('div');
    card.className = 'dest-card';
    
    // Achtergrond kleur (per bestemming anders)
    card.innerHTML = `
      <div class="dest-card-bg" style="background: linear-gradient(145deg, ${dest.color}cc, ${dest.color}66, #1a1410);"></div>
      <span class="dest-card-tag">${dest.continent}</span>
      <div class="dest-card-body">
        <div class="dest-card-flag">${dest.flag}</div>
        <h3 class="dest-card-name">${dest.name}</h3>
        <p class="dest-card-country">${dest.country}</p>
        <span class="dest-card-cta">Ontdek meer →</span>
      </div>
    `;
    
    // Animatie: kaarten verschijnen één voor één
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Klikgebeurtenis: open de modal
    card.addEventListener('click', () => openModal(dest));
    
    grid.appendChild(card);
  });
}

// ==============================
// MODAL OPENEN
// ==============================
function openModal(dest) {
  // Vul alle modal-velden in met de data van de bestemming
  document.getElementById('modalHero').style.background = 
    `linear-gradient(135deg, ${dest.color}, ${dest.color}99, #1a1410)`;
  
  document.getElementById('modalFlag').textContent = dest.flag;
  document.getElementById('modalTitle').textContent = dest.name;
  document.getElementById('modalSubtitle').textContent = `${dest.country} · ${dest.continent}`;
  document.getElementById('modalDesc').textContent = dest.description;
  
  // Statistieken (temperatuur, vluchttijd, budget)
  document.getElementById('modalStats').innerHTML = `
    <div class="stat-item">
      <div class="stat-icon">🌡️</div>
      <div class="stat-value">${dest.stats.temp}</div>
      <div class="stat-label">Temperatuur</div>
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
  
  // Hoogtepunten lijst
  const highlightItems = dest.highlights.map(h => `<li>${h}</li>`).join('');
  document.getElementById('modalHighlights').innerHTML = `
    <h3 class="highlights-title">Hoogtepunten</h3>
    <ul class="highlights-list">${highlightItems}</ul>
  `;
  
  // Reistrip
  document.getElementById('modalTips').innerHTML = `
    <div class="tips-box">
      <h4>💡 Reistrip</h4>
      <p>${dest.tip}</p>
    </div>
  `;
  
  // Toon de modal
  document.getElementById('modalOverlay').classList.add('active');
  
  // Voorkom scrollen op de achtergrond
  document.body.style.overflow = 'hidden';
}

// ==============================
// MODAL SLUITEN
// ==============================
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = ''; // herstel scrollen
}

// Sluit modal bij klik op X-knop
document.getElementById('modalClose').addEventListener('click', closeModal);

// Sluit modal bij klik buiten de modal
document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal(); // alleen sluiten als overlay zelf geklikt wordt
});

// Sluit modal met Escape-toets
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ==============================
// LEAFLET KAART AANMAKEN
// ==============================
function buildMap() {
  // Maak de kaart aan — gecentreerd op Europa/Azië
  const map = L.map('map', {
    center: [30, 40],
    zoom: 2,
    zoomControl: true
  });
  
  // OpenStreetMap tegels (gratis kaartlaag)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap bijdragers',
    maxZoom: 18
  }).addTo(map);
  
  // Voeg een pin (marker) toe voor elke bestemming
  destinations.forEach(dest => {
    // Aangepast icoon met emoji vlag
    const icon = L.divIcon({
      className: '',
      html: `<div style="
        background: ${dest.color};
        color: white;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        border: 2px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        cursor: pointer;
      ">${dest.flag}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });
    
    // Maak de marker aan op de kaart
    const marker = L.marker([dest.lat, dest.lng], { icon }).addTo(map);
    
    // Popup die verschijnt bij klikken op de marker
    marker.bindPopup(`
      <div class="map-popup">
        <h3>${dest.flag} ${dest.name}</h3>
        <p>${dest.country} · ${dest.continent}</p>
        <button onclick="openModalById(${dest.id})">Meer info →</button>
      </div>
    `);
  });
}

// Hulpfunctie voor de kaart popup knop
function openModalById(id) {
  const dest = destinations.find(d => d.id === id);
  if (dest) openModal(dest);
}

// ==============================
// INITIALISATIE
// Alles wordt uitgevoerd wanneer de pagina geladen is
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  buildGrid();  // maak de bestemmingskaarten
  buildMap();   // maak de interactieve kaart
});
