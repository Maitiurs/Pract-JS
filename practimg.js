
const img = document.getElementById("imagen");
const div = document.getElementById("DM");
const h2 = document.getElementById("titulo");
    h2.textContent = "Cómo añadir un efecto a una imagen";
const texto = document.getElementById("texto");
    texto.textContent = "  Existen muchos plugins para insertar efectos especiales a las imagenes web en si. Si quieres utilizar muy poco código para así optimizar la carga cuando se les pasa el cursor por encima. Todos esos plugins añaden un montón de código a la página, que terminan afectando a la velocidad de de tu web, nuestro script para generar un efecto de Zoom es perfecto para ti."
const boton = document.createElement("button");
    boton.id = "botonLeer";
    boton.type = "button";
    boton.textContent = "Leer más...";
    document.body.appendChild(boton);

console.log(h2);
div.appendChild(imagen);
div.appendChild(h2);
div.appendChild(texto);
div.appendChild(boton);