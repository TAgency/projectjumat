<<<<<<< HEAD
;(function() {
  $.get("http://localhost:3000", collection => {
    collection.map(item => {
      const id = item.id
      const model = item.model
      const year = item.year
      const price = item.price
=======
;
(function () {
  $.get("http://localhost:3000", data => {
    console.log(data)

    let pokedex = [{
        id: 001,
        Name: "Bulbasaur",
        Type: "Grass Poison",
        Generation: 1
      },
      {
        id: 002,
        Name: "Charmander",
        Type: "Fire",
        Generation: 1
      },
      {
        id: 003,
        Name: "Squirtle",
        Type: "Water",
        Generation: 1
      },
      {
        id: 004,
        Name: "Pikachu",
        Type: "Electric",
        Generation: 1
      },
    ]

    pokedex.map(item => {
      const id = item.id
      const Name = item.Name
      const Type = item.Type
      const Generation = item.Generation
      console.log(id, Name, Type, Generation)
>>>>>>> 3ad8baf0843918e462789e9d86d4126059e66a32

      const newRow = `
      <tr>
        <th scope="row">${id}</th>
        <td>${model}</td>
        <td>${year}</td>
        <td>${price}</td>
      </tr>
      `
<<<<<<< HEAD
      // console.log(newRow)
=======
      console.log(newRow)
>>>>>>> 3ad8baf0843918e462789e9d86d4126059e66a32

      $("#app-table-body").append(newRow)
    })
  })
})()
