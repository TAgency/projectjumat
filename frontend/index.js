;(function() {
  $.get("http://localhost:3000", collection => {
    collection.map(item => {

      const id = item.id
      const name = item.name
      const type = item.type
      const generation = item.generation

      const newRow = `
      <tr>
        <th scope="row">${id}</th>
        <td>${name}</td>
        <td>${type}</td>
        <td>${generation}</td>
      </tr>
      `
      // console.log(newRow)

      $("#app-table-body").append(newRow)
    })
  })
})()
