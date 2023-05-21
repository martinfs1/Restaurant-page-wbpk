
const Menu = () => {

  const divMenu = document.createElement('div');
  divMenu.classList.add('divMenu')

  const h2Menu = document.createElement('h2');
  h2Menu.innerText = 'Menu'

  const p1Menu = document.createElement('p')
  p1Menu.innerText = 'Indulge in a wide variety of delectable dishes carefully prepared by our talented chefs. From savory starters to mouthwatering main courses, we have something to satisfy every palate.'

  const p2Menu = document.createElement('p')
  p2Menu.innerText = 'Our menu showcases a fusion of international flavors with locally sourced ingredients, ensuring freshness and quality in every bite.'

  const p3Menu = document.createElement('p')
  p3Menu.innerText = "Join us for a memorable culinary journey, where our chefs' creativity and expertise will take you on a delightful gastronomic adventure."

  divMenu.appendChild(h2Menu);
  divMenu.appendChild(p1Menu);
  divMenu.appendChild(p2Menu);
  divMenu.appendChild(p3Menu);

  return divMenu;
}

export default Menu
