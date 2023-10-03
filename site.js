import {animals} from './animals.js'

const getCountFromQuery = () => {
  const queryString = window.location.search
  if (queryString.includes("count")) {
    return parseInt(
      queryString
        .split("&")
        .filter(q => q.includes("count"))[0]
        .split("=")[1]
    );
  }
  else {
    return animals.length;
  }
}

const headerHtml = `
  <head>
    <title>Sample Page - Recreate this in JS</title>
    <link href="styles.css" rel="stylesheet" />
    <link href="layout.css" rel="stylesheet" />
  </head>`

const getNavHtml = () => `
  <nav>
    <ul>
      <li>Home</li>
      <li>Page 1</li>
      <li>Page 2</li>
    </ul>
  </nav>`

const getHeaderHtml = () => `
  <header>
    <a href="#">
      <h2>
        Africa Travels
      </h2>
    </a>
  </header>`


const getCardHtml = (animal) => `
  <div class="card">
    <img src="${animal.image}" alt="${animal.title}" />
    <div class="card-text">
      <h3>${animal.title}</h3>
      <p>${animal.description}</p>
    </div>
  </div>`

const getFooterHtml = () => `
  <footer>
    <ul>
      <li>Contact</li>
      <li>About</li>
      <li>Privacy</li>
    </ul>
  </footer>`

const getPageHtml = () => {

  const count = getCountFromQuery()
  const cardHtmlArray = animals
    .slice(0, count)
    .map(a => getCardHtml(a))
  
  const errorMessage = "<h1>Error, your count is bad</h1>"
  const cardsHtml = count > 5 ? errorMessage : cardHtmlArray.join('')

  return `
    <!DOCTYPE html>
    <html>
      ${headerHtml}
      <body>
        <article class="page-container">
          ${getNavHtml()}
          <section class="main-container">
            ${getHeaderHtml()}
            <main>
              <h1>Hello Class</h1>
              <article class="card-container">
                ${cardsHtml}
              </article>
            </main>
          </section>
        </article>
        ${getFooterHtml()}
      </body>
    </html>
  `
}

document.write(
  getPageHtml()
)


const cardElements = Array.from(document.getElementsByClassName("card"));
cardElements.forEach(e => e.addEventListener("click", () => {
  console.log("clicked")
  // e.classList.toggle("card-selected")
  // e.style.display="none"
  // e.style.fontSize="2em"
}))
