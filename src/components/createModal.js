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

  return { modal };
}
