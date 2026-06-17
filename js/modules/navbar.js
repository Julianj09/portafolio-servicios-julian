export function initNavbar() {
    const menuLinks = document.querySelectorAll('.menu__link');
    const menuCheckbox = document.getElementById('menu__bar');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuCheckbox) menuCheckbox.checked = false;
        });
    });

    if (typeof gsap !== 'undefined' && menuCheckbox) {
        const menuList = document.querySelector('.menu__list');
        const menuItems = menuList ? menuList.querySelectorAll('.menu__item') : [];
        const tl = gsap.timeline({ paused: true, reversed: true });

        if (menuItems.length) {
            tl.fromTo(menuList, {
                clipPath: 'circle(0% at 0% 0%)',
            }, {
                clipPath: 'circle(150% at 0% 0%)',
                duration: 0.5,
                ease: 'power3.inOut',
            })
            .from(menuItems, {
                y: 30,
                opacity: 0,
                duration: 0.4,
                stagger: 0.08,
                ease: 'power2.out',
            }, '-=0.3');

            menuCheckbox.addEventListener('change', () => {
                if (menuCheckbox.checked) {
                    tl.play();
                } else {
                    tl.reverse();
                }
            });
        }
    }
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
