const navs = document.querySelectorAll('.nav');
const headerLinks = document.querySelectorAll('.header-link');


document.addEventListener('scroll', () => {
    if (window.scrollY > 88 && window.innerWidth > 775) {
        navs.forEach(nav => nav.classList.add('scrolled'));
        headerLinks.forEach(headerLink => headerLink.classList.add('scrolled'));
    } else {
        navs.forEach(nav => nav.classList.remove('scrolled'));
        headerLinks.forEach(headerLink => headerLink.classList.remove('scrolled'));
    }
});

const socialMediaContainer = document.querySelector('.social_media-container');

document.addEventListener('scroll', () => {
    if (window.scrollY > 800 && window.innerWidth > 775) {
        socialMediaContainer.classList.add('scrolled');
    } else {
        socialMediaContainer.classList.remove('scrolled');
    }
});

let lastScroll = 0;
let upStart = null;
const threshold = 120;   
const hideLimit = 138;     
const logoContainer = document.querySelector('.logo-container');

document.addEventListener('scroll', () => {
    const current = window.scrollY;

    if ((current > hideLimit) && window.innerWidth > 775) {
        logoContainer.classList.add('scrolled');
    }

    if (current > lastScroll) {
        upStart = null; 
    }
    else {
        if (upStart === null) {
            upStart = current;
        }

        const scrolledUp = upStart - current;

        if (scrolledUp >= threshold) {
            logoContainer.classList.remove('scrolled');
        }
    }

    lastScroll = current;
});
