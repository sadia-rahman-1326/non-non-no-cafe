// ========================================
// WEBSITE IMAGES — EDIT IMAGE NAMES HERE
// ========================================

const images = {
    hero: "images/barsha.jpg",
    story: "images/storyyy.jpg",

    coffee1: "images/coffee1.jpg",
    coffee2: "images/coffee2.jpg",
    coffee3: "images/coffee3.jpg",

    pastry1: "images/pastry1.jpg",
    pastry2: "images/pastry2.jpg",

    gallery1: "images/gallery1.jpg",
    gallery2: "images/gallery2.jpg",
    gallery3: "images/gallery3.jpg",
    gallery4: "images/gallery4.jpg"
};

// ========================================
// MENU DATA
// ========================================

const menuItems = [
    {
        name: "The I-Need-Coffee Latte",
        description: "espresso, steamed milk, a little vanilla",
        price: "৳280",
        category: "coffee",
        image: images.coffee1
    },
    {
        name: "No Thoughts, Just Mocha",
        description: "espresso, dark chocolate, silky milk",
        price: "৳300",
        category: "coffee",
        image: images.coffee2
    },
    {
        name: "Main Character Americano",
        description: "bold espresso, hot water, nothing unnecessary",
        price: "৳220",
        category: "coffee",
        image: images.coffee3
    },
    {
        name: "Honey, I'm Oat",
        description: "espresso, oat milk, honey",
        price: "৳320",
        category: "coffee",
        image: images.pastry1
    },
    {
        name: "One More Bite Croissant",
        description: "buttery, flaky, impossible to stop at one",
        price: "৳220",
        category: "sweet",
        image: images.pastry2
    },
    {
        name: "You Deserve the Cake",
        description: "soft chocolate cake, rich ganache",
        price: "৳260",
        category: "sweet",
        image: images.gallery1
    }
];

// ========================================
// SET IMAGES ON PAGE LOAD
// ========================================

document.getElementById("heroImage").src = images.hero;
document.getElementById("storyImage").src = images.story;

document.querySelectorAll("[data-img]").forEach((img) => {
    const key = img.getAttribute("data-img");
    img.src = images[key];
});

// ========================================
// RENDER MENU
// ========================================

const menuGrid = document.getElementById("menuGrid");

function renderMenu(filter) {
    menuGrid.innerHTML = "";

    menuItems
        .filter((item) => filter === "all" || item.category === filter)
        .forEach((item) => {
            const card = document.createElement("div");
            card.className = "menu-item";
            card.innerHTML = `
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">${item.price}</span>
            `;
            menuGrid.appendChild(card);
        });
}

renderMenu("all");

// ========================================
// MENU FILTER
// ========================================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderMenu(btn.dataset.filter);
    });
});

// ========================================
// "WHAT KIND OF DAY?" INTERACTION
// ========================================

const moodResult = document.getElementById("moodResult");

const moodMessages = {
    caffeine: "You need the Main Character Americano.",
    quiet: "Honey, I'm Oat. Window seat. No unnecessary conversations.",
    sweet: "You deserve the cake. Obviously."
};

document.querySelectorAll(".mood-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        moodResult.textContent = moodMessages[btn.dataset.mood];
    });
});

// ========================================
// "PICK SOMETHING FOR ME" INTERACTION
// ========================================

const usualBtn = document.getElementById("usualBtn");
const usualResult = document.getElementById("usualResult");

usualBtn.addEventListener("click", () => {
    const random = menuItems[Math.floor(Math.random() * menuItems.length)];
    usualResult.textContent = `today says: ${random.name}.`;
});

// ========================================
// MOBILE HAMBURGER MENU
// ========================================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});
