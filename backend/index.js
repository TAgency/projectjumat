const express = require("express")
const app = express()

const pokemonCollection = [
  {
    id: 0,
    name: "Bulbasaur",
    type: "Grass Poison",
    generation: 1
  },
  {
    id: 1,
    name: "Charmander",
    type: "Fire",
    generation:1
  },
  {
    id: 2,
    name: "Squirtle",
    type: "Water",
    generation: 1
  },
  {
    id: 3,
    name: "Pikachu",
    type: "Electric",
    generation: 1
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
