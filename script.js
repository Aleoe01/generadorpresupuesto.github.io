
// Mostrar u ocultar las cuotas dependiendo de la forma de pago
document.getElementById("formaPago").addEventListener("change", function () {
  const formaPago = this.value;
  const inputProducto = document.getElementById("inputProducto");
  const inputPrecio = document.getElementById("inputPrecio");
  const cantidadCuotas = document.getElementById("cantidadCuotas");
  const limiteCredito = document.getElementById("inputCredito");
  const limitePrestamo = document.getElementById("inputPrestamo");
  
  if (formaPago === "tb") {
    cantidadCuotas.style.display = "block";
    inputProducto.style.display = "block";
    inputPrecio.style.display = "block";
    limiteCredito.style.display = "none";
    limitePrestamo.style.display = "none";
  } else if (formaPago === "preferencial") {
    cantidadCuotas.style.display = "none";
    inputProducto.style.display = "none";
    inputPrecio.style.display = "none";
    limiteCredito.style.display = "block";
    limitePrestamo.style.display = "block";
  } else {
    cantidadCuotas.style.display = "none";
    inputProducto.style.display = "block";
    inputPrecio.style.display = "block";
    limiteCredito.style.display = "none";
    limitePrestamo.style.display = "none";
  }

});

// Capitalizar nombres
function CapitalizarNombre(nombre){
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

// Generar el mensaje personalizado
document.getElementById("generar").addEventListener("click", function () {
  
  // Obtener los datos del formulario
  const nombreVendedor = CapitalizarNombre(document.getElementById("nombreVendedor").value);
  const nombreCliente = CapitalizarNombre(document.getElementById("nombreCliente").value);
  const producto = document.getElementById("producto").value;
  const precio = document.getElementById("precio").value;
  const formaPago = document.getElementById("formaPago").value;
  const numeroCuotas = document.getElementById("numeroCuotas").value;
  const texto = document.getElementById("texto");
  const limiteCredito = document.getElementById("limiteCredito").value;
  const limitePrestamo = document.getElementById("limitePrestamo").value;

  //campos obligatorios comunes
  if (!nombreVendedor || !nombreCliente) {
    alert("Por favor, completá los campos de nombre del vendedor y cliente.");
    return;
  }
  
  // Crear el mensaje dependiendo de la forma de pago
  switch (formaPago) {

    case "contado":

      if (!producto || !precio) {
        alert("Por favor, completá los campos de producto y precio.");
        return;
      }
      mensaje = `¡Hola ${nombreCliente}, soy ${nombreVendedor} de On City Esperanza! 😊\n\nSé que estuviste interesado/a en el *${producto}* y tengo un precio contado especial de *$${precio}* disponible por tiempo limitado. 💸\n\n¡No dejes pasar esta oportunidad!`;

      break;

    case "tb":

      if (!producto || !precio) {
        alert("Por favor, completá los campos de producto y precio.");
        return;
      }
      if (!numeroCuotas) {
        alert("Por favor, ingresá la cantidad de cuotas.");
        return;
      }
      mensaje = `¡Hola ${nombreCliente}, soy ${nombreVendedor} de On City Esperanza! 😊\n\nSé que estuviste interesado/a en el *${producto}*. El precio es de *$${precio}* y podemos ofrecerte el pago en *${numeroCuotas} cuotas* con tu tarjeta de crédito. 💳\n\n¡No dudes en consultarme!`;

      break;

    case "credito":

      if (!producto || !precio) {
        alert("Por favor, completá los campos de producto y precio.");
        return;
      }
      mensaje = `¡Hola ${nombreCliente}, soy ${nombreVendedor} de On City Esperanza! 😊\n\nSé que estuviste interesado/a en el *${producto}*. El precio es de *$${precio}* y podés financiarlo en hasta *24 cuotas* con *crédito On City*. 🧾\n\n¡Estoy para ayudarte!`;

      break;

    default: // cliente preferencial

      if (!limiteCredito || !limitePrestamo) {
        alert("Por favor, completá los montos de crédito y préstamo.");
        return;
      }
      mensaje =  `¡Hola ${nombreCliente}, soy Ale de On City Esperanza! 😊\n\nQuería contarte que como cliente preferencial, tenés acceso exclusivo a *financiaciones especiales* 💙\n\nPodés acceder hasta $${limiteCredito} con Crédito On City o consultar por *préstamos personales* de hasta $${limitePrestamo} con mínimos requisitos.\n\nAdemás, te comparto nuestro catálogo digital actualizado con productos pensados especialmente para vos, ¡valido hasta el *15 de mayo*! 📲\n\nSi te interesa algo o querés más info, escribime. ¡Estoy para ayudarte! 🙌`;

      break;
  }

  // Mostrar el mensaje generado en el campo de texto
  texto.value = mensaje;


});


// limpia todos los campos
document.getElementById("borrar").addEventListener("click", function () {

    document.getElementById("nombreVendedor").value = "";
    document.getElementById("nombreCliente").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("precio").value = "";
    formaPago.value = "";
    document.getElementById("numeroCuotas").value = "";
    cantidadCuotas.style.display = "none";
    document.getElementById("texto").value = "";
    document.getElementById("limiteCredito").value = "";
    document.getElementById("limitePrestamo").value = "";
    
})

console.log(texto);


// envia el mensaje generado
document.getElementById("enviar").addEventListener("click", function () {

  // obtener numero de telefono y texto generado  
  const telefono = document.getElementById("telefono").value;
  const texto = document.getElementById("texto").value;

  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(texto);

  // Crear el enlace de WhatsApp
  const whatsappURL =
    "https://wa.me/549" + telefono + "?text=" + encodedMessage;

  // Abrir WhatsApp en una nueva pestaña
  window.open(whatsappURL, "_blank");
});
