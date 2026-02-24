export function initNavbar() {
    const header = document.querySelector('.menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Close mobile menu when a link is clicked
    const menuLinks = document.querySelectorAll('.menu__link');
    const menuCheckbox = document.getElementById('menu__bar');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuCheckbox) menuCheckbox.checked = false;
        });
    });
}

export function renderFooter(social) {
    const footerSocial = document.querySelector('.footer__social');
    if (footerSocial) {
        footerSocial.innerHTML = `
            <a href="${social.linkedin}" target="_blank" aria-label="LinkedIn"><i class="uil uil-linkedin"></i></a>
            <a href="${social.github}" target="_blank" aria-label="Github"><i class="uil uil-github"></i></a>
            <a href="mailto:${social.email}" aria-label="Email"><i class="uil uil-envelope"></i></a>
        `;
    }
}
