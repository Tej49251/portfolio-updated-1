/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)



function openCertificate(src) {
  const viewer = document.getElementById("certViewer");
  const image = document.getElementById("certImage");

  viewer.style.display = "flex";
  image.src = src;
}

function closeCertificate() {
  const viewer = document.getElementById("certViewer");
  const image = document.getElementById("certImage");

  viewer.style.display = "none";
  image.src = "";
}


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});


const roles = ["Web Designer", "Backend Developer", "Python Coder","Full-Stack Developer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing effect (in ms)
const delayBetweenRoles = 1500; // Time before switching to the next role (in ms)

const roleElement = document.getElementById("role");

function typeRole() {
  if (charIndex < roles[index].length) {
    roleElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed); // Typing next character
  } else {
    setTimeout(() => {
      charIndex = 0; // Reset character index for next role
      roleElement.textContent = ""; // Clear the current role
      index = (index + 1) % roles.length; // Move to the next role
      typeRole(); // Start typing the next role
    }, delayBetweenRoles);
  }
}

typeRole(); // Initial call to start typing effect

// Select the button and icon
const likeButton = document.getElementById('likeButton');
const heartIcon = document.getElementById('heartIcon');

// Add a click event listener to the button
likeButton.addEventListener('click', () => {
    // Toggle the class for red color
    heartIcon.classList.toggle('red-heart');
});



sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
