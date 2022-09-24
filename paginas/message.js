function showClients(){
    //elemento del DOM->document object model
    const $responseContainer=document.getElementById("response");
    // $responseContainer.innerHTML='texto agregado desde javascript';
    $.ajax({
        url:"https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
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
  
  function createCLient(){
    
    let dataToSend={
        "id": parseInt( $("#id2").val()),
        "name":$("#name2").val(),
        "email": $("#email2").val(),
        "age":parseInt($("#age2").val()),
    }
    dataToSend=JSON.stringify(dataToSend);   
  
    const settings = {
        "url": "https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
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
  
  function updateCLient(){
    
    let dataToSend={
      "id": parseInt( $("#id2").val()),
      "name":$("#name2").val(),
      "email": $("#email2").val(),
      "age":parseInt($("#age2").val()),
    }
    dataToSend=JSON.stringify(dataToSend);   
  
    const settings = {
        "url": "https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
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
  
  function deleteCLient(){
    
    let dataToSend={
        "id": parseInt( $("#id2").val()),        
    }
    dataToSend=JSON.stringify(dataToSend);   
  
    const settings = {
        "url": "https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
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