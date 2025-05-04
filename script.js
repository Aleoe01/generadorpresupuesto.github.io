
// Mostrar u ocultar las cuotas dependiendo de la forma de pago
document.getElementById("formaPago").addEventListener("change", function () {
  const formaPago = this.value;
  const producto = document.getElementById("producto");
  const precio = document.getElementById("precio");
  const cantidadCuotas = document.getElementById("cantidadCuotas");
  
  if (formaPago === "tb") {
    cantidadCuotas.style.display = "block";
    producto.disabled = false;
    precio.disabled = false;
  } else if (formaPago === "preferencial") {
    cantidadCuotas.style.display = "none";
    producto.disabled = true;
    precio.disabled = true;
  } else {
    cantidadCuotas.style.display = "none";
    producto.disabled = false;
    precio.disabled = false;
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
  const enlaceCatalogo = "https://v3ar.zone-secure.net/3304/2420778/#page=1";

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

      mensaje =  `¡Hola ${nombreCliente}, soy ${nombreVendedor} de On City Esperanza! 😃\n\nQuería compartirte nuestro nuevo *catálogo digital* 📲 con productos pensados especialmente para vos, que sos parte de nuestros clientes preferenciales 💙\n\n📌 Miralo acá: ${enlaceCatalogo}\n\nSi te gusta algo o tenés dudas, escribime sin problema. ¡Tenés prioridad en stock y promos especiales solo para vos! 😉\n\n¡Gracias por seguir confiando en nosotros! 🙌`;

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
