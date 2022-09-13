export default function printMe() {
    console.log('I get called from print.js!');
}

// const pageLoad = (() => {
//     const container = document.getElementById('content')
    
//     const header = document.createElement('header')
//     header.textContent = 'this is a header'
//     container.append(header)
    
//     const body = document.createElement('main')
//     body.textContent = 'this is the main body of the page'
//     container.append(body)
    
//     const footer = document.createElement('footer')
//     footer.textContent = 'this is a footer'
//     container.append(footer)
    
//     const homeButton = document.createElement('button')
//     homeButton.textContent = 'Home'
    
//     const menuButton = document.createElement('button')
//     menuButton.textContent = 'Menu'
    
//     const contactButton = document.createElement('button')
//     contactButton.textContent = 'Contact'
    
//     header.append(homeButton, menuButton, contactButton)

//     return {
//         container,
//         header,
//         body, 
//         footer,
//         homeButton,
//         menuButton,
//         contactButton,
//     }
// })();

// export {
//     pageLoad
// };