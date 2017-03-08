////Forma ampliada
//$(document).ready(saluda)
//function saluda()
//{
//    alert($('h1').text())
//}
////Forma reducida
$(function()
{
    //alert($('h1').text())
    //Crea un nuevo parrafo en un elemento jQuery
    $nuevo = $('<p>Parrafo <b>nuevo</b></p>')
    $('h2').after($nuevo)
})