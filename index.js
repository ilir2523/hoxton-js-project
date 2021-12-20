const state = {
    places: [],
    tab: null
}

function fetchPlaces() {
    return fetch("http://localhost:3000/cities").then(resp => resp.json())
}

function getCitiesFromServerToPlaces(){
    return fetchPlaces().then(function (city) {
        state.places = city
        render()
    })
}

getCitiesFromServerToPlaces()

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

    for (place of state.places) {
        const placesContainerDivEl = document.createElement('div')
        placesContainerDivEl.setAttribute('class', 'container')

        const placeImageEl = document.createElement('img')
        placeImageEl.setAttribute('src', place.image)
        placeImageEl.setAttribute('class', 'place-image-main-section')
        placeImageEl.setAttribute('alt', 'place-image')

        const placeNameH3El =document.createElement('h3')
        placeNameH3El.setAttribute('class', 'place-name-main-section')
        placeNameH3El.textContent = place.name

        placesContainerDivEl.append(placeImageEl, placeNameH3El)
        whereToGosectionEl.append(placesContainerDivEl)
    }
    
    mainEl.append(firstImageEl, pageNameEl, whereToGosectionEl)
    document.body.append(mainEl)
}
function render() {
    document.body.innerHTML = ''
    renderHeader()
    renderMain()
}
render()