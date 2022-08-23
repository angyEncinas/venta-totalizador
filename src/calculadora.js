function precio_neto(cantidad, precio) {
    return cantidad * precio;
  }
function devolver_impuesto(estado){
    if(estado == "UT"){
        return 6.65;
    }
    else{
        return 0
    }
}
  export {precio_neto,devolver_impuesto};
  