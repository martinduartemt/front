function ahowClient(){
  //elemento del DOM->document object model
  const $responseContainer=document.getElementById("response");
  // $responseContainer.innerHTML='texto agregado desde javascript';
  $.ajax({
      url:"https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/quadbike/quadbike",
      type:"GET",
      datatype:"JSON",
      success:function(response){
          console.log(response)
          console.log(response.items)
          for(let x=0;x<response.items.length;x++){
              const costume= response.items[x];
              $responseContainer.innerHTML+=`
              id2:${costume.id}
              <br>
              name2:${costume.name} 
              <br>
              email2:${costume.email} 
              <br>
              age2:${costume.age} 
              <br>
              `;
          }
      }
  })
}

function createCostume(){
  
  let dataToSend={
      "id": parseInt( $("#id1").val()),
      "brand":$("#brand1").val(),
      "model": parseInt($("#model1").val()),
      "category_id":parseInt($("#id_category1").val()),
      "name":$("#name1").val(),
  }
  dataToSend=JSON.stringify(dataToSend);   

  const settings = {
      "url": "https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/quadbike/quadbike",
      "method": "POST",        
      "headers": {
        "Content-Type": "application/json"
      },
      "data": dataToSend,        
    };
    
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });

}

function updateCostume(){
  
  let dataToSend={
    "id": parseInt( $("#id1").val()),
    "brand":$("#brand1").val(),
    "model": parseInt($("#model1").val()),
    "category_id":parseInt($("#id_category1").val()),
    "name":$("#name1").val(),
  }
  dataToSend=JSON.stringify(dataToSend);   

  const settings = {
      "url": "https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/quadbike/quadbike",
      "method": "PUT",        
      "headers": {
        "Content-Type": "application/json"
      },
      "data": dataToSend,        
    };      
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });

}

function deleteCostume(){
  
  let dataToSend={
      "id": parseInt( $("#id1").val()),        
  }
  dataToSend=JSON.stringify(dataToSend);   

  const settings = {
      "url": "https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/quadbike/quadbike",
      "method": "DELETE",        
      "headers": {
        "Content-Type": "application/json"
      },
      "data": dataToSend,        
    };      
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });

}

showCLient()

