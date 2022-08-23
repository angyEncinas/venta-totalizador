import {precio_neto, devolver_impuesto,calcular_adicional,obtener_descuento,sacar_monto_total} from "./calculadora";


const cantidad = document.querySelector("#ingresar-cantidad");
const precio = document.querySelector("#precio-item");
const estado = document.querySelector("#codigo-estado");
const form = document.querySelector("#totalizador-form");
const div1 = document.querySelector("#Precio-Neto-div")
const div2 = document.querySelector("#Impuesto-div")
const div3 = document.querySelector("#Descuento-div")
const div4 = document.querySelector("#TotalFinal-div")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidaditem = Number.parseInt(cantidad.value);
  const precioitem = Number.parseInt(precio.value);
  const estadotipo = estado.value;
  const neto = precio_neto(cantidaditem,precioitem);
  const valor_impuesto = devolver_impuesto(estadotipo);
  const descuento = obtener_descuento(total);
  const valor_descuento = calcular_adicional(descuento,neto);
  const total_sin_impuesto = sacar_monto_total(valor_descuento,neto);
  const impuesto = calcular_adicional(valor_impuesto,total_sin_impuesto);
  const total = total_sin_impuesto + impuesto;

  div1.innerHTML = "<p>" +"Precio Neto: "+ neto + "</p>";
  div2.innerHTML = "<p>" + "Impuesto para "+estadotipo+"("+valor_impuesto+ " $): $" +impuesto+ "</p>";
  div3.innerHTML = "<p>" +"Descuento"+ "("+descuento+ " %) : "+valor_descuento+"</p>";
  div4.innerHTML = "<p>" +"Precio total (descuento e impuesto): $"+ total + "</p>";
});
