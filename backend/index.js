const express = require("express")
const app = express()

const pokemonCollection = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass Poison",
    generation: 1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
    
  },
  {
    id: 2,
    name: "Ivysaur",
    type: "Grass Poison",
    generation: 1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif"
    
  },
  {
    id: 3,
    name: "Venusaur",
    type: "Grass Poison",
    generation: 1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif"
    
  },
  {
    id: 4,
    name: "Charmander",
    type: "Fire",
    generation:1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif"
  },
  {
    id: 5,
    name: "Charmleon",
    type: "Fire",
    generation:1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif"
  },
  {
    id: 6,
    name: "Charizard",
    type: "Fire Flying",
    generation:1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif"
  },
  {
    id: 7,
    name: "Squirtle",
    type: "Water",
    generation: 1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"
  },
  {
    id: 8,
    name: "Watortle",
    type: "Water",
    generation: 1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif"
  },
  {
    id: 9,
    name: "Blastoise",
    type: "Water",
    generation: 1,
    image: "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
  },
  {
    id: 10,
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
