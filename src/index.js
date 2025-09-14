// src/index.js

// Initialize services
const genreService = new GenreService(genres);

// Initialize components
const grid = createGrid("podcast-grid");
const modal = createModal("modal");

// Initialize modal event listeners
if (modal) modal.init();

console.log("Basic services and modal initialized");
