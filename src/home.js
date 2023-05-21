
const Home = () => {

  const divHome = document.createElement('div');
  divHome.classList.add('divHome');

  const h2Home = document.createElement('h2');
  h2Home.innerText = 'Welcome to our Restaurant';

  const pHome = document.createElement('p');
  pHome.innerText = 'Experience the finest dining in town at our restaurant. We pride ourselves on serving delicious and exquisite dishes.'

  divHome.appendChild(h2Home)
  divHome.appendChild(pHome)

  return divHome;

}

export default Home;