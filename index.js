const state = {
    places: [],
    tab: null
}

function renderHeader(){
    const headerEl = document.createElement('header')
    headerEl.setAttribute('class', 'header-section')

    const pageNameEl = document.createElement('h1')
    pageNameEl.setAttribute('class', 'logo-header-section')
    pageNameEl.textContent = 'Visit Albania'

    headerEl.append(pageNameEl)
    document.body.append(headerEl)
}

function renderMain(){
    const mainEl = document.createElement('main')
    mainEl.setAttribute('class', 'main-section')

    const firstImageEl = document.createElement('img')
    firstImageEl.setAttribute('class', 'image-main-section')
    firstImageEl.setAttribute('src', 'https://albania.al/wp-content/uploads/2019/08/krujacrop2.jpg')
    firstImageEl.setAttribute('alt', 'first-image')

    const pageNameEl = document.createElement('h2')
    pageNameEl.setAttribute('class', 'logo-header-section')
    pageNameEl.textContent = 'Visit Albania'

    const whereToGosectionEl = document.createElement('section')
    whereToGosectionEl.setAttribute('class', 'where-to-go-main-section')

    const placeImageEl = document.createElement('img')
    placeImageEl.setAttribute('src', 'https://albania.al/wp-content/uploads/2019/08/krujacrop2.jpg')
    placeImageEl.setAttribute('class', 'place-image-main-section')
    placeImageEl.setAttribute('alt', 'place-image')

    whereToGosectionEl.append(placeImageEl)
    mainEl.append(firstImageEl, pageNameEl, whereToGosectionEl)
    document.body.append(mainEl)
}

renderHeader()
renderMain()