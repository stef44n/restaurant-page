import pageLoad from './page-load'

const homeTab = (() => {
    const contnt = pageLoad.body.querySelector('body')

    const content = document.createElement('div')
    content.setAttribute('id', 'homeContent')
    contnt.append(content)

    const heading = document.createElement('div')
    heading.textContent = 'HOME PAGE'
    heading.append(content)
})();

export default homeTab;