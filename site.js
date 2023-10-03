
const animals = [
  {
    title: "This is a Giraffe",
    image: "/images/giraffe.jpeg",
    description: `According to wikipedia: The giraffe's chief distinguishing
                  characteristics are its extremely long neck and legs, its
                  horn-like ossicones, and its spotted coat patterns. It is
                  classified under the family Giraffidae, along with its closest
                  extant relative, the okapi. Its scattered range extends from
                  Chad in the north to South Africa in the south, and from Niger
                  in the west to Somalia in the east. Giraffes usually inhabit
                  savannahs and woodlands. Their food source is leaves, fruits,
                  and flowers of woody plants, primarily acacia species, which
                  they browse at heights most other herbivores cannot reach.`
  },
  {
    title: "This is a Lion",
    image: "/images/lion.jpg",
    description: `According to wikipedia: The lion (Panthera leo) is a large cat
                  of the genus Panthera native to Africa and India. It has a
                  muscular, broad-chested body; short, rounded head; round ears;
                  and a hairy tuft at the end of its tail. It is sexually
                  dimorphic; adult male lions are larger than females and have a
                  prominent mane. It is a social species, forming groups called
                  prides. A lion's pride consists of a few adult males, related
                  females, and cubs. Groups of female lions usually hunt
                  together, preying mostly on large ungulates. The lion is an
                  apex and keystone predator; although some lions scavenge when
                  opportunities occur and have been known to hunt humans, lions
                  typically do not actively seek out and prey on humans.`
  },
  {
    title: "This is a Zebra",
    image: "/images/zebra.jpg",
    description: `According to wikipedia: Zebras are primarily grazers and can
                  subsist on lower-quality vegetation. They are preyed on mainly
                  by lions, and typically flee when threatened but also bite and
                  kick. Zebra species differ in social behaviour, with plains
                  and mountain zebra living in stable harems consisting of an
                  adult male or stallion, several adult females or mares, and
                  their young or foals; while Grévy's zebra live alone or in
                  loosely associated herds. In harem-holding species, adult
                  females mate only with their harem stallion, while male
                  Grévy's zebras establish territories which attract females and
                  the species is promiscuous. Zebras communicate with various
                  vocalisations, body postures and facial expressions. Social
                  grooming strengthens social bonds in plains and mountain
                  zebras.`
  },
  {
    title: "This is a Elephant",
    image: "/images/elephant.jpg",
    description: `According to wikipedia: Elephants are scattered throughout
                  sub-Saharan Africa, South Asia, and Southeast Asia and are
                  found in different habitats, including savannahs, forests,
                  deserts, and marshes. They are herbivorous, and they stay near
                  water when it is accessible. They are considered to be
                  keystone species, due to their impact on their environments.
                  Elephants have a fission-fusion society, in which multiple
                  family groups come together to socialise. Females (cows) tend
                  to live in family groups, which can consist of one female with
                  her calves or several related females with offspring. The
                  leader of a female group, usually the oldest cow, is known as
                  the matriarch.`
  },
  {
    title: "This is a Elephant",
    image: "/images/elephant.jpg",
    description: `According to wikipedia: Elephants are scattered throughout
                  sub-Saharan Africa, South Asia, and Southeast Asia and are
                  found in different habitats, including savannahs, forests,
                  deserts, and marshes. They are herbivorous, and they stay near
                  water when it is accessible. They are considered to be
                  keystone species, due to their impact on their environments.
                  Elephants have a fission-fusion society, in which multiple
                  family groups come together to socialise. Females (cows) tend
                  to live in family groups, which can consist of one female with
                  her calves or several related females with offspring. The
                  leader of a female group, usually the oldest cow, is known as
                  the matriarch.`
  },
]


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

const getPageHtml = () => {

  const cardHtmlArray = animals.map(a => getCardHtml(a))
  const cardsHtml = cardHtmlArray.join('')

  return `<!DOCTYPE html>
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

        <!--Row -->
        <footer>
          <ul>
            <li>Contact</li>
            <li>About</li>
            <li>Privacy</li>
          </ul>
        </footer>
      </body>
    </html>
    `
}

document.write(
  getPageHtml()
)
