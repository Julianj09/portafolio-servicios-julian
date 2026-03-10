let educationData = [];
let visibleEducation = 3;
const INITIAL_EDUCATION = 3;
const INCREMENT_EDUCATION = 2;

export function renderEducation(education) {
    if (education) educationData = education;

    const educationContainer = document.querySelector('.education__container');
    if (!educationContainer) return;

    // Check if we already have a controls container
    let controlsContainer = document.getElementById('education-controls');
    if (!controlsContainer) {
        controlsContainer = document.createElement('div');
        controlsContainer.id = 'education-controls';
        controlsContainer.className = 'load-more-container';
        educationContainer.after(controlsContainer);
    }

    const render = () => {
        const slice = educationData.slice(0, visibleEducation);

        educationContainer.innerHTML = slice.map(item => {
            const statusClass = item.status.toLowerCase().replace(/\s+/g, '-');
            const isFinished = item.status.toLowerCase() === 'finalizado';

            return `
            <details class="education__card">
                <summary class="education__summary">
                    <div class="education__summary-content">
                        <div class="education__header-top">
                            <div class="education__badges">
                                <span class="education__type-badge">${item.type}</span>
                                <span class="education__status education__status--${statusClass}">
                                    ${item.status}
                                </span>
                            </div>
                            <span class="education__period">${item.period}</span>
                        </div>
                        <h4 class="education__title">${item.title}</h4>
                        <p class="education__institution">
                            <i class="uil uil-university"></i> ${item.institution}
                        </p>
                    </div>
                    <div class="education__chevron">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </summary>
                
                <div class="education__details">
                    <div class="education__description">
                        <p>${item.description}</p>
                    </div>

                    <div class="education__info-grid">
                        <div class="education__info-item">
                            <h5 class="education__info-title">
                                <i class="uil uil-trophy"></i> Logros Clave
                            </h5>
                            <ul class="education__achievements">
                                ${item.achievements.map(achievement => `
                                    <li>${achievement}</li>
                                `).join('')}
                            </ul>
                        </div>

                        <div class="education__info-item">
                            <h5 class="education__info-title">
                                <i class="uil uil-setting"></i> Tecnologías & Skills
                            </h5>
                            <div class="education__tags">
                                ${[...(item.technologies || []), ...(item.skills || [])].map(tag => `
                                    <span class="education__tag">${tag}</span>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="education__footer">
                        <div class="education__location">
                            <i class="uil uil-map-marker"></i> ${item.location}
                        </div>
                        <div class="education__actions">
                            ${item.link ? `
                                <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="education__button education__button--outline">
                                    <i class="uil uil-university"></i> Ver institución
                                </a>
                            ` : ''}
                            ${(isFinished && item.certificateUrl) ? `
                                <a href="${item.certificateUrl}" target="_blank" rel="noopener noreferrer" class="education__button education__button--primary">
                                    <i class="uil uil-medal"></i> Ver certificado
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </details>
        `}).join('');

        updateControls();
    };

    const updateControls = () => {
        const hasMore = visibleEducation < educationData.length;
        const isExpanded = visibleEducation > INITIAL_EDUCATION;

        controlsContainer.innerHTML = '';

        if (hasMore) {
            const btnMore = document.createElement('button');
            btnMore.className = 'btn--load-more';
            btnMore.innerHTML = `<span>Ver más formación</span> <i class="uil uil-arrow-down"></i>`;
            btnMore.onclick = () => {
                visibleEducation += INCREMENT_EDUCATION;
                render();
            };
            controlsContainer.appendChild(btnMore);
        }

        if (isExpanded) {
            const btnLess = document.createElement('button');
            btnLess.className = 'btn--load-more';
            btnLess.innerHTML = `<span>Ver menos</span> <i class="uil uil-arrow-up"></i>`;
            btnLess.onclick = () => {
                visibleEducation = INITIAL_EDUCATION;
                render();
                document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
            };
            controlsContainer.appendChild(btnLess);
        }
    };

    render();
}
