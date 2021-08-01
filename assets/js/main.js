// SHOW MENU
const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close");

// MENU SHOW
if (navToggle) {
    navToggle.addEventListener("click",() => {
        navMenu.classList.add("show-menu");
    })
}

// MENU HIDDEN

if (navClose) {
    navClose.addEventListener('click',() => {
        navMenu.classList.remove("show-menu");
    })
}

// REMOVE MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// SWIPER DISCOVER
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween:32,
    coverflowEffect: {
      rotate: 0,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

// VIDEO 
const videoFile = document.getElementById("video-file"),
videoButtton = document.getElementById("video-button"),
videoIcon = document.getElementById("video-icon");

const playPause = () => {
    if(videoFile.paused) {
        // Play Video
        videoFile.play();

        // We change the icon
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        // Payse video
        videoFile.pause();

        // We change the icon
        videoIcon.classList.remove("ri-pause-line")
        videoIcon.classList.add("ri-play-line")
    }
}

videoButtton.addEventListener("click",playPause);

const finalVideo = () => {
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}

// ended, why the video ends
videoFile.addEventListener('ended',finalVideo); 

// SHOW SCROLL UP

const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove("show-scroll");
} 

window.addEventListener('scroll',scrollUp);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    })
}

window.addEventListener('scroll',scrollActive);

// DARK LIGHT 
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' :'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? "add" : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// SCROLL REVEAL ANIMATIOn

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
})

sr.reveal('.home__data, .home__social-link, .home__info' , {
    origin:'top',
    interval:100,
})

sr.reveal(".about__data",{
    origin:"left",
})

sr.reveal(".about__img-overlay",{
    origin:"right",
    interval:100,
})