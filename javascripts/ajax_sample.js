let number = 0;
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("videoIframe"); // Corregido para apuntar al elemento iframe
const button = document.getElementById('btn');

function getData() {
  button.addEventListener('click', e => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
          const responseData = JSON.parse(request.responseText); // Convertir la respuesta JSON a un objeto JavaScript
          titleArea.innerHTML = responseData[number].title;
          contentArea.innerHTML = responseData[number].content;
          videoArea.setAttribute("src", responseData[number].url);
          number = (number + 1) % responseData.length; // Incremento y reinicio de number al llegar al final del arreglo
        }
      }
    }
    request.open("GET", "ajax.json");
    request.send();
  })
}

window.onload = getData;
