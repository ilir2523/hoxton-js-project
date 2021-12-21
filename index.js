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
    //CREATING SIGN IN FORM
function renderSignIn (){
    
    const profileFormEl = document.createElement("form")
    profileFormEl.setAttribute("class", "profile-form")
    
    const emailLabelEl = document.createElement("label")
    emailLabelEl.setAttribute("for", "user-email")
    emailLabelEl.textContent = "Email"
    
    const emailInputEl = document.createElement("input")
    emailInputEl.setAttribute("type", "email")
    emailInputEl.setAttribute("id", "user-email")
    
    const passwordLabelEl = document.createElement("label")
    passwordLabelEl.setAttribute("for", "user-password")
    passwordLabelEl.textContent = "Password"
    
    const passwordInputEl = document.createElement("input")
    passwordInputEl.setAttribute("type", "password")
    passwordInputEl.setAttribute("id", "user-password")
    
    const signInButtonEl = document.createElement("button")
    signInButtonEl.setAttribute("class", "signin-button")
    signInButtonEl.setAttribute("type", "submit")
    signInButtonEl.textContent = "Sign In"
    
    
    profileFormEl.append(emailLabelEl, emailInputEl, passwordLabelEl, passwordInputEl)
    
    
    
    
    
}
    
    const liSearchButton = document.createElement("li")
    const searchButtonEl = document.createElement("button")
    searchButtonEl.textContent = "Search"
    
    liSearchButton.append(searchButtonEl)

    headerButtonEl.append(liButtonEl, liSearchButton)

    headerEl.append(pageNameEl, ulHeaderLeft, headerButtonEl)
    document.body.append(headerEl)
}
//CREATING SIGN UP FORM 
function renderSignUp (){

    const titleEl = document.createElement("h2")
    titleEl.setAttribute("class", "search-title")
    titleEl.textContent = "Sign Up"
    
    const profileFormEl = document.createElement("form")
    profileFormEl.setAttribute("class", "profile-form")
    
    const firstNameLabelEl = document.createElement("label")
    firstNameLabelEl.setAttribute("for", "user-firstName")
    
    const firstNameInputEl = document.createElement('input')
    firstNameInputEl.setAttribute('type', 'text')
    firstNameInputEl.setAttribute('id', 'user-firstName')
    
    const lastNameLabelEl = document.createElement('label')
    lastNameLabelEl.setAttribute('for', 'user-lastName')
    lastNameLabelEl.textContent = 'Last name'
    
    const lastNameInputEl = document.createElement('input')
    lastNameInputEl.setAttribute('type', 'text')
    lastNameInputEl.setAttribute('id', 'user-lastName')
    
    const emailLabelEl = document.createElement('label')
    emailLabelEl.setAttribute('for', 'user-email')
    emailLabelEl.textContent = 'Email'
    
    const emailInputEl = document.createElement('input')
    emailInputEl.setAttribute('type', 'email')
    emailInputEl.setAttribute('id', 'user-email')
    
    
    const passwordLabelEl = document.createElement('label')
    passwordLabelEl.setAttribute('for', 'user-password')
    passwordLabelEl.textContent = 'Password'
    
    const passwordInputEl = document.createElement('input')
    passwordInputEl.setAttribute('type', 'password')
    passwordInputEl.setAttribute('id', 'user-password')
    
    const buttonEl = document.createElement('button')
    buttonEl.setAttribute('class', 'signin-button')
    buttonEl.setAttribute('type', 'submit')
    buttonEl.textContent = 'Sign Up'
    
    const signUpEl = document.createElement('a')
    signUpEl.setAttribute('class', 'signup-link')
    signUpEl.setAttribute('href', '#')
    signUpEl.textContent = 'Sign In'
    
    profileFormEl.append(firstNameLabelEl, firstNameInputEl,lastNameLabelEl, lastNameInputEl, emailLabelEl, emailInputEl, passwordLabelEl, passwordInputEl, buttonEl)
    
    
    
    
    
   
    
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
            placeNameH3El.textContent = place.name

            placesContainerDivEl.append(placeImageEl, placeNameH3El)
            whereToGosectionEl.append(placesContainerDivEl)

            mainEl.append(firstImageEl, pageNameEl, whereToGosectionEl)
            document.body.append(mainEl)
        }
        i++
    }
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
    } else if (state.tab === 'where-to-go') {
        renderWhereToGoMain()
    }

    renderFooter()
}
render()