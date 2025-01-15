
const formaPago = document.getElementById("formaPago");
const cantidadCuotas = document.getElementById("cantidadCuotas");

// Mostrar u ocultar las cuotas dependiendo de la forma de pago
formaPago.addEventListener('change', function () {
    if (formaPago.value === "contado") {
        cantidadCuotas.style.display = "none";
    } else {
        cantidadCuotas.style.display = "block";
    }
});


document.getElementById('generar').addEventListener('click', function() {
    
    // Obtener los datos del formulario

    const nombreVendedor = document.getElementById("nombreVendedor").value;
    const nombreCliente = document.getElementById("nombreCliente").value;
    const producto = document.getElementById("producto").value;
    const precio = document.getElementById("precio").value;
    const formaPago = document.getElementById("formaPago").value;
    const cantidadCuotas = document.getElementById("numeroCuotas").value;
    const texto = document.getElementById("texto");

    // Crear el mensaje dependiendo de la forma de pago

    let mensaje = "";

    if (formaPago === "contado") {
        mensaje =
            "Hola " +
            nombreCliente +
            ", soy "+ nombreVendedor +" de On City Esperanza! Te escribo porque sé que has estado interesado/a en el " +
            producto +
            " y ahora es el momento ideal para aprovecharlo. Tengo un precio contado especial de $ " +
            precio +
            " disponible por tiempo limitado.\nSi te interesa, házmelo saber y te doy todos los detalles. ¡No dejes pasar esta oportunidad!";
    } else if (formaPago === "tb") {
        mensaje =
            "Hola " +
            nombreCliente +
            ", soy Ale de On City Esperanza! Te escribo porque sé que has estado interesado/a en el " +
            producto +
            ". El precio es de $ " +
            precio +
            " y podemos ofrecerte el pago en " +
            cantidadCuotas +
            " cuotas con tu tarjeta de credito.\nSi te interesa, házmelo saber y te doy todos los detalles. ¡No dudes en consultarme!";
    }

    texto.value = mensaje;

    
} )

document.getElementById('enviar').addEventListener('click', function(){

    const telefono = document.getElementById("telefono").value;
    const texto = document.getElementById("texto").value;
    
    // Codificar el mensaje para URL
    
    const encodedMessage = encodeURIComponent(texto);
    
    // Crear el enlace de WhatsApp
    const whatsappURL = "https://wa.me/549" + telefono + "?text=" + encodedMessage;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappURL, "_blank");

})
