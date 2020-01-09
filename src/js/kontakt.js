import '../style.css';
import '../css/kontakt.css';
//materialize functions
document.addEventListener('DOMContentLoaded', function() {
    onResize()

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right',
        closOnClick: 'true'
    });
  });


//DOM MANIPULATION

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


const $igIcon = document.querySelector('#ig').addEventListener('click', () => {
    openLinkInNewTab('https://www.instagram.com/akademiazywienia/');
});
const $fbIcon = document.querySelector('#fb').addEventListener('click', () => {
    openLinkInNewTab('https://www.facebook.com/AkademiaZywieniaBrzeg/');
});
const $mapIcon = document.querySelector('#map').addEventListener('click', () => {
    openLinkInNewTab('https://g.page/akademia-zywienia-brzeg?share');
});

const openLinkInNewTab = (url) => {
    const win = window.open(url, '_blank')
};

const $emailIcon = document.querySelector('#email').addEventListener('click', () => {
  window.open('mailto:gabinet@akademiazywienia.com');
});
const $phoneIcon = document.querySelector('#phone').addEventListener('click', () => {
  window.open('tel:+48665126692')
});

//FOOTER
const $footer_prev = document.querySelector('#prev');
const $footer_next = document.querySelector('#next');
$footer_prev.addEventListener('click', () => {
  window.history.back();
});