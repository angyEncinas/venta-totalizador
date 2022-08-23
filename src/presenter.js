import sumar from "./sumador";

const cantidad = document.querySelector("#ingresar-cantidad");
const precio = document.querySelector("#precio-item");
const form = document.querySelector("#totalizador-form");
const div1 = document.querySelector("#resultado1-div")
const div2 = document.querySelector("#resultado2-div")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidaditem = Number.parseInt(cantidad.value);
  const precioitem = Number.parseInt(precio.value);

  div1.innerHTML = "<p>" +"Cantidad: "+ cantidaditem + "</p>";
  div2.innerHTML = "<p>" + "Precio: "+precioitem + "</p>";
});
