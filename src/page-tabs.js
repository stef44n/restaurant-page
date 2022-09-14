import pageLoad from './page-load'
import Image from './chad-montano.jpg'
import Image2 from './jeanson-wong.jpg'
import Image3 from './louis-hansel.jpg'

const homeTab = (() => {
    const content = document.createElement('div')
    content.setAttribute('class', 'cardBackground')
    pageLoad.body.append(content)

    const heading = document.createElement('div')
    heading.innerHTML = '<h1>House of Hummus</h1>'
    heading.setAttribute('class', 'card heading')
    content.append(heading)

    const para1 = document.createElement('div')
    para1.innerHTML = '<p>\"The restaurant offers the best selection of hummus in the country! It\'s my favourite eatery in the city and I can\'t recommend it enough!\" <br><b><i>Roger</i></b></p>'
    para1.setAttribute('class', 'card')
    content.append(para1)
    
    const para2 = document.createElement('div')
    para2.innerHTML = '<h3 align="center">OPENING HOURS</h3><p align="center">Mon-Fri 12.00 - 22.00<br> Sat 14-00 - 23.00<br> Sun 14.00 - 23.00</p>'
    para2.setAttribute('class', 'card')
    content.append(para2)
    
    const para3 = document.createElement('div')
    para3.innerHTML = '<h3>Location</h3><p>2 Stone Rd, Epsom, EP5 0MM, London</p>'
    para3.setAttribute('class', 'card')
    content.append(para3)
});

const menuTab = (() => {
    const content = document.createElement('div')
    content.setAttribute('class', 'cardBackground')
    pageLoad.body.append(content)

    const heading = document.createElement('div')
    heading.innerHTML = '<h1>MENU</h1>'
    heading.setAttribute('class', 'card heading')
    content.append(heading)
    
    const heading2 = document.createElement('div')
    heading2.innerHTML = '<h2>DRINKS</h2>'
    heading2.setAttribute('class', 'card heading')
    content.append(heading2)

    const para1 = document.createElement('div')
    para1.innerHTML = '<li>Coca-Cola <li>Pepsi <li>Tango <li>Rubicon <li>Sprite <li>Water <li>Tea <li>Coffee'
    para1.setAttribute('class', 'card')
    content.append(para1)

    const image1 = document.createElement('img')
    image1.src = Image2
    image1.setAttribute('class', 'image1')
    para1.append(image1)

    const heading3 = document.createElement('div')
    heading3.innerHTML = '<h2>SIDES</h2>'
    heading3.setAttribute('class', 'card heading')
    content.append(heading3)
    
    const para2 = document.createElement('div')
    para2.innerHTML = '<li>Hummus <li>Fries <li>Rice'
    para2.setAttribute('class', 'card')
    content.append(para2)

    const image2 = document.createElement('img')
    image2.src = Image3
    image2.setAttribute('class', 'image2')
    para1.append(image2)

    const heading4 = document.createElement('div')
    heading4.innerHTML = '<h2>MAINS</h2>'
    heading4.setAttribute('class', 'card heading')
    content.append(heading4)
    
    const para3 = document.createElement('div')
    para3.innerHTML = '<li>Pizza <li>Chicken <li>Pasta <li>Steak <li>Moussaka <li>Seafood'
    para3.setAttribute('class', 'card')
    content.append(para3)

    const image3 = document.createElement('img')
    image3.src = Image
    image3.setAttribute('class', 'image3')
    para3.append(image3)
});

const contactTab = (() => {
    const content = document.createElement('div')
    content.setAttribute('class', 'cardBackground')
    pageLoad.body.append(content)

    const heading = document.createElement('div')
    heading.innerHTML = '<h1>CONTACT US</h1>'
    heading.setAttribute('class', 'card heading')
    content.append(heading)

    const para1 = document.createElement('div')
    para1.innerHTML = '<h3>Owner</h3><p>0123 456 789<br> owner@hoh.mail</p>'
    para1.setAttribute('class', 'card')
    content.append(para1)
    
    const para2 = document.createElement('div')
    para2.innerHTML = '<h3>Manager</h3><p>0123 456 788<br> manager@hoh.mail</p>'
    para2.setAttribute('class', 'card')
    content.append(para2)
    
    const para3 = document.createElement('div')
    para3.innerHTML = '<h3>Chef</h3><p>0123 456 787<br> chef@hoh.mail</p>'
    para3.setAttribute('class', 'card')
    content.append(para3)
});

export {
    homeTab,
    menuTab,
    contactTab,
};