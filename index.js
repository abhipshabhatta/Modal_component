import { Header } from './components/headerComp.js';
import { Navbar } from './components/navBar.js';
import { Modal } from './components/modalComp.js';
import { Eclipse } from './components/eclipseComp.js';
import { services } from './services/services.js';

// Create and append a container
const container = document.createElement('div');
container.classList.add('container');

// Initialize components
const header = Header({
    title: "Welcome to Modal Component"
});

const navbar = Navbar({
    logoSrc: "./assets/Mountains.jpeg"
});

const modal = Modal({
    titleText: "Welcome",
    bodyText: "This is a modal component example",
    className: "primary"
});

// Append components to DOM
document.body.appendChild(navbar);
container.appendChild(header);
document.body.appendChild(container);
document.body.appendChild(modal);

// Add a button to test modal
const showModalBtn = document.createElement('button');
showModalBtn.textContent = 'Show Modal';
showModalBtn.classList.add('btn', 'primary-btn');
showModalBtn.onclick = () => services.showModal(modal);
container.appendChild(showModalBtn);