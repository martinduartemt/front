const API_URL = "http://localhost:8081/api/";

function showQuadbikes() {
  $.ajax({
    url: `${API_URL}Quadbike/all`,
    type: "GET",
    datatype: "JSON",
    success: renderQuadbike
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
            ${row.brand}
          </td>
          <td>
            ${row.year}
          </td>
          <td>
            ${row.description}
          </td>
          <td>
            <button onclick="renderQuadbikeToUpdate(${row.id},'${row.name}','${row.description}','${row.brand}',${row.year},${row.category.id})">Actualizar</button>
          </td>
          <td>
            <button onclick="deleteQuadbike(${row.id})">Eliminar</button>
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
    alert("Quadbike registrada correctamente");
    $("#name").val("");
    $("#description").val("");
    $("#brand").val("");
    $("#year").val("");
    $("#category").val("");
  });
}

function updateQuadbike() {

  let dataToSend = {
    name: $("#name").val(),
    description: $("#description").val(),
    brand: $("#brand").val(),
    year: parseInt($("#year").val()),
    id:parseInt($("#id").val())
  }
  dataToSend = JSON.stringify(dataToSend);

  const settings = {
    url: `${API_URL}Quadbike/update`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    "data": dataToSend,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    alert("Quadbike actualizada correctamente");
    $("#id").val("");
    $("#name").val("");
    $("#description").val("");
    $("#brand").val("");
    $("#year").val("");
    $("#category").val("");
    getQuadbikes()
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

function deleteQuadbike() {

  let dataToSend = {
    "id": parseInt($("#id1").val()),
  }
  dataToSend = JSON.stringify(dataToSend);

  const settings = {
    url: `${API_URL}Quadbike/${id}`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    "data": {},
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

}


