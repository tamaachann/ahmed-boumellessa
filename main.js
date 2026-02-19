// This file contains the JavaScript code for the portfolio. It handles dynamic interactions, such as loading project data and managing user interactions.

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

function loadProjects() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('projects');

            data.forEach(project => {
                const card = document.createElement('div');
                card.classList.add('project-card');

                card.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <img src="${project.image}" alt="${project.title}">
                    <div>
                        <a href="${project.liveDemo}" target="_blank">Live Demo</a>
                        <a href="${project.repository}" target="_blank">Repository</a>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading projects:", error));
}
