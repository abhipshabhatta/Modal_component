/**
 * Eclipse component factory
 * @param {Object} props - Component properties
 * @param {('primary'|'secondary'|'tertiary')} props.colorVariant - Color variant of the eclipse
 * @returns {HTMLElement}
 */
export const Eclipse = ({ colorVariant = 'primary' }) => {
    const eclipseElement = document.createElement('div');
    return eclipseElement;
  }