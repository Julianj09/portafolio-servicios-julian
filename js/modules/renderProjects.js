export function renderProjects(projects) {
    const projectsContainer = document.querySelector('.projects__container');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects.map(project => `
        <div class="card">
            <div class="card__img">
                <img src="${project.image}" alt="Imagen de ${project.title}" loading="lazy">
            </div>
            <div class="card__content">
                <div class="card__tech">
                    ${project.technologies.map(tech => {
        // Attempt to map tech name to icon path if possible, 
        // but since JSON already should have paths or names, we use a simple logic
        const iconPath = `assets/images/Skills/${tech.toLowerCase()}.svg`;
        return `<img src="${iconPath}" alt="${tech}" title="${tech}">`;
    }).join('')}
                </div>
                <h3 class="card__title">${project.title}</h3>
                <p class="card__description">${project.description}</p>
                <div class="card__actions">
                    <a href="${project.repoUrl}" target="_blank" class="btn btn--outline">
                        Repositorio <i class="uil uil-github"></i>
                    </a>
                    <a href="${project.liveUrl}" target="_blank" class="btn btn--primary">
                        Ver demo <i class="uil uil-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}
