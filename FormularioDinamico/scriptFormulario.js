// Refes
const form = document.getElementById("registroForm");
const tablaRegistros = document.querySelector("#tablaRegistros tbody");
const agregarBtn = document.getElementById("agregar");

// para  agregar una un registro
agregarBtn.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const idAlumno = document.getElementById("idAlumno").value.trim();
    const deporte = document.getElementById("deporte").value;

    // Validación campos llenos
    if (!nombre || !correo || !idAlumno || !deporte) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Creando filas de la tabla y botones para eiminar
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${correo}</td>
        <td>${idAlumno}</td>
        <td>${deporte}</td>
        <td>
            <button class="btn btn-warning btn-sm editar">Actualizar</button>
            <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
        </td> `;

    // Boton Eliminar
    fila.querySelector(".eliminar").addEventListener("click", () => fila.remove());

    // Boton actualizar
    fila.querySelector(".editar").addEventListener("click", () => {
        const nuevoNombre = prompt("Nuevo nombre:", nombre);
        const nuevoCorreo = prompt("Nuevo correo:", correo);
        const nuevoID = prompt("Nuevo ID:", idAlumno);
        const nuevoDeporte = prompt("Nuevo deporte:", deporte);

        if (nuevoNombre && nuevoCorreo && nuevoID && nuevoDeporte) {
            fila.children[0].textContent = nuevoNombre;
            fila.children[1].textContent = nuevoCorreo;
            fila.children[2].textContent = nuevoID;
            fila.children[3].textContent = nuevoDeporte;
        }
    });

    // Agregar fila a la tabla
    tablaRegistros.appendChild(fila);

    // Vaciar
    form.reset();
});
