function precio_neto(cantidad, precio) {
    return cantidad * precio;
  }
function devolver_impuesto(estado){
    if(estado == "UT"){
        return 6.65;
    }
    if(estado == "NV"){
        return 8.00;
    }
    if(estado == "TX"){
        return 6.25;
    }
    if(estado == "AL"){
        return 4.00;
    }
    if(estado == "CA"){
        return 8.25;
    }
    else{
        return 0
    }
}
function calcular_impuesto(impuesto,valor_compra){
    return (valor_compra* impuesto)/100;
}
  export {precio_neto,devolver_impuesto,calcular_impuesto};
  