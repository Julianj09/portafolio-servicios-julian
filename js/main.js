import { fetchData } from './modules/fetchData.js';
import { renderHero, renderAbout } from './modules/renderProfile.js';
import { renderSkills } from './modules/renderSkills.js';
import { renderProjects } from './modules/renderProjects.js';
import { renderEducation } from './modules/renderEducation.js';
import { initNavbar, renderFooter } from './modules/navbar.js';
import { initFormValidation } from './modules/form.js';
import { initTheme } from './modules/theme.js';

async function init() {
    // 0. Initialize theme immediately
    initTheme();
    const [profile, skills, projects, education, social] = await Promise.all([
        fetchData('./data/profile.json'),
        fetchData('./data/skills.json'),
        fetchData('./data/projects.json'),
        fetchData('./data/education.json'),
        fetchData('./data/social.json')
    ]);

    // Render components
    if (profile && social) renderHero(profile, social);
    if (profile) renderAbout(profile);
    if (skills) renderSkills(skills);
    if (projects) renderProjects(projects);
    if (education) renderEducation(education);
    if (social) renderFooter(social);

    // Initialize logic
    initNavbar();
    initFormValidation();

    // Initialize ScrollReveal if available
    if (window.ScrollReveal) {
        const sr = ScrollReveal({
            reset: false,
            distance: '60px',
            duration: 2500,
            delay: 400
        });

        sr.reveal('.hero__profile', { delay: 100, origin: 'bottom' });
        sr.reveal('.hero__title, .hero__description', { delay: 100, origin: 'left' });
        sr.reveal('.hero__social li', { delay: 100, origin: 'bottom', interval: 200 });
        sr.reveal('.about__text', { delay: 100, origin: 'left' });
        sr.reveal('.about__img', { delay: 100, origin: 'bottom' });
        sr.reveal('.skills__tech', { delay: 100, origin: 'bottom' });
        sr.reveal('.skills__hobbies', { delay: 50, origin: 'bottom' });
        sr.reveal('details', { delay: 50, origin: 'bottom', interval: 100 });
        sr.reveal('.card', { delay: 200, origin: 'left', interval: 200 });
    }
}

document.addEventListener('DOMContentLoaded', init);
