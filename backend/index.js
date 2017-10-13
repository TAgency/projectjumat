const express = require("express")
const app = express()

const pokemonCollection = [
  {
    id: 0,
    name: "Bulbasaur",
    type: "Grass Poison",
    generation: 1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
    
  },
  {
    id: 1,
    name: "Charmander",
    type: "Fire",
    generation:1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif"
  },
  {
    id: 2,
    name: "Squirtle",
    type: "Water",
    generation: 1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"
  },
  {
    id: 3,
    name: "Pikachu",
    type: "Electric",
    generation: 1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"
  }
]
// copas untuk eror header
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/", (req, res) => {
  res.send(pokemonCollection)
})

app.listen(3000, () => {
  console.log("API running on localhost:3000")
})
