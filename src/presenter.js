import {precio_neto, devolver_impuesto,calcular_impuesto} from "./calculadora";


const cantidad = document.querySelector("#ingresar-cantidad");
const precio = document.querySelector("#precio-item");
const estado = document.querySelector("#codigo-estado");
const form = document.querySelector("#totalizador-form");
const div1 = document.querySelector("#resultado1-div")
const div2 = document.querySelector("#resultado2-div")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidaditem = Number.parseInt(cantidad.value);
  const precioitem = Number.parseInt(precio.value);
  const estadotipo = estado.value;
  const total = precio_neto(cantidaditem,precioitem);
  const valor_impuesto = devolver_impuesto(estadotipo);

  div1.innerHTML = "<p>" +"Precio Neto: "+ total + "</p>";
  div2.innerHTML = "<p>" + "Impuesto para "+estadotipo+"("+valor_impuesto+ " $): $" +calcular_impuesto(valor_impuesto,total)+ "</p>";
});
