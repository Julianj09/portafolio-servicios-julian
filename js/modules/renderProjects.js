export function renderProjects(projects) {
    if (!projects || !projects.length) return;

    const container = document.querySelector('.projects__container');
    if (!container) return;

    const controls = document.getElementById('projects-controls');
    if (controls) controls.remove();

    let currentIndex = 0;

    function getYear(dateObj) {
        if (!dateObj || !dateObj.end) return '';
        if (dateObj.end === 'En curso') return 'En curso';
        return dateObj.end.split('-')[0];
    }

    function buildShowcaseHTML(project) {
        const statusClass = project.status.toLowerCase().replace(/\s+/g, '-');
        const year = getYear(project.date);
        const showDemo = project.liveUrl && project.liveUrl.trim() !== '';

        return `
            <div class="projects__showcase-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="projects__showcase-badges">
                    <span class="projects__badge projects__badge--type">${project.type}</span>
                    <span class="projects__badge projects__badge--status projects__badge--${statusClass}">${project.status}</span>
                </div>
            </div>
            <div class="projects__showcase-content">
                <div class="projects__showcase-meta">${project.role}${year ? ' <span style="opacity:0.4">·</span> ' + year : ''}</div>
                <h4 class="projects__showcase-title">${project.title}</h4>
                <p class="projects__showcase-desc">${project.description}</p>
                <div class="projects__showcase-tech">
                    ${project.technologies.map(tech => {
                        const iconPath = `assets/images/skills/${tech.toLowerCase()}.svg`;
                        return `<span class="projects__tech-badge" title="${tech}">
                            <img src="${iconPath}" alt="" aria-hidden="true">${tech}
                        </span>`;
                    }).join('')}
                </div>
                <div class="projects__showcase-details">
                    <div>
                        <span class="projects__detail-label">Desafío</span>
                        <p class="projects__detail-text">${project.problem}</p>
                    </div>
                    <div>
                        <span class="projects__detail-label">Solución</span>
                        <p class="projects__detail-text">${project.solution}</p>
                    </div>
                </div>
                <div class="projects__showcase-actions">
                    <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--outline" data-gsap="magnetic">
                        <i class="uil uil-github-alt"></i> GitHub
                    </a>
                    ${showDemo ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" data-gsap="magnetic">
                        <i class="uil uil-external-link-alt"></i> Demo
                    </a>` : ''}
                </div>
            </div>
        `;
    }

    function buildGridCardHTML(project, index) {
        return `
            <article class="projects__grid-card${index === 0 ? ' projects__grid-card--active' : ''}" data-index="${index}">
                <div class="projects__grid-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>
                <div class="projects__grid-body">
                    <h5 class="projects__grid-title">${project.title}</h5>
                    <div class="projects__grid-tech">
                        ${project.technologies.slice(0, 3).map(tech => {
                            const iconPath = `assets/images/skills/${tech.toLowerCase()}.svg`;
                            return `<span class="projects__tech-badge" title="${tech}">
                                <img src="${iconPath}" alt="" aria-hidden="true">${tech}
                            </span>`;
                        }).join('')}
                        ${project.technologies.length > 3 ? `<span class="projects__tech-badge">+${project.technologies.length - 3}</span>` : ''}
                    </div>
                </div>
            </article>
        `;
    }

    function buildDotsHTML(count, active) {
        return Array.from({ length: count }, (_, i) =>
            `<button class="projects__dot${i === active ? ' projects__dot--active' : ''}" data-index="${i}" aria-label="Proyecto ${i + 1}"></button>`
        ).join('');
    }

    function updateUI(index) {
        const dots = container.querySelectorAll('.projects__dot');
        dots.forEach((dot, i) => dot.classList.toggle('projects__dot--active', i === index));

        const gridCards = container.querySelectorAll('.projects__grid-card');
        gridCards.forEach((card, i) => card.classList.toggle('projects__grid-card--active', i === index));

        const prevBtn = container.querySelector('.projects__arrow--prev');
        const nextBtn = container.querySelector('.projects__arrow--next');
        if (prevBtn) prevBtn.style.display = projects.length <= 1 || index === 0 ? 'none' : '';
        if (nextBtn) nextBtn.style.display = projects.length <= 1 || index === projects.length - 1 ? 'none' : '';
    }

    function goTo(newIndex) {
        if (newIndex === currentIndex || newIndex < 0 || newIndex >= projects.length) return;
        currentIndex = newIndex;

        const showcaseInner = container.querySelector('.projects__showcase-inner');
        if (!showcaseInner) return;

        gsap.to(showcaseInner, {
            opacity: 0,
            y: -8,
            duration: 0.2,
            ease: 'power2.out',
            onComplete: () => {
                showcaseInner.innerHTML = buildShowcaseHTML(projects[currentIndex]);
                gsap.fromTo(showcaseInner,
                    { opacity: 0, y: 8 },
                    { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
                );
                updateUI(currentIndex);
            },
        });
    }

    container.innerHTML = `
        <div class="projects__showcase" data-gsap="showcase">
            <button class="projects__arrow projects__arrow--prev" aria-label="Anterior">‹</button>
            <div class="projects__showcase-inner">
                ${buildShowcaseHTML(projects[0])}
            </div>
            <button class="projects__arrow projects__arrow--next" aria-label="Siguiente">›</button>
        </div>
        <div class="projects__showcase-nav">
            ${buildDotsHTML(projects.length, 0)}
        </div>
        <div class="projects__grid" data-gsap="projects-grid">
            ${projects.map((p, i) => buildGridCardHTML(p, i)).join('')}
        </div>
    `;

    const prevBtn = container.querySelector('.projects__arrow--prev');
    const nextBtn = container.querySelector('.projects__arrow--next');

    prevBtn?.addEventListener('click', () => goTo(currentIndex - 1));
    nextBtn?.addEventListener('click', () => goTo(currentIndex + 1));

    container.addEventListener('click', e => {
        const dot = e.target.closest('.projects__dot');
        if (dot) {
            const idx = parseInt(dot.dataset.index);
            if (!isNaN(idx)) goTo(idx);
        }

        const gridCard = e.target.closest('.projects__grid-card');
        if (gridCard) {
            const idx = parseInt(gridCard.dataset.index);
            if (!isNaN(idx)) goTo(idx);
        }
    });

    const showcase = container.querySelector('.projects__showcase');
    let touchStartX = 0;
    showcase?.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    showcase?.addEventListener('touchend', e => {
        const diff = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diff) > 40) {
            goTo(currentIndex - (diff > 0 ? 1 : -1));
        }
    }, { passive: true });

    updateUI(0);

    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
    }
}
