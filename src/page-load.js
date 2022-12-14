import './style.css';

const pageLoad = (() => {
    const content = document.createElement('div')
    content.setAttribute('id', 'content')
    document.body.append(content)

    const container = document.getElementById('content')
    
    const header = document.createElement('header')
    // header.textContent = 'this is a header'
    container.append(header)
    
    const body = document.createElement('main')
    // body.textContent = 'this is the main body of the page'
    container.append(body)
    
    const footer = document.createElement('footer')
    footer.innerHTML = '&copy; Stefan S. TOP 2022'
    container.append(footer)
    
    const homeButton = document.createElement('button')
    homeButton.textContent = 'Home'
    
    const menuButton = document.createElement('button')
    menuButton.textContent = 'Menu'
    
    const contactButton = document.createElement('button')
    contactButton.textContent = 'Contact'
    
    header.append(homeButton, menuButton, contactButton)

    return {
        container,
        header,
        body, 
        footer,
        homeButton,
        menuButton,
        contactButton,
    }
})();

export default pageLoad;