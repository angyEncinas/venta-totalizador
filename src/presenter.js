import sumar from "./sumador";

const cantidad = document.querySelector("#ingresar-cantidad");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidaditem = Number.parseInt(cantidad.value);

  div.innerHTML = "<p>" + cantidaditem + "</p>";
});
