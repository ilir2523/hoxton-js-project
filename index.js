const state = {
    places: [],
    tab: null,
    selectedPlace: null
}

function fetchPlaces() {
    return fetch("http://localhost:3000/cities").then(resp => resp.json())
}

function getCitiesFromServerToPlaces() {
    return fetchPlaces().then(function (city) {
        state.places = city
        render()
    })
}

getCitiesFromServerToPlaces()

function renderHeader() {
    const headerEl = document.createElement('header')
    headerEl.setAttribute('class', 'header-section')

    const pageNameEl = document.createElement('h1')
    pageNameEl.setAttribute('class', 'logo-header-section')
    pageNameEl.textContent = 'Visit Albania'

    const ulHeaderLeft = document.createElement("ul")
    ulHeaderLeft.setAttribute("class", "left-ul-header")

    const homeLiEl = document.createElement("li")
    const aHomeEl = document.createElement("a")
    aHomeEl.setAttribute("href", "#")
    aHomeEl.textContent = "Home"
    homeLiEl.append(aHomeEl)

    const whereToGoEl = document.createElement("li")
    const whereToGoLink = document.createElement("a")
    whereToGoLink.setAttribute("href", "#")
    whereToGoLink.textContent = "Where To Go"
    whereToGoEl.append(whereToGoLink)

    const whatToDoEl = document.createElement("li")
    const whatToDoLink = document.createElement("a")
    whatToDoLink.setAttribute("href", "#")
    whatToDoLink.textContent = "What To Do"
    whatToDoEl.append(whatToDoLink)

    const contactLiEl = document.createElement("li")
    contactLiEl.setAttribute("class", "header-ul-right")
    contactLiEl.textContent = "Contact"

    ulHeaderLeft.append(homeLiEl, whereToGoEl, whatToDoEl, contactLiEl)

    const headerButtonEl = document.createElement("ul")
    headerButtonEl.setAttribute("class", "headers-button")

    const liButtonEl = document.createElement("li")
    const signButtonEl = document.createElement("button")
    signButtonEl.textContent = "Sign In"

    liButtonEl.append(signButtonEl)

    const liSearchButton = document.createElement("li")
    const searchButtonEl = document.createElement("button")
    searchButtonEl.textContent = "Search"

    liSearchButton.append(searchButtonEl)

    headerButtonEl.append(liButtonEl, liSearchButton)

    headerEl.append(pageNameEl, ulHeaderLeft, headerButtonEl)
    document.body.append(headerEl)
}

function renderMain() {
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

    let i = 0
    for (const place of state.places) {
        if (i < 4) {
            const placesContainerDivEl = document.createElement('div')
            placesContainerDivEl.setAttribute('class', 'container')
            placesContainerDivEl.addEventListener('click', function () {
                state.tab = "one-place"
                state.selectedPlace = place.id
                render()
            })

            const placeImageEl = document.createElement('img')
            placeImageEl.setAttribute('src', place.image)
            placeImageEl.setAttribute('class', 'place-image-main-section')
            placeImageEl.setAttribute('alt', 'place-image')

            const placeNameH3El = document.createElement('h3')
            placeNameH3El.setAttribute('class', 'place-name-main-section')
            placeNameH3El.textContent = place.name

            placesContainerDivEl.append(placeImageEl, placeNameH3El)
            whereToGosectionEl.append(placesContainerDivEl)

            mainEl.append(firstImageEl, pageNameEl, whereToGosectionEl)
            document.body.append(mainEl)
        }
        i++
    }
}


{
    /* <main class="one-item-main"><img class="one-item-image"
                src="https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1" alt="one item image">
            <secction class="one-item-secction">
                <h3 class="one-name-list-secction">CREWNECK T-SHIRT 3-PACK</h3><button class="one-item-button">ADD TO
                    BAG</button>
            </secction>
        </main> */
}

function renderOnePage(places) {

    let place = null
    for (const myPlace of places) {
        if (myPlace.id === state.selectedPlace) {
            place = myPlace
        }
    }

    const mainEl = document.createElement('main')
    mainEl.setAttribute('class', 'one__place-main-section')

    const placeImageEl = document.createElement('img')
    placeImageEl.setAttribute('class', 'one-place-image')
    placeImageEl.setAttribute('src', place.image)
    placeImageEl.setAttribute('alt', 'one-place-image')

    const onePlaceSeccionEl = document.createElement('secction')
    onePlaceSeccionEl.setAttribute('class', 'one-place-secction')

    const placeNameEl = document.createElement('h3')
    placeNameEl.setAttribute('class', 'one-name-list-secction')
    placeNameEl.textContent = place.name
    
    const placeTextEl = document.createElement("p")
    placeTextEl.setAttribute("class", "place-text-section")
    placeTextEl.textContent = place.info

    onePlaceSeccionEl.append(placeNameEl, placeTextEl)
    mainEl.append(placeImageEl, onePlaceSeccionEl)
    document.body.append(mainEl)
}

function render() {
    document.body.innerHTML = ''
    renderHeader()
    if (state.tab === null) {
        renderMain()

    } else if (state.tab === 'one-place') {
        renderOnePage(state.places)
    }

}
render()