import './style.css';

import { Layer } from './Layer/index.js';

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
  ); /*připojení na jednotlivé položky třídy nav jako doma menu..*/
for (let i = 0; i < odkazyNavigace.length; i++) {
  odkazyNavigace[i].addEventListener('click', zmena);
}
/*for cyklus mi při kliknutí na položku menu, sroluje na příslušnou část stránky a zavře menu*/

let ordered = false;
const orderBtnElm = document.querySelector('.order-btn');
orderBtnElm.addEventListener('click', () => {
  /*anonymní fce, která nastaví změnu na tlačítku, když kliknu zavolá tu fci*/
  if (!ordered) {
    orderBtnElm.innerHTML = 'Zrušit';
    const cupElm = document.querySelector('.drink__cup');
    cupElm.classList.add('drink__cup--selected');
    ordered = true;
  } else {
    orderBtnElm.innerHTML = 'Objednat';
    cupElm.classList.remove('drink__cup--selected');
    ordered = false;
    /*po kliknutí na tlačítko, se změní text na tlačítku*/
  }
});
const drinkinfoElm = document.querySelector('.drink__info');

const capucino1 = {
  color: '#feeeca',
  label: 'mléčná pěna',
};
const capucino2 = {
  color: '#fed7b0',
  label: 'teplé mléko',
};
const capucino3 = {
  color: '#613916',
  label: 'espresso',
};
let cappucino = [capucino1, capucino2, capucino3];
cappucino.forEach((item) => {
  drinkinfoElm.innerHTML += Layer(item);
});
