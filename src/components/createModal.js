// src/components/createModal.js

/**
 * Creates a modal controller with open/close functionality
 * @param {string} modalId - The ID of the modal element in the DOM
 * @returns {Object|null} Modal controller object or null if element not found
 */
export function createModal(modalId) {
  const modal = document.getElementById(modalId);

  if (!modal) {
    console.error(`Modal with id "${modalId}" not found`);
    return null;
  }

  return {
    modal,

    open() {
      this.modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    },

    close() {
      this.modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    },

    toggle() {
      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    },

    isOpen() {
      return !this.modal.classList.contains("hidden");
    },

    setContent(content) {
      this.modal.innerHTML = content;
    },

    addContent(content) {
      this.modal.innerHTML += content;
    },

    clear() {
      this.modal.innerHTML = "";
    },

    addClass(className) {
      this.modal.classList.add(className);
    },

    removeClass(className) {
      this.modal.classList.remove(className);
    },
  };
}
