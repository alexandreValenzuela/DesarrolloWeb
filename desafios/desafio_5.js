const electrodomesticos = ["microondas", "tostadora", "pava electrica", "licuadora", "cafetera"];

console.log("Lista original:");
for (let i = 0; i < electrodomesticos.length; i++) {
  console.log(electrodomesticos[i]);
}

console.log("\nLista actualizada:");

let ventaProductos = 3;

for (let i = 0; i < ventaProductos; i++) {
  electrodomesticos.pop();
  
}


for (let i = 0; i < electrodomesticos.length; i++) {
  console.log(electrodomesticos[i]);
}