export function renderHero(profile, social) {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    heroSection.innerHTML = `
        <div class="hero__container">
            <h1 class="hero__title">Hola, soy ${profile.name}.</h1>
            <p class="hero__description">${profile.description}</p>
            <ul class="hero__social">
                <li class="hero__item">
                    <a href="${profile.cvPath}" target="_blank" class="btn btn--primary">
                        Curriculum <i class="uil uil-external-link-alt"></i>
                    </a>
                </li>
                <li class="hero__item">
                    <a href="${social.linkedin}" target="_blank" class="btn btn--secondary">
                        LinkedIn <i class="uil uil-linkedin"></i>
                    </a>
                </li>
                <li class="hero__item">
                    <a href="${social.github}" target="_blank" class="btn btn--secondary">
                        Github <i class="uil uil-github"></i>
                    </a>
                </li>
            </ul>
        </div>
        <img src="${profile.profileImage}" alt="Foto de perfil de ${profile.name}" class="hero__profile" fetchpriority="high">
    `;
}

export function renderAbout(profile) {
    const aboutContainer = document.querySelector('.about__container');
    if (!aboutContainer) return;

    aboutContainer.innerHTML = `
        <div class="about__text">
            <h3 class="section-title">Sobre mí</h3>
            <p class="about__description">
                ${profile.about.replace(/\n/g, '<br>')}
            </p>
        </div>
        <div class="about__img">
            <figure>
                <img src="assets/images/about/about-dev.webp" alt="Ilustración desarrollador" class="about__img--optional" loading="lazy">
            </figure>
        </div>
    `;
}
