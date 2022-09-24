function showMessage(){
    //elemento del DOM->document object model
    const $responseContainer=document.getElementById("response");
    // $responseContainer.innerHTML='texto agregado desde javascript';
    $.ajax({
        url:"https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response)
            console.log(response.items)
            for(let x=0;x<response.items.length;x++){
                const costume= response.items[x];
                $responseContainer.innerHTML+=`
                id :${costume.id}
                <br>
                message :${costume.messagetext} 
                <br>
                
                `;
            }
        }
    })
  }
  
  function createMessage(){
    
    let dataToSend={
        "id": parseInt( $("#id3").val()),
        "messagetext":$("#message1").val(),
    }
    dataToSend=JSON.stringify(dataToSend);   
  
    const settings = {
        "url": "https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
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
  
  function updateMessage(){
    
    let dataToSend={
      "id": parseInt( $("#id3").val()),
      "messagetext":$("#message1").val(),
    }
    dataToSend=JSON.stringify(dataToSend);   
  
    const settings = {
        "url": "https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
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
  
  function deleteMessage(){
    
    let dataToSend={
        "id": parseInt( $("#id3").val()),        
    }
    dataToSend=JSON.stringify(dataToSend);   
  
    const settings = {
        "url": "https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
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