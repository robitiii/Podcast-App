export function createGrid(containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return null;
  }

  return {
    container,

    clear() {
      this.container.innerHTML = "";
    },

    renderCards(cards) {
      this.clear();
      cards.forEach((card) => {
        this.container.appendChild(card);
      });
    },

    addCard(card) {
      this.container.appendChild(card);
    },

    removeCard(card) {
      if (this.container.contains(card)) {
        this.container.removeChild(card);
      }
    },

    getCardCount() {
      return this.container.children.length;
    },

    addClass(className) {
      this.container.classList.add(className);
    },

    removeClass(className) {
      this.container.classList.remove(className);
    },
  };
}
