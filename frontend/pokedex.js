;(function() {
  $.get("http://localhost:3000", collection => {
    collection.map(item => {

      const id = item.id
      const name = item.name
      const type = item.type
      const generation = item.generation
      const image = item.image

      const newRow = `
      <tr>
        <th scope="row">${id}</th>
        <td>${name}</td>
        <td>${type}</td>
        <td>${generation}</td>
        <td><img class="pokeball" src="${image}"></td>
      </tr>
      `

      // console.log(newRow)

      $("#app-table-body").append(newRow)
    })
  })
})()
