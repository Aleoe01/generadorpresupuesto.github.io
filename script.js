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

// Funciones generadoras de mensajes

function generarMensajeContado(nombreCliente, nombreVendedor, producto, precio) {
  return `¡Hola ${nombreCliente}, soy ${nombreVendedor} de On City Esperanza! 😊\n\n
          Sé que estuviste interesado/a en el *${producto}* y tengo un precio contado especial de *$${precio}* disponible por tiempo limitado. 💸\n\n
          ¡No dejes pasar esta oportunidad!`;
}

function generarMensajeTarjeta(nombreCliente, nombreVendedor, producto, precio, cuotas) {
  return `Hola ${nombreCliente}, soy ${nombreVendedor} de On City Esperanza! 😄\n\n` +
         `Por el *${producto}*, el precio es $${precio} y podés pagarlo en ${cuotas} cuotas con tarjeta. 💳\n\n` +
         `¡Consultame sin compromiso!`;
}

function generarMensajeCredito(nombreCliente, nombreVendedor, producto, precio) {
  return `Hola ${nombreCliente}, soy ${nombreVendedor} de On City Esperanza! 😄\n\n` +
         `Podés llevar el *${producto}* con Crédito On City en hasta 24 cuotas. Precio: $${precio}.`;
}

function generarMensajePreferencial(nombreCliente, nombreVendedor, limiteCredito, limitePrestamo) {
  return `¡Hola ${nombreCliente}, soy ${nombreVendedor} de On City Esperanza! 😊\n\n` +
          `Quería contarte que, por ser *cliente preferencial*, tenés acceso exclusivo a *financiaciones especiales* 💙\n\n` +
          `👉 Limite disponible de $${limiteCredito} con *Crédito On City* para lo que más te guste\n` +
          `👉 LLevate hasta $${limitePrestamo} en efectivo con *préstamos personales*\n\n` +
          `Son montos pensados para vos, con cuotas que se ajustan a tus necesidades para que puedas aprovechar al máximo este beneficio. 🚀\n\n` +
          `Si te interesa, escribime o pasate por la sucursal y te explico cómo avanzar. ¡Estoy para ayudarte! 🙌`;
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
      mensaje = generarMensajeContado(nombreCliente, nombreVendedor, producto, precio);
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
      mensaje = generarMensajeTarjeta(nombreCliente,nombreVendedor,producto,precio,numeroCuotas);
      break;

    case "credito":

      if (!producto || !precio) {
        alert("Por favor, completá los campos de producto y precio.");
        return;
      }
      mensaje = generarMensajeCredito(nombreCliente,nombreVendedor,producto,precio);
      break;

    default: // cliente preferencial

      if (!limiteCredito || !limitePrestamo) {
        alert("Por favor, completá los montos de crédito y préstamo.");
        return;
      }
      mensaje = generarMensajePreferencial(nombreCliente, nombreVendedor, limiteCredito, limitePrestamo);

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
