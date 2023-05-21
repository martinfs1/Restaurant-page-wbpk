
const Contact = () => {

  const divContact = document.createElement('div');
  divContact.classList.add('divContact');

  const h2Contact = document.createElement('h2');
  h2Contact.innerText = 'Contact Us'

  const p1Contact = document.createElement('p')
  p1Contact.innerText = 'Visit us at our location or get in touch with us using the contact information below:';

  const p2Contact = document.createElement('p')
  p2Contact.innerText = 'Address: 123 Main Street, City';


  const p3Contact = document.createElement('p')
  p3Contact.innerText = 'Phone: (123) 456-7890';


  const p4Contact = document.createElement('p')
  p4Contact.innerText = 'Email: info@restaurant.com';


  const p5Contact = document.createElement('p')
  p5Contact.innerText = 'Follow us on social media for updates, special offers, and a behind-the-scenes look at our culinary creations.';


  const p6Contact = document.createElement('p')
  p6Contact.innerText = 'We are open from Monday to Saturday, from 11:00 AM to 10:00 PM. Come and experience the perfect blend of exceptional food, warm ambiance, and impeccable service at our restaurant.';

  divContact.appendChild(h2Contact);
  divContact.appendChild(p1Contact);
  divContact.appendChild(p2Contact);
  divContact.appendChild(p3Contact);
  divContact.appendChild(p4Contact);
  divContact.appendChild(p5Contact)
  divContact.appendChild(p6Contact);

  return divContact

}

export default Contact;