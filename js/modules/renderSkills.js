export function renderSkills(skills) {
    const techContainer = document.querySelector('.skills__tech .skills__container');
    const tagsContainer = document.querySelector('.skills__tech .skills__tags');
    const hobbyContainer = document.querySelector('.skills__hobbies .skills__tags');

    if (techContainer && skills.tech) {
        const withIcons = skills.tech.filter(s => s.icon);
        const textOnly = skills.tech.filter(s => !s.icon);

        techContainer.innerHTML = withIcons.map((skill, i) => `
            <div class="skill-badge" data-gsap="skill-card" data-index="${i}">
                <img class="skill-badge__img" src="${skill.icon}" alt="Logo de ${skill.name}" loading="lazy">
                <span class="skill-badge__name">${skill.name}</span>
            </div>
        `).join('');

        if (tagsContainer) {
            tagsContainer.innerHTML = textOnly.map(skill => `
                <span class="skill-tag">${skill.name}</span>
            `).join('');
        }
    }

    if (hobbyContainer && skills.hobbies) {
        hobbyContainer.innerHTML = skills.hobbies.map(hobby => `
            <span class="skill-tag">${hobby.name}</span>
        `).join('');
    }
}
