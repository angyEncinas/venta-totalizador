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
    else{
        return 0
    }
}
  export {precio_neto,devolver_impuesto};
  