const state = {
    places: [],
    todos: [],
    tab: null,
    selectedPlace: null,
    modal: null,
    user: null,

    currentIntervalId: null,
    imageIndex: 0
}

function fetchPlaces() {
    return fetch("http://localhost:3000/cities").then(resp => resp.json())
}

function fetchTodos() {
    return fetch("http://localhost:3000/todo").then(resp => resp.json())
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
    contactLinkEl.addEventListener("click", function () {
        state.tab = "contact-page"
        render()
    })
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
    signButtonEl.addEventListener('click', function () {
        state.modal = 'sign-up'
        render()
    })

    signButtonEl.append(signImageEl)
    liButtonEl.append(signButtonEl)

    headerButtonEl.append(liSearchButton, liButtonEl)

    headerEl.append(pageNameEl, ulHeaderLeft, headerButtonEl)
    document.body.append(headerEl)
}

function renderSearchButton() {
    const modalWrapperSearchEl = document.createElement("div")
    modalWrapperSearchEl.setAttribute("class", "modal-wrapper")

    const modalSearchEl = document.createElement("div")
    modalSearchEl.setAttribute("class", "modal")

    const closeModalButtonEl = document.createElement("button")
    closeModalButtonEl.setAttribute("class", "modal__close-btn")
    closeModalButtonEl.textContent = X

    const searchTitleEl = document.createElement("h2")
    searchTitleEl.setAttribute("class", "search-title")
    searchTitleEl.textContent = "Search"

    const searchFormEl = document.createElement("form")
    searchFormEl.setAttribute("class", "search-form")

    const searchInputEl = document.createElement('input')
    searchInputEl.setAttribute('type', 'text')
    searchInputEl.setAttribute('id', 'search-input')


    searchFormEl.append(searchInputEl)
    modalSearchEl.append(searchTitleEl, searchFormEl, closeModalButtonEl)
    modalWrapperSearchEl.append(modalSearchEl)
    document.body.append(modalWrapperSearchEl)

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
    signUpEl.addEventListener('click', function () {
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

function createIntervalImageReplacer() {

    state.imageIndex = 0

    function replaceImage() {

        if (state.places?.[state.imageIndex + 1]?.image) {
            state.imageIndex = state.imageIndex + 1
        } else {
            state.imageIndex = 0
        }

        const imageToReplace = state.places?.[state.imageIndex]?.image

        const firstImageEl = document.querySelector('.image-main-section')
        firstImageEl.setAttribute('src', imageToReplace)
    }

    if (state.currentIntervalId) {
        clearInterval(state.currentIntervalId)
        console.log('removed interval with id', state.currentIntervalId)
    }

    const intervalId = setInterval(replaceImage, 5000)
    console.log('set new interval id into state => ', intervalId)
    state.currentIntervalId = intervalId
}

function renderMain() {
    const mainEl = document.createElement('main')
    mainEl.setAttribute('class', 'main-section')

    if (state.places.length === 0) return

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
    companyDirectorNameSpanEl.textContent = 'Visit Albania Tourism Agency Director: Artiola Caka'

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

    const labelFirstName = document.createElement("label")
    labelFirstName.setAttribute("for", "fname")
    labelFirstName.textContent = "First Name"

    const inputFirstName = document.createElement("input")
    inputFirstName.setAttribute("type", "text")
    inputFirstName.setAttribute("id", "fname")
    inputFirstName.setAttribute("name", "firstname")
    inputFirstName.setAttribute("placeholder", "Your name..")
    inputFirstName.setAttribute("required", "true")

    // labelFirstName.append(inputFirstName)

    const labelEmailEl = document.createElement("label")
    labelEmailEl.setAttribute("for", "email")
    labelEmailEl.textContent = "Email"

    const inputEmailEl = document.createElement("input")
    inputEmailEl.setAttribute("type", "email")
    inputEmailEl.setAttribute("id", "email")
    inputEmailEl.setAttribute("name", "email")
    inputEmailEl.setAttribute("placeholder", "Email..")
    inputEmailEl.setAttribute("required", "true")

    // labelEmailEl.append(inputEmailEl)

    const labelSubjectEl = document.createElement("label")
    labelSubjectEl.setAttribute("for", "subject")
    labelSubjectEl.textContent = "Subject"

    const subjectTextAreaEl = document.createElement("textarea")
    subjectTextAreaEl.setAttribute("id", "subject")
    subjectTextAreaEl.setAttribute("name", "subject")
    subjectTextAreaEl.setAttribute("placeholder", "Write something")
    subjectTextAreaEl.setAttribute("id", "subject")

    labelSubjectEl.append(subjectTextAreaEl)

    const submitInputEl = document.createElement("input")
    submitInputEl.setAttribute("type", "submit")
    submitInputEl.setAttribute("value", "Submit")

    formSectionEl.append(labelFirstName, labelEmailEl, labelSubjectEl, submitInputEl)
    console.log(formSectionEl)
    mainEl.append(infoSectionEl, formSectionEl)
    document.body.append(mainEl)
}

function renderModal() {
    if (state.modal === 'sign-up') {
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
        createIntervalImageReplacer()

    } else if (state.tab === 'one-place') {
        renderOnePage(state.places)
        clearInterval(state.currentIntervalId)
    } else if (state.tab === 'where-to-go') {
        renderWhereToGoMain()
        clearInterval(state.currentIntervalId)
    } else if (state.tab === 'one-todo') {
        clearInterval(state.currentIntervalId)
        renderOnePage(state.todos)
    } else if (state.tab === 'what-to-do') {
        clearInterval(state.currentIntervalId)
        renderWhatToDoMain()
    } else if (state.tab === 'contact-page') {
        clearInterval(state.currentIntervalId)
        renderContactPage()
    }

    renderModal()
    // renderSearchButton()
    renderFooter()
}
render()