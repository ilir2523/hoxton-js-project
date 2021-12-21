const state = {
    places: [],
    todos: [],
    tab: null,
    selectedPlace: null
}

function fetchPlaces() {
    return fetch("http://localhost:3000/cities").then(resp => resp.json())
}

function fetchTodos() {
    return fetch("http://localhost:3000/todo").then(resp => resp.json())
}

function getCitiesFromServerToPlaces() {
    return fetchPlaces().then(function (city) {
        state.places = city
        render()
    })
}

function getTodosFromServerToTodos() {
    return fetchTodos().then(function (todo) {
        state.todos = todo
        render()
    })
}

getCitiesFromServerToPlaces()
getTodosFromServerToTodos()

function renderHeader() {
    const headerEl = document.createElement('header')
    headerEl.setAttribute('class', 'header-section')

    const pageNameEl = document.createElement('h1')
    pageNameEl.setAttribute('class', 'logo-header-section')
    pageNameEl.textContent = 'Visit Albania'
    pageNameEl.addEventListener('click', function () {
        state.tab = null
        state.selectedPlace = null
        render()
    })

    const ulHeaderLeft = document.createElement("ul")
    ulHeaderLeft.setAttribute("class", "left-ul-header")

    const homeLiEl = document.createElement("li")
    const aHomeEl = document.createElement("a")
    aHomeEl.setAttribute("href", "#")
    aHomeEl.textContent = "Home"
    homeLiEl.addEventListener('click', function () {
        state.tab = null
        state.selectedPlace = null
        render()
    })
    homeLiEl.append(aHomeEl)

    const whereToGoEl = document.createElement("li")
    const whereToGoLink = document.createElement("a")
    whereToGoLink.setAttribute("href", "#")
    whereToGoLink.textContent = "Where To Go"
    whereToGoLink.addEventListener('click', function () {
        state.tab = 'where-to-go'
        state.selectedPlace = null
        render()
    })

    whereToGoEl.append(whereToGoLink)

    const whatToDoEl = document.createElement("li")
    const whatToDoLink = document.createElement("a")
    whatToDoLink.setAttribute("href", "#")
    whatToDoLink.textContent = "What To Do"
    whatToDoLink.addEventListener('click', function () {
        state.tab = 'what-to-do'
        state.selectedPlace = null
        render()
    })
    whatToDoEl.append(whatToDoLink)

    const contactLiEl = document.createElement("li")
    const contactLinkEl = document.createElement("a")
    contactLinkEl.setAttribute("href", "#")
    contactLinkEl.setAttribute("class", "header-ul-right")
    contactLinkEl.textContent = "Contact"

    contactLiEl.append(contactLinkEl)

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

function renderWhereToGoMain() {
    const mainEl = document.createElement('main')
    mainEl.setAttribute('class', 'main-section')

    const whereToGosectionEl = document.createElement('section')
    whereToGosectionEl.setAttribute('class', 'where-to-go-main-section')

    for (const place of state.places) {
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

        mainEl.append(whereToGosectionEl)
        document.body.append(mainEl)
    }
}

function renderWhatToDoMain() {
    const mainEl = document.createElement('main')
    mainEl.setAttribute('class', 'main-section')

    const whereToGosectionEl = document.createElement('section')
    whereToGosectionEl.setAttribute('class', 'where-to-go-main-section')

    for (const todo of state.todos) {
        const placesContainerDivEl = document.createElement('div')
        placesContainerDivEl.setAttribute('class', 'container')
        placesContainerDivEl.addEventListener('click', function () {
            state.tab = "one-todo"
            state.selectedPlace = todo.id
            render()
        })

        const placeImageEl = document.createElement('img')
        placeImageEl.setAttribute('src', todo.image)
        placeImageEl.setAttribute('class', 'place-image-main-section')
        placeImageEl.setAttribute('alt', 'place-image')

        const placeNameH3El = document.createElement('h3')
        placeNameH3El.setAttribute('class', 'place-name-main-section')
        placeNameH3El.textContent = todo.name

        placesContainerDivEl.append(placeImageEl, placeNameH3El)
        whereToGosectionEl.append(placesContainerDivEl)

        mainEl.append(whereToGosectionEl)
        document.body.append(mainEl)
    }
}


function renderMain() {
    const mainEl = document.createElement('main')
    mainEl.setAttribute('class', 'main-section')

    const firstImageEl = document.createElement('img')
    firstImageEl.setAttribute('class', 'image-main-section')
    firstImageEl.setAttribute('src', 'https://preview.redd.it/qzl76zve3n541.jpg?auto=webp&s=92f26c06f3769e14e056eddb148f7c38420f78a1')
    firstImageEl.setAttribute('alt', 'first-image')

    const pageNameEl = document.createElement('h2')
    pageNameEl.setAttribute('class', 'logo-header-section')
    pageNameEl.textContent = 'Where To Go'

    const whereToGosectionEl = document.createElement('section')
    whereToGosectionEl.setAttribute('class', 'where-to-go-main-section')

    let i = 0
    for (const place of state.places) {
        if (i < 5) {
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
            placeNameH3El.textContent = place.name.toUpperCase()

            placesContainerDivEl.append(placeImageEl, placeNameH3El)
            whereToGosectionEl.append(placesContainerDivEl)
        }
        i++
    }

    const whatToDoPageNameEl = document.createElement('h2')
    whatToDoPageNameEl.setAttribute('class', 'logo-header-section')
    whatToDoPageNameEl.textContent = 'What To Do'

    const whatToDoSectionEl = document.createElement('section')
    whatToDoSectionEl.setAttribute('class', 'where-to-go-main-section')

    let j = 0
    for (const todo of state.todos) {
        if (j < 5) {
            const placesContainerDivEl = document.createElement('div')
            placesContainerDivEl.setAttribute('class', 'container')
            placesContainerDivEl.addEventListener('click', function () {
                state.tab = "one-todo"
                state.selectedPlace = todo.id
                render()
            })

            const placeImageEl = document.createElement('img')
            placeImageEl.setAttribute('src', todo.image)
            placeImageEl.setAttribute('class', 'place-image-main-section')
            placeImageEl.setAttribute('alt', 'place-image')

            const placeNameH3El = document.createElement('h3')
            placeNameH3El.setAttribute('class', 'place-name-main-section')
            placeNameH3El.textContent = todo.name.toUpperCase()

            placesContainerDivEl.append(placeImageEl, placeNameH3El)
            whatToDoSectionEl.append(placesContainerDivEl)

        }
        j++
    }

    mainEl.append(firstImageEl, pageNameEl, whereToGosectionEl, whatToDoPageNameEl, whatToDoSectionEl)
    document.body.append(mainEl)

}

function renderFooter() {
    const footerEl = document.createElement('footer')

    const pageNameEl = document.createElement('h1')
    pageNameEl.setAttribute('class', 'logo-header-section')
    pageNameEl.textContent = 'Visit Albania'
    pageNameEl.addEventListener('click', function () {
        state.tab = null
        state.selectedPlace = null
        render()
    })

    const rightsSpanEl = document.createElement('span')
    rightsSpanEl.setAttribute('class', 'rights-footer')
    rightsSpanEl.textContent = '© 2022 All Rights Reserved - Visit Albania Tourism Agency'

    const iconsDivEl = document.createElement('div')

    const instagramImageEl = document.createElement('img')
    instagramImageEl.setAttribute('src', 'https://image.similarpng.com/very-thumbnail/2020/05/Popular-Logo-Instagram-icon-PNG.png')

    const facebookImageEl = document.createElement('img')
    facebookImageEl.setAttribute('src', 'https://i.pinimg.com/originals/c0/5b/41/c05b414d77a20762fede5eeed699605f.png')

    iconsDivEl.append(instagramImageEl, facebookImageEl)
    footerEl.append(pageNameEl, rightsSpanEl, iconsDivEl)
    document.body.append(footerEl)
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
    placeNameEl.textContent = place.name.toUpperCase()

    const placeTextEl = document.createElement("p")
    placeTextEl.setAttribute("class", "place-text-section")
    placeTextEl.textContent = place.info

    onePlaceSeccionEl.append(placeNameEl, placeTextEl)
    mainEl.append(placeImageEl, onePlaceSeccionEl)
    document.body.append(mainEl)
}

function renderContactPage() {
    const mainEl = document.createElement('main')
    mainEl.setAttribute('class', 'contact-main-section')

    const infoSectionEl = document.createElement('section')
    infoSectionEl.setAttribute('class', 'info-contact-section')

    const greetingH2El = document.createElement('h2')
    greetingH2El.setAttribute('class', 'greeting-contact-section')
    greetingH2El.textContent = 'Feel Free to Contact us For Help or Additional Info'

    const companyNameSpanEl = document.createElement('span')
    companyNameSpanEl.setAttribute('class', 'text-contact-section')
    companyNameSpanEl.textContent = 'Visit Albania Tourism Agency'

    const companyDirectorNameSpanEl = document.createElement('span')
    companyDirectorNameSpanEl.setAttribute('class', 'text-contact-section')
    companyDirectorNameSpanEl.textContent = 'Visit Albania Tourism Agency Director: Artiola'

    const companyPhoneNumberSpanEl = document.createElement('span')
    companyPhoneNumberSpanEl.setAttribute('class', 'text-contact-section')
    companyPhoneNumberSpanEl.textContent = 'Tel: +355 (04) 123 45 67'

    const companyEmailSpanEl = document.createElement('span')
    companyEmailSpanEl.setAttribute('class', 'text-contact-section')
    companyEmailSpanEl.textContent = 'Email: info@visitalbania.com.al'

    const companyAdressSpanEl = document.createElement('span')
    companyAdressSpanEl.setAttribute('class', 'text-contact-section')
    companyAdressSpanEl.textContent = 'Tirana, Albania'

    infoSectionEl.append(greetingH2El, companyNameSpanEl, companyDirectorNameSpanEl, companyPhoneNumberSpanEl, companyEmailSpanEl, companyAdressSpanEl)

    const formSectionEl = document.createElement('form')
    formSectionEl.setAttribute('class', 'form-contact-section')
    formSectionEl.innerHTML = `
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
    
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
    
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
    
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    
        <input type="submit" value="Submit">
        `


    mainEl.append(infoSectionEl, formSectionEl)
    document.body.append(mainEl)

}

function render() {
    document.body.innerHTML = ''
    renderHeader()
    if (state.tab === null) {
        // renderMain()
        renderContactPage()
    } else if (state.tab === 'one-place') {
        renderOnePage(state.places)
    } else if (state.tab === 'where-to-go') {
        renderWhereToGoMain()
    } else if (state.tab === 'one-todo') {
        renderOnePage(state.todos)
    } else if (state.tab === 'what-to-do') {
        renderWhatToDoMain()
    }

    renderFooter()
}
render()