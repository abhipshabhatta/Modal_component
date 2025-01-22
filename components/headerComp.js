import { naveBar } from "./navBar.js";

/**
 * Header component factory
 * @param {Object} props - Component properties
 * @param {string} props.title - Header title text
 * @param {Object} props.styles - Custom styles for the header
 * @param {string} props.styles.color - Text color
 * @param {string} props.styles.margin - Margin spacing
 * @param {string} props.styles.textAlign - Text alignment
 * @returns {HTMLElement}
 */
export const Header = ({ 
  title = "This is a test",
  styles = {
    color: "white",
    margin: "1em",
    textAlign: "center"
  }
}) => {
  const headerElement = document.createElement("header");
  
  const titleElement = document.createElement("h1");
  titleElement.style.textAlign = styles.textAlign;
  titleElement.style.color = styles.color;
  titleElement.style.margin = styles.margin;
  titleElement.innerText = title;

  return headerElement;
};