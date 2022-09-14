import pageLoad from './page-load'
import {homeTab, menuTab, contactTab} from './page-tabs'
import './style.css';
import Image from './chad-montano.jpg'
import printMe from './print.js';
import _ from 'lodash';


console.log('webpack seems to be working so far..')

// function component() {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');
 
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;
 
//     element.appendChild(btn);
 
//     return element;
// }

// document.body.appendChild(component());

// pageLoad.body.textContent = 'hello World'

function clearContent() {
    pageLoad.body.innerHTML = '';
}

homeTab();

pageLoad.homeButton.addEventListener('click', () => {
    clearContent();
    homeTab();
})

pageLoad.menuButton.addEventListener('click', () => {
    clearContent();
    menuTab();
})

pageLoad.contactButton.addEventListener('click', () => {
    clearContent();
    contactTab();
})

// clearContent()