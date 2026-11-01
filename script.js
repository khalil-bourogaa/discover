const countries = {
    Tunisia: {
        flag: "🇹🇳",
        places: [
            ["Carthage", "History", "Discover the ancient Phoenician and Roman city.", "https://images.unsplash.com/photo-1562835155-6c1c7e1b7e8b?auto=format&fit=crop&w=900&q=80"],
            ["Sidi Bou Said", "Culture", "Beautiful blue and white streets overlooking the sea.", "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=900&q=80"],
            ["Sahara Desert", "Nature", "Experience the incredible landscapes of the Sahara.", "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80"],
            ["Djerba", "Beach", "Discover island life, beaches and traditions.", "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80"],
            ["El Jem", "History", "Explore one of the world's impressive Roman amphitheatres.", "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=900&q=80"],
            ["Kairouan", "Culture", "Discover historic architecture and traditional crafts.", "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80"]
        ],
        food: [
            ["🍲", "Couscous", "A traditional Tunisian dish."],
            ["🥟", "Brik", "A famous crispy pastry."],
            ["🥖", "Fricassé", "A delicious Tunisian sandwich."],
            ["🌶️", "Harissa", "A traditional spicy chilli paste."]
        ]
    },

    Japan: {
        flag: "🇯🇵",
        places: [
            ["Tokyo", "Culture", "Experience modern Japanese city life.", "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80"],
            ["Kyoto", "History", "Discover temples, gardens and Japanese traditions.", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80"],
            ["Mount Fuji", "Nature", "Discover Japan's iconic mountain.", "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=900&q=80"],
            ["Okinawa", "Beach", "Explore tropical islands and beaches.", "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80"]
        ],
        food: [
            ["🍣", "Sushi", "Traditional Japanese food."],
            ["🍜", "Ramen", "A famous noodle soup."],
            ["🍡", "Dango", "Traditional sweet rice dumplings."],
            ["🍵", "Matcha", "Japanese green tea."]
        ]
    },

    France: {
        flag: "🇫🇷",
        places: [
            ["Paris", "Culture", "Explore art, architecture and iconic streets.", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80"],
            ["Mont Saint-Michel", "History", "Discover a remarkable historic island.", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"],
            ["French Alps", "Nature", "Discover beautiful mountain landscapes.", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"],
            ["Nice", "Beach", "Enjoy the Mediterranean coast.", "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=900&q=80"]
        ],
        food: [
            ["🥐", "Croissant", "A classic French pastry."],
            ["🥖", "Baguette", "Traditional French bread."],
            ["🧀", "French Cheese", "Discover regional cheeses."],
            ["🍰", "Macaron", "A famous French sweet."]
        ]
    },

    Italy: {
        flag: "🇮🇹",
        places: [
            ["Rome", "History", "Discover ancient Roman civilization.", "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80"],
            ["Venice", "Culture", "Explore canals and historic architecture.", "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=900&q=80"],
            ["Dolomites", "Nature", "Discover spectacular mountain scenery.", "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80"],
            ["Amalfi Coast", "Beach", "Explore beautiful coastal villages.", "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=900&q=80"]
        ],
        food: [
            ["🍕", "Pizza", "A famous Italian classic."],
            ["🍝", "Pasta", "Traditional Italian pasta."],
            ["🍨", "Gelato", "Italian-style ice cream."],
            ["☕", "Espresso", "Classic Italian coffee."]
        ]
    },

    Morocco: {
        flag: "🇲🇦",
        places: [
            ["Marrakech", "Culture", "Discover colorful markets and historic streets.", "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=900&q=80"],
            ["Chefchaouen", "Culture", "Explore the famous blue city.", "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=900&q=80"],
            ["Sahara", "Nature", "Experience the beauty of desert landscapes.", "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80"],
            ["Essaouira", "Beach", "Discover the Atlantic coast and its traditions.", "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80"]
        ],
        food: [
            ["🍲", "Tagine", "A traditional slow-cooked dish."],
            ["🥘", "Couscous", "A Moroccan classic."],
            ["🥞", "Msemen", "Traditional Moroccan flatbread."],
            ["🍵", "Mint Tea", "A famous Moroccan drink."]
        ]
    }
};

let currentCountry = "Tunisia";
let currentFilter = "All";
let favorites = JSON.parse(localStorage.getItem("discoverFavorites") || "[]");

const grid = document.getElementById("destinationGrid");
const favoriteGrid = document.getElementById("favoritesGrid");
const foodGrid = document.getElementById("foodGrid");

function getPlaces() {
    return countries[currentCountry].places;
}

function saveFavorites() {
    localStorage.setItem("discoverFavorites", JSON.stringify(favorites));
}

function renderDestinations() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    const places = getPlaces().filter(place => {
        const matchesFilter =
            currentFilter === "All" || place[1] === currentFilter;

        const matchesSearch =
            place[0].toLowerCase().includes(query) ||
            place[2].toLowerCase().includes(query);

        return matchesFilter && matchesSearch;
    });

    grid.innerHTML = places.length ? places.map(place => {
        const isSaved = favorites.some(f =>
            f.country === currentCountry && f.name === place[0]
        );

        return `
        <article class="destination-card">
            <div class="destination-image"
                style="background-image:url('${place[3]}')">
                <span class="category-label">${place[1]}</span>
            </div>

            <div class="card-content">
                <h3>${place[0]}</h3>
                <p>${place[2]}</p>

                <div class="card-actions">
                    <button class="details-btn"
                        onclick="showDetails('${place[0]}')">
                        Explore →
                    </button>

                    <button class="favorite-btn ${isSaved ? "saved" : ""}"
                        onclick="toggleFavorite('${place[0]}')">
                        ${isSaved ? "♥" : "♡"}
                    </button>
                </div>
            </div>
        </article>`;
    }).join("") : `<p class="empty-message">No destinations found.</p>`;
}

function renderFood() {
    foodGrid.innerHTML = countries[currentCountry].food.map(food => `
        <article class="food-card">
            <span>${food[0]}</span>
            <h3>${food[1]}</h3>
            <p>${food[2]}</p>
        </article>
    `).join("");
}

function renderFavorites() {
    const saved = favorites.filter(f =>
        countries[f.country]?.places.some(p => p[0] === f.name)
    );

    if (!saved.length) {
        favoriteGrid.innerHTML =
            `<p class="empty-message">No favourites yet. Start exploring and save your favourite places! ❤️</p>`;
        return;
    }

    favoriteGrid.innerHTML = saved.map(f => {
        const place = countries[f.country].places.find(p => p[0] === f.name);

        return `
        <article class="destination-card">
            <div class="destination-image"
                style="background-image:url('${place[3]}')"></div>
            <div class="card-content">
                <h3>${place[0]}</h3>
                <p>${f.country} ${countries[f.country].flag}</p>
                <div class="card-actions">
                    <button class="details-btn"
                        onclick="changeCountry('${f.country}')">
                        Explore →
                    </button>
                    <button class="favorite-btn saved"
                        onclick="toggleFavorite('${place[0]}','${f.country}')">
                        ♥
                    </button>
                </div>
            </div>
        </article>`;
    }).join("");
}

function toggleFavorite(name, country = currentCountry) {
    const index = favorites.findIndex(f =>
        f.name === name && f.country === country
    );

    if (index >= 0) {
        favorites.splice(index, 1);
    } else {
        favorites.push({ name, country });
    }

    saveFavorites();
    renderDestinations();
    renderFavorites();
}

function showDetails(name) {
    const place = getPlaces().find(p => p[0] === name);
    if (!place) return;

    alert(
        "🌍 " + place[0] +
        "\n\nCountry: " + currentCountry +
        "\nCategory: " + place[1] +
        "\n\n" + place[2] +
        "\n\nDiscover more about this destination!"
    );
}

function changeCountry(country) {
    if (!countries[country]) return;

    currentCountry = country;
    currentFilter = "All";

    document.getElementById("countrySelect").value = country;
    document.getElementById("countryLabel").textContent =
        "Exploring " + country + " " + countries[country].flag;

    document.getElementById("searchInput").value = "";

    document.querySelectorAll(".filter").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === "All"
        );
    });

    renderAll();
    document.getElementById("destinations").scrollIntoView({
        behavior: "smooth"
    });
}

function renderAll() {
    renderDestinations();
    renderFood();
    renderFavorites();
}

document.getElementById("countrySelect").addEventListener("change", e => {
    changeCountry(e.target.value);
});

document.getElementById("searchInput").addEventListener("input", renderDestinations);

document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        document.querySelectorAll(".filter").forEach(b =>
            b.classList.remove("active")
        );

        button.classList.add("active");
        renderDestinations();
    });
});

// TRIP PLANNER
document.getElementById("generateTrip").addEventListener("click", () => {
    const days = Number(document.getElementById("tripDays").value);
    const style = document.getElementById("tripStyle").value;

    let places = getPlaces();

    if (style !== "All") {
        const filtered = places.filter(p => p[1] === style);
        if (filtered.length) places = filtered;
    }

    let result = "<h3>Your " + days + "-day adventure ✈️</h3>";

    for (let i = 0; i < days; i++) {
        const place = places[i % places.length];

        result += `
            <ol>
                <li>
                    <strong>Day ${i + 1}: ${place[0]}</strong>
                    <br>${place[2]}
                </li>
            </ol>
        `;
    }

    result += "<p>Enjoy your journey! 🌍</p>";

    document.getElementById("tripResult").innerHTML = result;
});

// INITIALIZE APP
renderAll();