// Crear elementos para el nombre y la descripción
const contentDiv = document.getElementById('content');

const nameElement = document.createElement('h2');
nameElement.textContent = 'Shanon Cary';

const descriptionElement = document.createElement('p');
descriptionElement.textContent = 'Hard times, hard techno';

// Insertar elementos en el contenedor designado
contentDiv.appendChild(nameElement);
contentDiv.appendChild(descriptionElement);