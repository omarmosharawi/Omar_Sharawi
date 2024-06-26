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

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

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

const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400});
sr.reveal('.home__social-icon',{ interval: 200});
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});


var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const phrases = ["Software Engineer", "Software Developer", "Creative Coder"];
let currentPhrase = 0;
let letterCount = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const element = document.getElementById('typing');
  const fullPhrase = phrases[currentPhrase];

  if (isDeleting) {
    currentText = fullPhrase.substring(0, letterCount - 1);
    letterCount--;
  } else {
    currentText = fullPhrase.substring(0, letterCount + 1);
    letterCount++;
  }

  element.innerHTML = currentText;

  if (!isDeleting && currentText === fullPhrase) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && currentText === '') {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
  }

  const typingSpeed = isDeleting ? 50 : 100;
  setTimeout(type, typingSpeed);
}
type();

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function showError(errorElement, message) {
    errorElement.textContent = message;
}

function hideError(errorElement) {
    errorElement.textContent = '';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidForm() {
    return nameInput.value.trim() && isValidEmail(emailInput.value.trim()) && messageInput.value.trim();
}

function clearForm() {
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  hideError(nameError);
  hideError(emailError);
  hideError(messageError);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!nameInput.value.trim()) {
      showError(nameError, 'Name is required');
  } else {
      hideError(nameError);
  }
  if (!isValidEmail(emailInput.value.trim())) {
      showError(emailError, 'Invalid email address');
  } else {
      hideError(emailError);
  }
  if (!messageInput.value.trim()) {
      showError(messageError, 'Message is required');
  } else {
      hideError(messageError);
  }
  if (isValidForm()) {
      console.log('Form submitted successfully!');
      clearForm();
  }
});

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("hidden");
});

window.onload = function() {
  document.getElementById('loading-screen').style.display = 'block';

  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
  }, 500);
};
