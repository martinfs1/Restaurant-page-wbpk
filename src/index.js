import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";
import { Header, Footer } from './page-load'
import './style.css'

const Main = () => {
  const divMain = document.createElement('div');
  divMain.classList.add('divMain');

  divMain.innerText = ''
  divMain.appendChild(Home())

  document.addEventListener('click', (event) => {

    if (event.target.matches('.menuBtn')) {
      console.log('menuBtn')
      divMain.innerText = ""
      divMain.appendChild(Menu())

    } else if (event.target.matches('.contactBtn')) {
      console.log(event.target);
      divMain.innerText = ""
      divMain.appendChild(Contact())
    } else if (event.target.matches('.homeBtn')) {
      divMain.innerText = ''
      divMain.appendChild(Home())
    }

  })
  return divMain;
}

const pageLoad = () => {

  const refContentDiv = document.querySelector('#content');

  refContentDiv.classList.add('content')
  refContentDiv.appendChild(Header())
  refContentDiv.appendChild(Main())
  refContentDiv.appendChild(Footer())

}

pageLoad()
