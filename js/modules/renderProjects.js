export function renderProjects(projects) {
    const projectsContainer = document.querySelector('.projects__container');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects.map(project => `
        <article class="projects__card">
            <div class="projects__img-container">
                <img src="${project.image}" alt="Vista previa del proyecto ${project.title}" class="projects__img" loading="lazy">
                <div class="projects__img-overlay"></div>
            </div>
            <div class="projects__content">
                <div class="projects__tech">
                    ${project.technologies.map(tech => {
        const iconPath = `assets/images/skills/${tech.toLowerCase()}.svg`;
        return `
                        <span class="projects__tech-tag">
                            <img src="${iconPath}" alt="" aria-hidden="true">
                            ${tech}
                        </span>`;
    }).join('')}
                </div>
                <h3 class="projects__title">${project.title}</h3>
                <p class="projects__description">${project.description}</p>
                <div class="projects__actions">
                    <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--outline projects__link" aria-label="Ver repositorio de ${project.title} en GitHub">
                        Repositorio <i class="uil uil-github"></i>
                    </a>
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary projects__link" aria-label="Ver demo en vivo de ${project.title}">
                        Ver demo <i class="uil uil-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}
