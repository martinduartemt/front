const API_URL = "http://129.146.80.179:8080/api/";

function showQuadbikes() {
  $.ajax({
    url: `${API_URL}Quadbike/all`,
    type: "GET",
    datatype: "JSON",
    success: renderQuadbike,
  })
}
function renderQuadbike(response) {
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
        ${row.brand}
    </td>
    <td>
        ${row.year}
    </td>
    <td>
        <button class="act" onclick="renderQuadbikeToUpdate(${row.id},'${row.name}','${row.description}','${row.brand}',${row.year},${row.category.id})" tyle>Actualizar</button>
    </td>
    <td>
        <button class="del" onclick="deleteQuadbike(${row.id})">Eliminar</button>
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

function createQuadbike() {

  let dataToSend = {
    name: $("#name").val(),
    description: $("#description").val(),
    brand: $("#brand").val(),
    year: parseInt($("#year").val()),
    category: {
      id: parseInt($("#category").val()),
    },
  };
  dataToSend = JSON.stringify(dataToSend);

  const settings = {
    url: `${API_URL}Quadbike/save`,
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    "data": dataToSend,
  };


  $.ajax(settings).done(function (response) {
    
    $("#name").val("");
    $("#description").val("");
    $("#brand").val("");
    $("#year").val("");
    $("#category").val("");
    alert("Quadbike registrada correctamente");
    showQuadbikes()
  });
}

function updateQuadbike() {
  let dataToSend = {
    name: $("#name").val(),
    description: $("#description").val(),
    brand: $("#brand").val(),
    year: parseInt($("#year").val()),
    id:parseInt($("#id").val())
  };
  dataToSend = JSON.stringify(dataToSend);

  const settings = {
    url: `${API_URL}Quadbike/update`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: dataToSend,
  };

  $.ajax(settings).done(function (response) {
    alert("Quadbike actualizada correctamente");
    $("#id").val("");
    $("#name").val("");
    $("#description").val("");
    $("#brand").val("");
    $("#year").val("");
    $("#category").val("");
    showQuadbikes()
  });
}

function renderQuadbikeToUpdate(id, name, description, brand, year, category) {
  $("#id").val(id);
  $("#name").val(name);
  $("#brand").val(brand);
  $("#year").val(year);
  $("#description").val(description);
  $("#category").val(category);
}

function deleteQuadbike(id) {
  const settings = {
    url: `${API_URL}Quadbike/${id}`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    data: {},
  };

  $.ajax(settings).done(function (response) {
    alert("Quadbike eliminado correctamente");
    showQuadbikes()
  });
}

showQuadbikes()

