import '../style.css';
//materialize functions
document.addEventListener('DOMContentLoaded', function() {
    onResize()

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right'
    });
  });



//DOM manipulation
let windowHeight = window.innerHeight;
 let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  if (window.innerHeight !== windowHeight) {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  onResize()
  }
});

const $body = document.body.clientHeight;
const $mainImgBlock = document.querySelector('#mainImg')
const $mainContentBlock = document.querySelector('#mainContent');
const $mainBtnText = document.querySelector('.section__main-btn > a');
const onResize = () => {
  window.innerWidth >= 1024 ? (
    $mainContentBlock.classList.remove('container'),
    $mainImgBlock.style.height = $body,
    $mainBtnText.textContent = 'Poznaj naszą ofertę!',
    $mainBtnText.href = './oferta.html'
    ) : $mainContentBlock.classList.add('container') ;
}


//NAVBAR TOGGLE
const $navbar = document.querySelector('.navbar');
let didScroll = false
let lastScrollTop = 0;
const minScrollPoint = 5;

window.addEventListener('scroll', () => {
  didScroll = true;
});

const hasScrolled = () => {
  const winScroll = window.scrollY

  if(Math.abs(lastScrollTop - winScroll) <= minScrollPoint) {
      return
  }
  if(Math.ceil(winScroll + window.innerHeight) >= document.body.scrollHeight) {
      return $navbar.classList.remove('nav-up');
  }

  if(winScroll > lastScrollTop && winScroll > $navbar.offsetHeight) {
      $navbar.classList.add('nav-up')
  } else {
      $navbar.classList.remove('nav-up')
  }

  lastScrollTop = winScroll
}

setInterval(() => {
  if(window.innerWidth < 1024) {
      if(didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }
}, 250);

//Navbar animation

const $mainBtn = document.querySelector('.section__main-btn');
const navText = document.querySelector('.nav__title');
window.addEventListener('load', function() {
  if(window.innerWidth < 1024) {
    const navContext = navText.textContent;
    const navLetters = navContext.split('');
    navText.textContent = '';
    navText.style.setProperty('opacity', 1);
    $mainBtn.style.setProperty('opacity', 1);

    for(let i = 0; i < navLetters.length; i++) {
      navText.innerHTML += `<span>${navLetters[i]}</span>`
    }

    let char = 0;
    let timer = setInterval(onTick, 50);
    function onTick() {
      const span = navText.querySelectorAll('span')[char];
      span.classList.add('show');
      char++;
      if(char === navLetters.length) {
        stopAnimation();
        return
      }
    }

    function stopAnimation() {
      clearInterval(timer);
      timer = null;
    }
  } else {
    navText.style.setProperty('opacity', 1);
    $mainBtn.style.setProperty('opacity', 1);
  }
});

//FOOTER
const $footer_prev = document.querySelector('.footer__block.prev');
if(window.location.href !== '/') {
  $footer_prev.style.setProperty('opacity', '0');
} else {
  $footer_prev.addEventListener('click', () => {
    window.history.back();
  })
}



