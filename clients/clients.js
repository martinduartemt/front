const API_URL = "http://129.146.80.179:8080/api/";

function showClients() {
  $.ajax({
    url: `${API_URL}Client/all`,
    type: "GET",
    datatype: "JSON",
    success: renderClient,
  });
}

function renderClient(response) {
  const $responseContainer = document.getElementById("response");
  $responseContainer.innerHTML = "";
  for (let x = 0; x < response.length; x++) {
    const row = response[x];
    $responseContainer.innerHTML += renderCard(
      row.name,
      row.email,
      row.age,
      row.idClient,
      row.password
    );
  }
}

function renderCard(name, email, age, id,password) {
  return `
  <div class="card">
      <h1>${name}</h1>
      <p class="price">${age}</p>
      <p>
      ${email}
      </p>
      <p><button class="act" onclick="renderClientToUpdate(${id},'${name}','${email}',${age},'${password}')">Actualizar</button></p>
      <p><button class="del" onclick="deleteClient(${id})" >Borrar</button></p>
    </div>
  `;
}

function showClient(){
  const id = parseInt( $("#id2").val())
  
  //elemento del DOM->document object model
  const $responseContainer=document.getElementById("response");
  // $responseContainer.innerHTML='texto agregado desde javascript';
  $.ajax({
      url:"https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client/"+id,
      type:"GET",
      datatype:"JSON",
      success:function(response){
          console.log(response)
          console.log(response.items)
          for(let x=0;x<response.items.length;x++){
              const costume= response.items[x];
              $responseContainer.innerHTML+=`
              cliente 
              id:${costume.id}
              <br>
              name:${costume.name} 
              <br>
              email:${costume.email} 
              <br>
              age:${costume.age} 
              <br>
              `;
          }
      }
  })
}

function createClient() {
  let dataToSend = {
    name: $("#name").val(), //obtengo el valor que tiene el campo de texto id="name"
    email: $("#email").val(),
    idClient: parseInt($("#id").val()),
    password: $("#password").val(),
    age: parseInt($("#age").val()),
  };
  dataToSend = JSON.stringify(dataToSend);

  const settings = {
    url: `${API_URL}Client/save`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: dataToSend,
  };

  $.ajax(settings).done(function (response) {
    alert("Client registrada correctamente");
    $("#name").val(""); //limpio el valor que tenga el campo de texto
    $("#description").val("");
    showClients()
  });
}

function updateClient() {
  let dataToSend = {
    name: $("#name").val(),
    email: $("#email").val(),
    idClient: parseInt($("#id").val()),
    password: $("#password").val(),
    age: parseInt($("#age").val()),
  };
  dataToSend = JSON.stringify(dataToSend);

  const settings = {
    url: `${API_URL}Client/update`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: dataToSend,
  };

  $.ajax(settings).done(function (response) {
    alert("Client actualizada correctamente");
    $("#name").val()
    $("#email").val(),
    $("#id").val()
    $("#password").val()
    $("#age").val()
    showClients()
  });
}

function renderClientToUpdate(id, name, email,age,password) {
  $("#id").val(id); //seteo el valor que tendrá el campo de texto
  $("#name").val(name);
  $("#email").val(email);
  $("#password").val(password);
  $("#age").val(age);    
}

function deleteClient(id) {
  const settings = {
    url: `${API_URL}Client/${id}`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    data: {},
  };

  $.ajax(settings)
    .done(function (response) {
      alert("Client eliminado correctamente");
      showClients()
    })
    .fail(function (response) {
      console.log(response.responseText);
      alert("algo falló");
    });
}



showClients()
