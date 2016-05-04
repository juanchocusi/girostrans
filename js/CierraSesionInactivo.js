
onInactive(900000, function () {
    //alert('Inactive for 5 minutos');
    window.location.href = 'Logout.php';
    window.close();
});

function onInactive(ms, cb) {
    var wait = setTimeout(cb, ms);
    document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = document.onkeyup = document.focus = function () {
        clearTimeout(wait);
        wait = setTimeout(cb, ms);
    };
}


