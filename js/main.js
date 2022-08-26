
// registro
let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();
    const mensaje = {
        comercio: document.getElementById('nameComercio').value,
        titular: document.getElementById('nameTitular').value,
        celular: document.getElementById('celular').value,
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(mensaje),
        headers: { "Content-type": "application/json; charset=UTF-8" },

    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                // iconColor: '#d62828',
                iconColor: '#f77f00',
                title: 'Registro Exitoso',
                showConfirmButton: false,
                background : '#003049',
                color : '#fff',
                timer: 1500
            });
            cleanForm();
        })

}

function cleanForm() {
    let formulario = document.getElementById('formulario');
    formulario.reset();
}


// clima