export function renderProjects(projects) {
    const projectsContainer = document.querySelector('.projects__container');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects.map(project => {
        const statusClass = project.status.toLowerCase().replace(/\s+/g, '-');

        return `
        <article class="projects__card">
            <div class="projects__img-container">
                <div class="projects__img-wrapper">
                    <img src="${project.image}" alt="Vista previa del proyecto ${project.title}" class="projects__img" loading="lazy">
                </div>
                <div class="projects__img-overlay">
                    <div class="projects__badges">
                        <span class="projects__badge projects__badge--type">${project.type}</span>
                        <span class="projects__badge projects__badge--status projects__badge--${statusClass}">${project.status}</span>
                    </div>
                </div>
            </div>
            
            <div class="projects__content">
                <div class="projects__main-info">
                    <header class="projects__header">
                        <span class="projects__role-label">${project.role}</span>
                        <h3 class="projects__title">${project.title}</h3>
                    </header>

                    <p class="projects__tagline">${project.description}</p>
                    
                    <div class="projects__tech">
                        ${project.technologies.map(tech => {
            const iconPath = `assets/images/skills/${tech.toLowerCase()}.svg`;
            return `
                            <span class="projects__tech-badge" title="${tech}">
                                <img src="${iconPath}" alt="" aria-hidden="true">
                                ${tech}
                            </span>`;
        }).join('')}
                    </div>
                </div>

                <div class="projects__interactive-area">
                    <details class="projects__accordion">
                        <summary class="projects__summary">
                            <span>ANÁLISIS TÉCNICO</span>
                            <i class="uil uil-plus projects__summary-icon"></i>
                        </summary>
                        
                        <div class="projects__expanded-content">
                            <div class="projects__details-grid">
                                <div class="projects__detail-item">
                                    <h4 class="projects__detail-title"><i class="uil uil-search"></i> Desafío</h4>
                                    <p class="projects__detail-text">${project.problem}</p>
                                </div>
                                
                                <div class="projects__detail-item">
                                    <h4 class="projects__detail-title"><i class="uil uil-rocket"></i> Solución</h4>
                                    <p class="projects__detail-text">${project.solution}</p>
                                </div>

                                <div class="projects__technical-lists">
                                    <div class="projects__list-block">
                                        <h5 class="projects__list-title">Retos</h5>
                                        <ul class="projects__list">
                                            ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                                        </ul>
                                    </div>
                                    
                                    <div class="projects__list-block">
                                        <h5 class="projects__list-title">Hitos</h5>
                                        <ul class="projects__list">
                                            ${project.results.map(result => `<li>${result}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>

                <div class="projects__actions">
                    <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--outline projects__link">
                        <i class="uil uil-github-alt"></i> GitHub
                    </a>
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary projects__link">
                        <i class="uil uil-external-link-alt"></i> Demo
                    </a>
                </div>
            </div>
        </article>
    `}).join('');
}
