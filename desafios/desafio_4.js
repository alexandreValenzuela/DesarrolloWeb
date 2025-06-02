const nombreProducto = "alfajor";
const precioUnitario = 1500;
let cantidadDeseada = prompt("Cuantas unidades de " + nombreProducto + " desea comprar?");

function SumarProductos(precioUnitario, cantidadDeseada) {
    precioTotal = precioUnitario * cantidadDeseada;
    console.log("El precio total de la compra es de $" + precioTotal + " pesos");
}

SumarProductos(precioUnitario, cantidadDeseada)