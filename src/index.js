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
