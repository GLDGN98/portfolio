'use strict'


var gProjs = [
  {
    id: "minesweeper",
    name: "Minesweeper",
    title: "Minesweeper Game",
    desc: "I build the Minesweeper game functionality with vanilla JavaScript using recursion and CSS!",
    url: "projs/sokoban",
    publishedAt: 1669299698000,
    labels: ["Matrixes", "Keyboard Events", "Recursion"].join('|'),
  },
  {
    id: "touch-nums",
    name: "Touch Nums",
    title: "Touch Nums Game",
    desc: "I build this touch nums game using vanilla JavaScript And CSS",
    url: "projs/sokoban",
    publishedAt: 1668694898000,
    labels: ["Matrixes", "Keyboard Events"].join('|'),
  },
  {
    id: "ballBoard",
    name: "Ball Board",
    title: "Ball Board Game",
    desc: "I build this game using vanilla JavaScript and a bit of CSS",
    url: "projs/sokoban",
    publishedAt: 1668954098000,
    labels: ["Matrixes", "Keyboard Events"].join('|')
  },
  {
    id: "tasty",
    name: "Tasty",
    title: "Recipe Website",
    desc: "Full CRUD website using spoonacular API, The website have authentication stored in Firebase and nice animations",
    url: "projs/sokoban",
    publishedAt: 1662816098000,
    labels: ["React", "Hooks", "useContext", "Props", "CSS", "Bootstrap", "Firebase", "Styled Components", "API", "Animations", "Authentication"].join('|'),
  },
  {
    id: "book-shop",
    name: "Book Shop",
    title: "A retail store specializing in books.",
    desc: "I build this book-shop using vanila Javascript ",
    url: "projs/sokoban",
    publishedAt: 1670250909000,
    labels: ["Full CRUD", "Local Storage"].join('|'),
  },
  {
    id: "youtube",
    name: "Youtube",
    title: "Nice Youtube Project",
    desc: "I build this small youtube project when i just started learning React Hooks and Props",
    url: "projs/sokoban",
    publishedAt: 1651411298000,
    labels: ["React", "useState", "Props"].join('|')
  },
]

function getPortfolioItemById(projectId) {
  const item = gProjs.find(project => project.id === projectId)
  return item
}
