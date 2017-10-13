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

      const newRow = `
      <tr>
        <th scope="row">${id}</th>
        <td>${Name}</td>
        <td>${Type}</td>
        <td>${Generation}</td>
      </tr>
      `
      console.log(newRow)

      $("#app-table-body").append(newRow)
    })
  })
})