import { fetchData } from './modules/fetchData.js';
import { renderHero, renderAbout } from './modules/renderProfile.js';
import { renderSkills } from './modules/renderSkills.js';
import { renderProjects } from './modules/renderProjects.js';
import { renderEducation } from './modules/renderEducation.js';
import { initNavbar, renderFooter } from './modules/navbar.js';
import { initTheme } from './modules/theme.js';
import { initAnimations } from './modules/animations.js';

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
    initAnimations();
}

document.addEventListener('DOMContentLoaded', init);
