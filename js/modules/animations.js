export function initAnimations() {
    if (typeof gsap === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    heroEntrance();
    navbarScroll();
    magneticButtons();
    themeToggleAnim();
    aboutReveal();
    skillsReveal();
    cardTilt();
    educationReveal();
    projectsReveal();
    sectionTitlesReveal();
    footerReveal();
}

function heroEntrance() {
    const title = document.querySelector('[data-gsap="hero-title"]');
    const nameWords = document.querySelectorAll('[data-gsap="hero-name"] .hero__title-word');
    const desc = document.querySelector('[data-gsap="hero-desc"]');
    const cta = document.querySelector('[data-gsap="hero-cta"]');
    const ctaItems = cta ? cta.querySelectorAll('.hero__item') : [];
    const content = document.querySelector('[data-gsap="hero-content"]');

    if (!content) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(content, {
        opacity: 0,
        y: 30,
        duration: 0.6,
    });

    if (title) {
        tl.from(title, {
            y: 20,
            opacity: 0,
            duration: 0.5,
        }, '-=0.3');
    }

    if (nameWords.length) {
        tl.from(nameWords, {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power2.out',
        }, '-=0.2');
    }

    if (desc) {
        tl.from(desc, {
            y: 20,
            opacity: 0,
            duration: 0.5,
        }, '-=0.1');
    }

    if (ctaItems.length) {
        tl.from(ctaItems, {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
        }, '-=0.2');
    }

}

function navbarScroll() {
    const menu = document.querySelector('.menu');
    if (!menu) return;

    ScrollTrigger.create({
        start: 'top -60px',
        onUpdate: self => {
            if (self.progress > 0) {
                menu.classList.add('scrolled');
            } else {
                menu.classList.remove('scrolled');
            }
        },
    });
}

function magneticButtons() {
    const buttons = document.querySelectorAll('[data-gsap="magnetic"]');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                scale: 1.05,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto',
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)',
                overwrite: 'auto',
            });
        });
    });
}

function themeToggleAnim() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const icon = toggle.querySelector('i');
        if (!icon) return;

        gsap.to(icon, {
            rotation: 360,
            scale: 1.3,
            duration: 0.4,
            ease: 'back.out(2)',
            onComplete: () => {
                gsap.set(icon, { rotation: 0 });
            },
        });
    });
}

function aboutReveal() {
    const title = document.querySelector('[data-gsap="about-title"]');
    const desc = document.querySelector('[data-gsap="about-desc"]');
    const img = document.querySelector('[data-gsap="about-img"]');

    if (title) {
        ScrollTrigger.create({
            trigger: title,
            start: 'top 85%',
            onEnter: () => {
                gsap.fromTo(title, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
            },
            once: true,
        });
    }

    if (desc) {
        ScrollTrigger.create({
            trigger: desc,
            start: 'top 85%',
            onEnter: () => {
                gsap.fromTo(desc, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.15 });
            },
            once: true,
        });
    }

    if (img) {
        ScrollTrigger.create({
            trigger: img,
            start: 'top 85%',
            onEnter: () => {
                gsap.fromTo(img, { x: 40, opacity: 0, rotateY: -5 }, { x: 0, opacity: 1, rotateY: -2, duration: 0.8, ease: 'power3.out' });
            },
            once: true,
        });
    }
}

function skillsReveal() {
    const cards = document.querySelectorAll('[data-gsap="skill-card"]');
    if (cards.length) {
        ScrollTrigger.create({
            trigger: cards[0].parentElement,
            start: 'top 80%',
            onEnter: () => {
                gsap.fromTo(cards,
                    { y: 40, opacity: 0, scale: 0.9 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: 'back.out(1.2)' }
                );
            },
            once: true,
        });
    }
}

function cardTilt() {
    const cards = document.querySelectorAll('.skill-badge');
    if (!cards.length) return;

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to(card, {
                rotateX: y * -12,
                rotateY: x * 12,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto',
            });

            const img = card.querySelector('.skill-badge__img');
            if (img) {
                gsap.to(img, {
                    z: 20,
                    duration: 0.4,
                    ease: 'power2.out',
                    overwrite: 'auto',
                });
            }
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)',
                overwrite: 'auto',
            });

            const img = card.querySelector('.skill-badge__img');
            if (img) {
                gsap.to(img, {
                    z: 0,
                    duration: 0.4,
                    ease: 'power2.out',
                    overwrite: 'auto',
                });
            }
        });
    });
}

function educationReveal() {
    const cards = document.querySelectorAll('[data-gsap="edu-card"]');
    if (!cards.length) return;

    cards.forEach(card => {
        ScrollTrigger.create({
            trigger: card,
            start: 'top 88%',
            onEnter: () => {
                gsap.fromTo(card,
                    { x: -30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
                );
            },
            once: true,
        });
    });
}

function projectsReveal() {
    const showcase = document.querySelector('[data-gsap="showcase"]');
    const grid = document.querySelector('[data-gsap="projects-grid"]');
    const cards = grid ? [...grid.children] : [];

    if (showcase) {
        ScrollTrigger.create({
            trigger: showcase,
            start: 'top 85%',
            onEnter: () => {
                gsap.fromTo(showcase,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
                );
            },
            once: true,
        });
    }

    if (cards.length) {
        ScrollTrigger.create({
            trigger: grid,
            start: 'top 82%',
            onEnter: () => {
                gsap.fromTo(cards,
                    { y: 30, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: 'back.out(1.2)' }
                );
            },
            once: true,
        });
    }

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.03,
                y: -4,
                duration: 0.3,
                ease: 'power2.out',
                overwrite: 'auto',
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                y: 0,
                duration: 0.4,
                ease: 'elastic.out(1, 0.3)',
                overwrite: 'auto',
            });
        });
    });
}

function sectionTitlesReveal() {
    const titles = document.querySelectorAll('.section-title');
    if (!titles.length) return;

    titles.forEach(title => {
        ScrollTrigger.create({
            trigger: title,
            start: 'top 85%',
            onEnter: () => {
                gsap.fromTo(title,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
                );
            },
            once: true,
        });
    });
}

function footerReveal() {
    const footer = document.querySelector('.footer');
    const social = document.querySelector('.footer__social');
    const copy = document.querySelector('.footer__copy');

    if (footer) {
        ScrollTrigger.create({
            trigger: footer,
            start: 'top 90%',
            onEnter: () => {
                const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

                tl.from(footer, {
                    y: 30,
                    opacity: 0,
                    duration: 0.5,
                });

                if (social) {
                    const links = social.querySelectorAll('a');
                    tl.from(links, {
                        y: 20,
                        opacity: 0,
                        duration: 0.4,
                        stagger: 0.1,
                    }, '-=0.2');
                }

                if (copy) {
                    tl.from(copy, {
                        y: 20,
                        opacity: 0,
                        duration: 0.4,
                    }, '-=0.1');
                }
            },
            once: true,
        });
    }
}
