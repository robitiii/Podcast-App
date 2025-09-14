import { podcasts } from "./data.js";
import { createPodcastCard } from "./components/createPodcastCard.js";
import { createGrid } from "./views/createGrid.js";
import { createModal } from "./components/createModal.js";

// Initialize components
const grid = createGrid("podcast-grid");
const modal = createModal("modal");

// Initialize modal event listeners
if (modal) {
  modal.init();
}
// Function to create modal content
function createModalContent(podcast) {
  return `
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <div class="modal-body">
        <div class="modal-podcast-header">
          <img src="${podcast.image}" alt="${podcast.title}" class="modal-podcast-cover" />
          <div class="modal-podcast-info">
            <h2 class="modal-podcast-title">${podcast.title}</h2>
            <p class="modal-podcast-updated">Last updated: ${podcast.updated}</p>
            <p class="modal-podcast-seasons">${podcast.seasons} seasons</p>
          </div>
        </div>
        <div class="modal-podcast-description">
          <h3>Description</h3>
          <p>${podcast.description}</p>
        </div>
      </div>
    </div>
  `;
}
// Function to handle podcast card click
function handlePodcastCardClick(podcast) {
  if (!modal) {
    console.error("Modal not initialized");
    return;
  }

  const modalContent = createModalContent(podcast);
  modal.setContent(modalContent);
  modal.open();
}
// Function to render podcasts in grid
function renderPodcasts(podcastList = podcasts) {
  if (!grid) {
    console.error("Grid container not found");
    return;
  }

  const cards = podcastList.map((podcast) =>
    createPodcastCard(podcast, handlePodcastCardClick)
  );

  grid.renderCards(cards);
}

// Start the app
renderPodcasts();
