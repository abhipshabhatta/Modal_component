/**
 * Service utility functions for modal and component management
 */
export const services = {
    /**
     * Show a modal element
     * @param {HTMLElement} modalElement 
     */
    showModal: (modalElement) => {
      modalElement.classList.remove('d-none');
    },
  
    /**
     * Hide a modal element
     * @param {HTMLElement} modalElement 
     */
    hideModal: (modalElement) => {
      modalElement.classList.add('d-none');
    },
  
    /**
     * Toggle theme between light and dark
     */
    toggleTheme: () => {
      document.body.classList.toggle('dark-theme');
    },
  
    /**
     * Create a unique ID for elements
     * @returns {string}
     */
    generateId: () => {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  };