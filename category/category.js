const API_URL = "http://localhost:8081/api/";

function showCategories() {
  $.ajax({
    url: `${API_URL}Category/all`,
    type: "GET",
    datatype: "JSON",
    success: renderCategory
  })
}
function renderCategory(response) {
  const $responseContainer = document.getElementById("response");
  $responseContainer.innerHTML = '';
  for (let x = 0; x < response.length; x++) {
    const row = response[x];
    $responseContainer.innerHTML += `
    <tr>
    <td>
        ${row.id}
    </td>
    <td>
        ${row.name}
    </td>
    <td>
        ${row.description}
    </td>
    <td>
        <button class="act" onclick="renderCategoryToUpdate(${row.id},'${row.name}','${row.description}')" tyle>Actualizar</button>
    </td>
    <td>
        <button class="del" onclick="deleteCategory(${row.id})">Eliminar</button>
    </td>
</tr>
    `;
}
}

function showQuadbikebyId() {
  const id = parseInt($("#id1").val())

  //elemento del DOM->document object model
  const $responseContainer = document.getElementById("response");
  // $responseContainer.innerHTML='texto agregado desde javascript';
  $.ajax({
    url: `${API_URL}Quadbike/all/` + id,
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      console.log(response)
      console.log(response.items)
      for (let x = 0; x < response.items.length; x++) {
        const costume = response.items[x];
        $responseContainer.innerHTML += `
              id1:${costume.id}
              <br>
              brand1:${costume.brand} 
              <br>
              model1:${costume.model} 
              <br>
              id_category1:${costume.category_id} 
              <br>
              name1:${costume.name} 
              <br>
              `;
      }
    }
  })
}

function createCategory() {

  let dataToSend = {
    name: $("#name").val(),
    description: $("#description").val(),
  };
  dataToSend = JSON.stringify(dataToSend);

  const settings = {
    url: `${API_URL}Category/save`,
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    "data": dataToSend,
  };


  $.ajax(settings).done(function (response) {
    $("#name").val("");
    $("#description").val("");
    alert("Categoria registrada correctamente");
    showCategories()
  });
}

function updateCategory() {
  let dataToSend = {
    name: $("#name").val(),
    description: $("#description").val(),
    id:parseInt($("#id").val())
  };
  dataToSend = JSON.stringify(dataToSend);

  const settings = {
    url: `${API_URL}Category/update`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: dataToSend,
  };

  $.ajax(settings).done(function (response) {
    alert("Categoria actualizada correctamente");
    $("#id").val("");
    $("#name").val("");
    $("#description").val("");
    showCategories()
  });
}

function renderCategoryToUpdate(id, name,  description) {
  $("#id").val(id);
  $("#name").val(name);
  $("#description").val(description);
}

function deleteCategory(id) {
  const settings = {
    url: `${API_URL}Category/${id}`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    data: {},
  };

  $.ajax(settings).done(function (response) {
    alert("Quadbike eliminado correctamente");
    showCategories()
  });
}

showCategories()

