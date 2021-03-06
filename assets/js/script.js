$(function() {
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    $('#accept-cookies').click(function() {
        setCookie('accept-cookies', 1, 3650);
        $('#cookie-info').addClass('d-none');
    });
    if (getCookie('accept-cookies') === "") {
        $('#cookie-info').removeClass('d-none');
    }
    $('a.mail').click(function() {
        window.location.href = 'mailto:' + $(this).html().replace('(at)', '@');
    });
});
