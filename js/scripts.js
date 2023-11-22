const nav = document.querySelector('nav')
const viewer = document.querySelector('main')

fetch('./js/starships.json')
  .then((res) => res.json())
  .then((shipArr) => {
    console.log(shipArr)
    popNav(shipArr)
  })


function popNav(ships) {
  console.log(ships)
  ships.forEach(ship => {
    let btn = document.createElement('button')
    btn.textContent = ship.name
    btn.addEventListener('click', () => displayShip(ship))
    btn.addEventListener('click', topFunction)

    nav.appendChild(btn)
  });
}

function displayShip(ship) {
  viewer.innerHTML = ''

  let figure = document.createElement('figure')
  let figC = document.createElement('figCaption')
  let img = document.createElement('img')
  
  figure.appendChild(img)
  figure.appendChild(figC)
  
  // https://starwars-visualguide.com/assets/img/starships/9.jpg
  let shipId = ship.url.split('/')[ship.url.split('/').length-2]
  img.src = `https://starwars-visualguide.com/assets/img/starships/${shipId}.jpg`
  figC.textContent = ship.name
  
  img.addEventListener('error', () => {
    img.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    figC.textContent = `The ${ship.name} is broke. Gone for repairs.`
  })

  viewer.appendChild(figure)
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}