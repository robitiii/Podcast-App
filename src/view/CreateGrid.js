export function createGrid(containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return null;
  }

  return {
    container,
  };
}
