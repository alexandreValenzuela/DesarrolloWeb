let producto= {
    nombre: "camiseta",
    precio: "20000",
    cantidadDisponible: "3",
}

producto.nombre= "zapatillas";
producto.categoria= "calzado";

delete producto.cantidadDisponible;
console.log(producto)