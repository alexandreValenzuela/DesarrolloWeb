const nombreProducto="hola";
const precioUnitario="hola";
let cantidadDeseada=prompt("")
let precioTotal=precioUnitario*cantidadDeseada

if (cantidadDeseada >=5) {
    preciofinal= precioTotal * 0.9;
    alert("El precio final de " + cantidadDeseada + " " + nombreProducto + " es de " + preciofinal + " pesos con un descuento del 10% aplicado.");
}else{
    alert("El precio final de " + cantidadDeseada + " " + nombreProducto + " es de " + precioTotal + " pesos sin descuento.");
}

    