import '../style.css';
import '../css/warsztaty.css';
//materialize functions
document.addEventListener('DOMContentLoaded', function() {
    onResize()

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right'
    });
  });


//DOM MANIPULATION
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

window.addEventListener('load', function() {
  const content = document.querySelector('#mainContent').classList.add('active');
})

const $body = document.body.clientHeight;
const $mainImgBlock = document.querySelector('#mainImg')
const $mainContentBlock = document.querySelector('#mainContent');

const onResize = () => {
    window.innerWidth >= 1024 ? (
      $mainContentBlock.classList.remove('container'),
      $mainImgBlock.style.height = $body
      ) : $mainContentBlock.classList.add('container');
  }

//FOOTER
const $footer_prev = document.querySelector('#prev');
const $footer_next = document.querySelector('#next');
$footer_prev.addEventListener('click', () => {
  window.history.back();
})