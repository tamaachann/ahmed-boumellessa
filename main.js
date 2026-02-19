// This file contains the JavaScript code for the portfolio. It handles dynamic interactions, such as loading project data and managing user interactions.

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

function loadProjects() {
    fetch('./data/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            data.forEach(project => {
                const projectCard = createProjectCard(project);
                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const title = document.createElement('h3');
    title.textContent = project.title;
    card.appendChild(title);

    const description = document.createElement('p');
    description.textContent = project.description;
    card.appendChild(description);

    const image = document.createElement('img');
    image.src = project.imageUrl;
    image.alt = project.title;
    card.appendChild(image);

    const link = document.createElement('a');
    link.href = project.liveDemoUrl;
    link.textContent = 'View Project';
    card.appendChild(link);

    return card;
}