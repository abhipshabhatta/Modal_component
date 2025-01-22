/**
 * Button component factory
 * @param {Object} props - Component properties
 * @param {string} props.children - Button content
 * @param {Function} props.onPress - Click handler
 * @param {string} props.buttonType - Style variant
 * @returns {HTMLButtonElement}
 */
export const Button = ({ 
    children = "", 
    onPress = () => {}, 
    buttonType = 'primary' 
}) => {
    const button = document.createElement('button');
    button.classList.add('btn', `${buttonType}-btn`);
    button.textContent = children;
    button.addEventListener('click', onPress);
    return button;
};