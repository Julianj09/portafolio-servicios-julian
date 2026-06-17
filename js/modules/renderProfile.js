function splitTextToSpans(text) {
    return text.split(' ').map(word => `<span class="hero__title-word">${word}</span>`).join(' ');
}

export function renderHero(profile, social) {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const nameWords = splitTextToSpans(profile.name);

    heroSection.innerHTML = `
        <div class="hero__container" data-gsap="hero-content">
            <h1 class="hero__title" data-gsap="hero-title">
                <span class="hero__title-line">Hola, soy</span>
                <span class="hero__title-line hero__title-line--name" data-gsap="hero-name">${nameWords}</span>
            </h1>
            <span class="hero__role">${profile.role}</span>
            <p class="hero__description" data-gsap="hero-desc">${profile.description}</p>
            <ul class="hero__social" data-gsap="hero-cta">
                <li class="hero__item">
                    <a href="${profile.cvPath}" target="_blank" class="btn btn--primary" data-gsap="magnetic">
                        Curriculum <i class="uil uil-external-link-alt"></i>
                    </a>
                </li>
                <li class="hero__item">
                    <a href="${social.linkedin}" target="_blank" class="btn btn--secondary" data-gsap="magnetic">
                        LinkedIn <i class="uil uil-linkedin"></i>
                    </a>
                </li>
                <li class="hero__item">
                    <a href="${social.github}" target="_blank" class="btn btn--secondary" data-gsap="magnetic">
                        Github <i class="uil uil-github"></i>
                    </a>
                </li>
            </ul>
        </div>
    `;
}

export function renderAbout(profile) {
    const aboutContainer = document.querySelector('.about__container');
    if (!aboutContainer) return;

    aboutContainer.innerHTML = `
        <h3 class="section-title" data-gsap="about-title">Sobre mí</h3>
        <div class="about__content">
            <p class="about__description" data-gsap="about-desc">
                ${profile.about.replace(/\n/g, '<br>')}
            </p>
            <div class="about__image" data-gsap="about-img">
                <img src="${profile.profileImage}" alt="Foto de perfil de ${profile.name}" class="about__img" loading="lazy">
            </div>
        </div>
    `;
}
