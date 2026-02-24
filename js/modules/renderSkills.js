export function renderSkills(skills) {
    const techContainer = document.querySelector('.skills__tech .skills__container');
    const hobbyContainer = document.querySelector('.skills__hobbies .skills__container');

    if (techContainer && skills.tech) {
        techContainer.innerHTML = skills.tech.map(skill => `
            <div class="skill-badge">
                <img class="skill-badge__img" src="${skill.icon}" alt="Logo de ${skill.name}">
                <span class="skill-badge__name">${skill.name}</span>
            </div>
        `).join('');
    }

    if (hobbyContainer && skills.hobbies) {
        hobbyContainer.innerHTML = skills.hobbies.map(hobby => `
            <div class="hobby-badge">
                <span class="hobby-badge__name">${hobby.name}</span>
                <img class="hobby-badge__img" src="${hobby.icon}" alt="Icono de ${hobby.name}">
            </div>
        `).join('');
    }
}
