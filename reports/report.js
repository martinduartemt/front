const API_URL = "http://129.146.80.179:8080/api/";


function showReservation() {

  $.ajax({
    url: `${API_URL}Reservation/all`,
    type: "GET",
    datatype: "JSON",
    headers:{
      "Content-Type":"application/json",
      "Access-Control-Allow-Origin":"*"
    },
    success: renderReservation,
  });
}

function renderReservation(response) {
  const $responseContainer = document.getElementById("response");
  $responseContainer.innerHTML='';
  for (let x = 0; x < response.length; x++) {
    const row = response[x];
    $responseContainer.innerHTML += `
    <tr>
        <td>
            ${row.idReservation}
        </td>
        <td>
            ${row.startDate}
        </td>
        <td>
            ${row.devolutionDate}
        </td>
        <td>
            ${row.status}
        </td>
        <td>
            ${row.score}
        </td>        
    </tr>
        `;
  }
}

showReservation();