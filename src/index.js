import pageLoad from './page-load'
import homeTab from './page-tabs'
import './style.css';
import Image from './chad-montano.jpg'

console.log('webpack seems to be working so far..')

// pageLoad.body.textContent = 'hello World'

// pageLoad.body.innerHTML = homeTab

// pageLoad.body.append(homeTab.contnt)

const element = document.createElement('div');
element.classList.add('hello');

const myIcon = new Image();
myIcon.src = Image;

element.appendChild(myIcon);