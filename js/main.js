
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
/* DOM */

let tempValor = document.getElementById('temperatura-valor')
let tempDetalle = document.getElementById('temperatura-detalle')

let ubicacion = document.getElementById('ubicacion')
let iconoAnimado = document.getElementById('icono-animado')

let vientoVelocidad = document.getElementById('viento-velocidad')

/* llamada a la api del clima de openweathermap */
async function getClima() {
    try {
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-24.183223875202245&lon=-65.33121832411764&appid=6b9584e08bcd6d41e5170215383e3965&units=metric&lang=es");


        let climaResponse = await response.json();
        console.log(climaResponse.main.temp);

        let temp = Math.round(climaResponse.main.temp);
        tempValor.textContent = `${temp} °C`;

        let desc = climaResponse.weather[0].description;
        tempDetalle.textContent = desc.toUpperCase();

        ubicacion.textContent = climaResponse.name;

        vientoVelocidad.textContent = `${climaResponse.wind.speed} m/s`;

        //iconos animados

        console.log(climaResponse.weather[0].main)

        switch (climaResponse.weather[0].main) {
            case 'Clear':
                iconoAnimado.src = '/assets/img/animated/day.svg';
                break;
            case 'Clouds':
                iconoAnimado.src = '/assets/img/animated/cloudy-day-1.svg';
                break;
            case 'Drizzle':
                iconoAnimado.src = '/assets/img/animated/rainy-2.svg';
                break;
            case 'Rain':
                iconoAnimado.src = '/assets/img/animated/rainy-7.svg';
                break;
            default:
                iconoAnimado.src = '/assets/img/animated/cloudy-day-1.svg';
        }


    } catch {
        console.log("Algo paso, no se pudo resolver...");
    }
}
getClima();

