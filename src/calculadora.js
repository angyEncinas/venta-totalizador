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
function calcular_adicional(parametro,valor_compra){
    return (valor_compra* parametro)/100;
}
function obtener_descuento(valor_compra){
    if(valor_compra == 1000){
        return 3;
    }
    if(valor_compra == 3000){
        return 5;
    }
    if(valor_compra == 7000){
        return 7;
    }
    if(valor_compra == 10000){
        return 10;
    }
    if(valor_compra == 30000){
        return 15;
    }
    else{
        return 0;
    }
}

  export {precio_neto,devolver_impuesto,calcular_adicional,obtener_descuento};
  