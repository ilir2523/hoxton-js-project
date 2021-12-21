const state = {
    places: [],
    todos: [],
    tab: null,
    selectedPlace: null,
    modal: null,
    user: null
}

function fetchPlaces() {
    return fetch("http://localhost:3000/cities").then(resp => resp.json())
}

function fetchTodos() {
    return fetch("http://localhost:3000/todo").then(resp => resp.json())
}

function getImages() {
    fetchPlaces().then(resp => resp)
}

function signIn(email, password) {
    return fetch(`http://localhost:3000/users/${email}`)
      .then(function (resp) {
        return resp.json()
      })
      .then(function (user) {
        if (user.password === password) {
          alert('Welcome')
          state.user = user
          render()
        } else {
          alert('Wrong email/password. Please try again.')
        }
      })
}

function signUp(firstName, lastName, email, password) {
    fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        id: email,
        password: password
    })
})
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
    whatToDoLink.addEventListener('click', function(){
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

    const liSearchButton = document.createElement("li")
    const searchButtonEl = document.createElement("button")
    const searchImageEl = document.createElement("img")
    searchImageEl.setAttribute('src', 'icons/search_black_24dp.svg')

    searchButtonEl.append(searchImageEl)
    liSearchButton.append(searchButtonEl)

    const liButtonEl = document.createElement("li")
    const signButtonEl = document.createElement("button")
    const signImageEl = document.createElement("img")
    signImageEl.setAttribute('src', 'icons/account_circle_black_24dp.svg')
    signButtonEl.addEventListener('click', function() {
        state.modal = 'sign-up'
        render()
    })

    signButtonEl.append(signImageEl)
    liButtonEl.append(signButtonEl)
    
    headerButtonEl.append(liSearchButton, liButtonEl)

    headerEl.append(pageNameEl, ulHeaderLeft, headerButtonEl)
    document.body.append(headerEl)
}

//CREATING SIGN UP FORM 
function renderSignUp() {
    const modalWrapperEl = document.createElement('div')
    modalWrapperEl.setAttribute('class', 'modal-wrapper')
    modalWrapperEl.addEventListener('click', function () {
        state.modal = ''
        render()
    })

    const modalEl = document.createElement('div')
    modalEl.setAttribute('class', 'modal')
    modalEl.addEventListener('click', function (event) {
        event.stopPropagation()
    })

    const closeModalBtn = document.createElement('button')
    closeModalBtn.setAttribute('class', 'modal__close-btn')
    closeModalBtn.textContent = 'X'
    closeModalBtn.addEventListener('click', function () {
        state.modal = ''
        render()
    })

    const titleEl = document.createElement("h2")
    titleEl.setAttribute("class", "search-title")
    titleEl.textContent = "Sign Up"

    const profileFormEl = document.createElement("form")
    profileFormEl.setAttribute("class", "profile-form")
    // signUp(firstName, lastName, email, password)
    profileFormEl.addEventListener('submit', function (event) {
        event.preventDefault()

        signUp(firstNameInputEl.value, lastNameInputEl.value, emailInputEl.value, passwordInputEl.value)

        state.modal = ''

        render()
      })

    const firstNameLabelEl = document.createElement("label")
    firstNameLabelEl.setAttribute("for", "user-firstName")
    firstNameLabelEl.textContent = 'First name'

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
    signUpEl.addEventListener('click', function() {
        state.modal = 'sign-in'
        render()
    })

    profileFormEl.append(firstNameLabelEl, firstNameInputEl, lastNameLabelEl, lastNameInputEl, emailLabelEl, emailInputEl, passwordLabelEl, passwordInputEl, buttonEl)
    modalEl.append(closeModalBtn, titleEl, profileFormEl, signUpEl)
    modalWrapperEl.append(modalEl)

    document.body.append(modalWrapperEl)
}
//CREATING SIGN IN FORM
function renderSignIn() {
    const modalWrapperEl = document.createElement('div')
    modalWrapperEl.setAttribute('class', 'modal-wrapper')
    modalWrapperEl.addEventListener('click', function () {
        state.modal = ''
        render()
    })

    const modalEl = document.createElement('div')
    modalEl.setAttribute('class', 'modal')
    modalEl.addEventListener('click', function (event) {
        event.stopPropagation()
    })

    const closeModalBtn = document.createElement('button')
    closeModalBtn.setAttribute('class', 'modal__close-btn')
    closeModalBtn.textContent = 'X'
    closeModalBtn.addEventListener('click', function () {
        state.modal = ''
        render()
    })

    const titleEl = document.createElement('h2')
    titleEl.setAttribute('class', 'search-title')
    titleEl.textContent = 'Sign in'

    const profileFormEl = document.createElement("form")
    profileFormEl.setAttribute("class", "profile-form")
    profileFormEl.addEventListener('submit', function (event) {
        event.preventDefault()
    
        signIn(emailInputEl.value, passwordInputEl.value)
    
        state.modal = ''
    
        render()
      })

    const emailLabelEl = document.createElement("label")
    emailLabelEl.setAttribute("for", "user-email")
    emailLabelEl.textContent = "Email"

    const emailInputEl = document.createElement("input")
    emailInputEl.setAttribute('placeholder', 'Enter your email...')
    emailInputEl.setAttribute('name', 'email')
    emailInputEl.setAttribute("type", "email")
    emailInputEl.setAttribute("id", "user-email")

    const passwordLabelEl = document.createElement("label")
    passwordLabelEl.setAttribute("for", "user-password")
    passwordLabelEl.textContent = "Password"

    const passwordInputEl = document.createElement("input")
    passwordInputEl.setAttribute('placeholder', 'Enter your password...')
    passwordInputEl.setAttribute('name', 'password')
    passwordInputEl.setAttribute("type", "password")
    passwordInputEl.setAttribute("id", "user-password")

    const signInButtonEl = document.createElement("button")
    signInButtonEl.setAttribute("class", "signin-button")
    signInButtonEl.setAttribute("type", "submit")
    signInButtonEl.textContent = "Sign In"


    profileFormEl.append(emailLabelEl, emailInputEl, passwordLabelEl, passwordInputEl, signInButtonEl)
    modalEl.append(closeModalBtn, titleEl, profileFormEl)
    modalWrapperEl.append(modalEl)

    document.body.append(modalWrapperEl)
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
        placesContainerDivEl.addEventListener('click', function() {
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

    let index = 0
    function changeIndex(){
        index = index + 1
    }
    window.onload = function () {
        setInterval(changeIndex, 5000);
    }
    const firstImageEl = document.createElement('img')
    firstImageEl.setAttribute('class', 'image-main-section')
    console.log(state?.places)
    console.log(state?.places, state.places[index], state.places?.[index]?.image)
    firstImageEl.setAttribute('src', state.places?.[index]?.image)

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

function renderModal(){
    if (state.modal === 'sign-up'){
        renderSignUp()
    } else if (state.modal === 'sign-in') {
        renderSignIn()
    }
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
    } else if (state.tab === 'one-todo') {
        renderOnePage(state.todos)
    } else if (state.tab === 'what-to-do') {
        renderWhatToDoMain()
    } 

    renderModal()
    renderFooter()
}
render()