//Create Header


const headerEl = document.createElement("header")
const h1HeaderEl = document.createElement("h1")
h1HeaderEl.setAttribute("class", "visit-albania-title")
h1HeaderEl.textContent = "Visit Albania"

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

ulHeaderLeft.append(homeLiEl, whereToGoEl, whatToDoEl)


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


const contactHeaderEl = document.createElement("ul")
const contactLiEl = document.createElement("li")
contactLiEl.setAttribute("class", "header-ul-right")
contactLiEl.textContent = "Contact"

contactHeaderEl.append(contactLiEl)

headerEl.append(h1HeaderEl, ulHeaderLeft, headerButtonEl, contactHeaderEl)
document.body.append(headerEl)
console.log(headerEl)