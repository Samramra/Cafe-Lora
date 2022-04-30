import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { id, name, layers, image } = props;
  let { ordered } = props;
  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = `
  <div class="drink__product">
  <div class="drink__cup">
  <img src ="${image}"/>
  </div>
  <div class="drink__info">
                <h3>${name}</h3>
                </div>
                </div>
                <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>
             `;
  let kafe = element.querySelector('.drink__info');
  layers.forEach((item) => {
    kafe.innerHTML += Layer(item);

    const orderBtnElm = element.querySelector('.order-btn');
    orderBtnElm.addEventListener('click', () => {
      /*anonymní fce, která nastaví změnu na tlačítku, když kliknu zavolá tu fci*/
      const cupElm =
        element.querySelector(
          '.drink__cup',
        ); /*musíš to dát před podmínku, jinak se ti nebude měnit obrázek při zrušení objednávky*/
      if (!ordered) {
        orderBtnElm.innerHTML = 'Zrušit';

        cupElm.classList.add('drink__cup--selected');
        ordered = true;
      } else {
        orderBtnElm.innerHTML = 'Objednat';
        cupElm.classList.remove('drink__cup--selected');
        ordered = false;
        /*po kliknutí na tlačítko, se změní text na tlačítku*/
      }
    });
  });
  return element;
};
