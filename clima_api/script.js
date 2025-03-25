const api_key = "";
let boton = document.getElementById("btn_consultar");

boton.onclick = function () {
    let ciudad = document.getElementById("campo_ciudad").value.trim();
    if (ciudad === "") {
        alert("Por favor, ingresa una ciudad.");
        return;
    }
    consultarCiudad(ciudad);
    document.getElementById("campo_ciudad").value = ""; // Limpiar campo
};

function consultarCiudad(ciudad) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}&units=metric&lang=es`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se encontró la ciudad: ${ciudad}`);
            }
            return response.json();
        })
        .then(data => {
            mostrarClima(data);
        })
        .catch(error => {
            alert(error.message);
            console.error("Error en la solicitud:", error);
        });
}

function mostrarClima(data) {
    const ciudadesDiv = document.getElementById("ciudades");

    const card = document.createElement("div");
    card.classList.add("card", "col-md-4");

    card.innerHTML = `
        <h3>${data.name}</h3>
        <p><strong>Temperatura:</strong> ${data.main.temp} °C</p>
        <p><strong>Clima:</strong> ${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</p>
        <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
        <button class="actualizar btn btn-success">Actualizar</button>
        <button class="editar btn btn-warning">Editar</button>
        <button class="eliminar btn btn-danger">Eliminar</button>
    `;

    // Botón para actualizar el clima
    card.querySelector(".actualizar").addEventListener("click", () => {
        consultarCiudad(data.name);
    });

    // Botón para editar la ciudad
    card.querySelector(".editar").addEventListener("click", () => {
        const nuevoNombre = prompt("Nuevo nombre para la ciudad:", data.name);
        if (nuevoNombre) {
            consultarCiudad(nuevoNombre);
            card.remove(); // Elimina la tarjeta antigua
        }
    });

    // Botón para eliminar la tarjeta
    card.querySelector(".eliminar").addEventListener("click", () => {
        card.remove();
    });

    ciudadesDiv.appendChild(card);
}
