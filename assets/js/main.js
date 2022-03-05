const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'dark-change-theme';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'change-theme' ? 'add' : 'remove'](
    iconTheme
  );
}
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home_img, .about_img, .about_emp`, { delay: 600 });
sr.reveal(
  `.home_data, .about_emp, .about_text, .project_title, .services_title`,
  {
    delay: 300,
  }
);
sr.reveal(`.project_data, .services_container`, { delay: 400 });

const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav_menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav_menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

//ANIMAÇÃO DE CONHECIMENTOS - LINGUAGENS 
let texto1 = document.querySelector(".mudarTextoDescricao");

document.querySelector(".html").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "<span>HTML</span> é uma linguagem de marcação utilizada na construção de páginas na Web. <br><br> 3 anos de experiência";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "<span>CSS</span> é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML. <br><br> 3 anos de experiência";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "<span>JavaScript</span> é uma linguagem de programação estruturada de script em alto nível. <br><br> 10 meses de experiência";
});

let sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `Juntos para novos conhecimentos #neverstoplearning.💜<br><br>
    <em>para ter uma introdução a mais sobre as techs, passe o <strong>mouse por cima.</strong></em>
    `;
  });
}