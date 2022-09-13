import pageLoad from './page-load'

const homeTab = (() => {
    const content = document.createElement('div')
    // content.innerText = 'THIS IS HOME'
    content.setAttribute('class', 'cardBackground')
    pageLoad.body.append(content)

    const heading = document.createElement('div')
    heading.innerText = 'RESTAURANT NAME'
    heading.setAttribute('class', 'card heading')
    content.append(heading)

    const para1 = document.createElement('div')
    para1.innerText = 'SHORT para'
    para1.setAttribute('class', 'card')
    content.append(para1)
    
    const para2 = document.createElement('div')
    para2.innerText = 'OPENING hours'
    para2.setAttribute('class', 'card')
    content.append(para2)
    
    const para3 = document.createElement('div')
    para3.innerText = 'Location'
    para3.setAttribute('class', 'card')
    content.append(para3)
});

const menuTab = (() => {
    const content = document.createElement('p')
    content.innerText = 'THIS IS MENU'
    pageLoad.body.append(content)
});

const contactTab = (() => {
    const content = document.createElement('p')
    content.innerText = 'THIS IS CONTACT'
    pageLoad.body.append(content)
});

export {
    homeTab,
    menuTab,
    contactTab,
};