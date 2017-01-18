/*
 ===================== DocumentReady ============================
 */
$(document).ready(function () {
    
    $(".sucursal").focus(function () {
        $(".sucursal-icon").css("left", "-48px");
    });
    $(".sucursal").blur(function () {
        $(".sucursal-icon").css("left", "0px");
    });    
    $(".username").focus(function () {
        $(".user-icon").css("left", "-48px");
    });
    $(".username").blur(function () {
        $(".user-icon").css("left", "0px");
    });

    $(".password").focus(function () {
        $(".pass-icon").css("left", "-48px");
    });
    $(".password").blur(function () {
        $(".pass-icon").css("left", "0px");
    });
    
    $("#sucursal").autocomplete({
        source: "controles/ManteSucursales.php",
        Length: 2,
        select: function (event, data) {
            $("#codsucursal").val(data.item.id);
            $("#sucursal").val(data.item.value);
        }
    });

//    $("#nusuario").autocomplete({
//        source: "controles/ManteUsuarios.php",
//        Length: 2,
//        select: function (event, data) {
//            //$("#codsucursal").val(data.item.id);
//            $("#nusuario").val(data.item.value);
//        }
//    });

console.log(token());
$("#txt_token").val(token);
$("#txt_token1").val(token1);

});

    
function random() {
    return Math.random().toString(36).substr(2); // Eliminar `0.`
};
 
function token() {
    return random(); // Para hacer el token más largo
};
 function token1() {
    return random(); // Para hacer el token más largo
};