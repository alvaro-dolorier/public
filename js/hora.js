var intervalo = setInterval(function () {
    var fecha = new Date();
    var dia = fecha.getDate(); //Obtiene el día actual//
    var mes = fecha.getMonth(); //Obtiene el mes actual en formato numérico//
    var anio = fecha.getFullYear(); //Obtiene el año actual//
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']; //Array con los nombres de los meses// //array se utiliza para obtener el nombre del mes correspondiente al número obtenido con el método getMonth() de la clase Date()// //se utiliza para almacenar una colección de valores relacionados//
    var nombreMes = meses[mes]; // Obtiene el nombre del mes correspondiente al número obtenido//
    document.getElementById("hora").innerHTML = dia + " de " + nombreMes + " de " + anio + " - " + hora + ":" + minutos + ":" + segundos;
}, 1000);