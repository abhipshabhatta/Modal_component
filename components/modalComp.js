import { button } from "./compBtn.js";

/**
 * Modal component factory
 * @param {Object} props - Component properties
 * @param {string} props.titleText - Modal title
 * @param {string|HTMLElement} props.bodyText - Modal body content
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClose - Close handler function
 * @returns {HTMLElement}
 */
export const Modal = ({
  titleText = "Default title",
  bodyText = "default body",
  className = "",
  onClose = () => {}
}) => {
  // Create main modal container
  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("tabindex", "-1");
  modalContainer.classList.add("overlay-modal", "d-none");
  if (className) modalContainer.classList.add(className);

  // Event handler for modal clicks
  const handleClick = (e) => {
    if (e.target === modalContainer) {
      onClose();
    }
  };
  modalContainer.addEventListener("click", handleClick);

  // Create modal structure
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header", className);

  const modalTitle = document.createElement("h2");
  modalTitle.textContent = titleText;

  const closeButton = button("X", handleClick, "btn");

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  // Handle body content based on type
  if (bodyText instanceof HTMLElement) {
    modalBody.appendChild(bodyText);
  } else {
    modalBody.textContent = bodyText;
  }

  const modalFooter = document.createElement("footer");
  modalFooter.classList.add("modal-footer", className);

  // Assemble modal parts
  modalHeader.append(modalTitle, closeButton);
  modalContent.append(modalHeader, modalBody, modalFooter);
  modalContainer.appendChild(modalContent);

  return modalContainer;
};

/**
 * Helper method to show modal
 * @param {HTMLElement} modalElement 
 */
export const showModal = (modalElement) => {
  modalElement.classList.remove("d-none");
};

/**
 * Helper method to hide modal
 * @param {HTMLElement} modalElement 
 */
export const hideModal = (modalElement) => {
  modalElement.classList.add("d-none");
};