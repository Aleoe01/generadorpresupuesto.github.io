// Obtener elementos del DOM
const formaPago = document.getElementById("formaPago");
const cantidadCuotas = document.getElementById("cantidadCuotas");

// Mostrar u ocultar las cuotas dependiendo de la forma de pago
formaPago.addEventListener("change", function () {
  if (formaPago.value === "tb") {
    cantidadCuotas.style.display = "block";
  } else {
    cantidadCuotas.style.display = "none";
  }
});

// Generar el mensaje personalizado
document.getElementById("generar").addEventListener("click", function () {
  
    // Obtener los datos del formulario
  const nombreVendedor = document.getElementById("nombreVendedor").value;
  const nombreCliente = document.getElementById("nombreCliente").value;
  const producto = document.getElementById("producto").value;
  const precio = document.getElementById("precio").value;
  const formaPagoValue = formaPago.value;
  const numeroCuotas = document.getElementById("numeroCuotas").value;
  const texto = document.getElementById("texto");

  if (
    !nombreVendedor ||
    !nombreCliente ||
    !producto ||
    !precio ||
    !formaPagoValue
  ) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  // Crear el mensaje dependiendo de la forma de pago
  let mensaje = "";

  if (formaPagoValue === "contado") {
    mensaje = `Hola ${nombreCliente}, soy ${nombreVendedor} de On City Esperanza! Te escribo porque sé que has estado interesado/a en el ${producto}. Tengo un precio contado especial de $${precio} disponible por tiempo limitado. ¡No dejes pasar esta oportunidad!`;
  } else if (formaPagoValue === "tb") {
    if (!numeroCuotas) {
      alert("Por favor, ingresa la cantidad de cuotas.");
      return;
    } else {
      mensaje = `Hola ${nombreCliente}, soy ${nombreVendedor} de On City Esperanza! Te escribo porque sé que has estado interesado/a en el ${producto}. El precio es de $${precio} y podemos ofrecerte el pago en ${numeroCuotas} cuotas con tu tarjeta de credito. ¡No dudes en consultarme!`;
    }
  }else{
    mensaje = `Hola ${nombreCliente}, soy ${nombreVendedor} de On City Esperanza! Te escribo porque sé que has estado interesado/a en el ${producto}. El precio es de $${precio} y podemos ofrecerte el pago en hasta 24 cuotas con credito On City. ¡No dudes en consultarme!`; 
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
    
})


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
