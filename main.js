console.log("localidades que podes buscar")
console.log("----------------------------")
AGENCIAS.forEach (function(agencia){
    console.log(agencia.localidad);
})
//variable para pedir al usuario que ingrese dato y lo convierto a mayusculas
let ingresaLocalidad = prompt ("Busca por localidad, CABALLITO, ALMAGRO, RECOLETA, PALERMO O");
//Filtro las agencias segun la localidad que ingrese el usuario y lo convierto a mayusculas para no tener errores
let buscarPorLocalidad = AGENCIAS.filter((item) => item.localidad===ingresaLocalidad.toUpperCase());

console.log(buscarPorLocalidad);


