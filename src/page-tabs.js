import pageLoad from './page-load'

const homeTab = (() => {
    const content = document.createElement('p')
    content.innerText = 'THIS IS HOME'
    pageLoad.body.append(content)
});

export default homeTab;