import { Button } from './compBtn.js';

/**
 * Navigation bar component factory
 * @param {Object} props - Component properties
 * @param {string} props.logoSrc - Source path for the logo image
 * @param {string} props.logoAlt - Alt text for the logo
 * @param {string} props.linkText - Text for the navigation link
 * @param {string} props.linkHref - URL for the navigation link
 * @param {Object} props.styles - Custom styles for the navbar
 * @returns {HTMLElement}
 */
export const Navbar = ({
  logoSrc = "../assets/logo.svg",
  logoAlt = "logo",
  linkText = "Home",
  linkHref = "#",
  styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1em",
  }
}) => {
  const navElement = document.createElement("nav");
  navElement.classList.add("navElement");

  // Apply styles
  Object.entries(styles).forEach(([key, value]) => {
    navElement.style[key] = value;
  });

  // Create logo
  const logo = new Image();
  logo.src = logoSrc;
  logo.setAttribute("alt", logoAlt);

  // Create navigation link
  const link = document.createElement("a");
  link.setAttribute("href", linkHref);
  link.innerText = linkText;

  // Assemble navbar
  navElement.append(logo, link);
  
  return navElement;
};