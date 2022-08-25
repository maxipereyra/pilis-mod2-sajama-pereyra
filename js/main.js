//menu

// registro
let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

function onClick (event) {
    event.preventDefault();
    let name = document.getElementById('nameComercio').value;
    console.log(name);
}


// clima