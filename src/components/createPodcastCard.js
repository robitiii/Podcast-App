export function createPodcastCard(podcast, genreService, onCardClick) {
  // Create the main card container
  const card = document.createElement("div");
  card.classList.add("podcast-card");

  // Get genre names from genre IDs using the service
  const genreNames = genreService
    ? genreService.getGenreNamesString(podcast.genres)
    : podcast.genres.join(", ");

  // Set up the card HTML content
  card.innerHTML = `
    <img src="${podcast.image}" alt="${podcast.title}" class="podcast-cover" />
    <h3 class="podcast-title">${podcast.title}</h3>
    <p class="podcast-genre">${genreNames}</p>
    <p class="podcast-description">${podcast.description}</p>
    <div class="podcast-meta">
      <span class="podcast-seasons">${podcast.seasons} seasons</span>
      <span class="podcast-updated">Updated: ${formatDate(
        podcast.updated
      )}</span>
    </div>
  `;

  // Add click event listener to open modal
  if (onCardClick) {
    card.addEventListener("click", () => onCardClick(podcast));
  }

  return card;
}
