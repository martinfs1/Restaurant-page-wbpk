
const Nav = () => {

  const nav = document.createElement('nav');
  const ul = document.createElement('ul')
  const homeBtn = document.createElement('button')
  homeBtn.classList.add('homeBtn')
  const menuBtn = document.createElement('button')
  menuBtn.classList.add('menuBtn')
  const contactBtn = document.createElement('button')
  contactBtn.classList.add('contactBtn')


  homeBtn.innerText = "Home";
  menuBtn.innerText = 'Menu'
  contactBtn.innerText = 'Contact'

  ul.appendChild(homeBtn)
  ul.appendChild(menuBtn)
  ul.appendChild(contactBtn)
  nav.appendChild(ul)

  return nav
}

const Header = () => {
  const divHeader = document.createElement('div');
  divHeader.classList.add('divHeader');
  const h1 = document.createElement('h1');

  h1.innerText = 'Restaurant WBPK';
  divHeader.appendChild(h1);
  divHeader.appendChild(Nav());

  return divHeader;
}

const Footer = () => {
  const divFooter = document.createElement('div');
  divFooter.classList.add('divFooter');

  const footerParagraph = document.createElement('p')
  footerParagraph.innerText = 'Website created with Webpack'
  divFooter.appendChild(footerParagraph)

  return divFooter;
}

export { Header, Footer }