import './style.css';

console.log('funguju!');
const navBtn = document.querySelector('#nav-btn'); /*připojení tlačítka*/

const zmena = () => {
  document.querySelector('nav').classList.toggle('nav-closed');
};
navBtn.addEventListener('click', zmena);
/*změna na klik otevře a na klik zaveře*/

let odkazyNavigace =
  document.querySelectorAll(
    'nav > a',
  ); /*připojení na jednotlivé položky jako doma menu..*/
for (let i = 0; i < odkazyNavigace.length; i++) {
  odkazyNavigace[i].addEventListener('click', zmena);
}
/*for cyklus mi při kliknutí na položku menu, sroluje na příslušnou část stránky a zavře menu*/
