<<<<<<< HEAD
var baseUrl = window.location.origin;
var apiUrl = baseUrl + "/api/dev";

$(function() {
    function init() {
        var hide = true;

        $(".custom-toggle").click(function() {
            if (hide) {
                $("#sidebar").css({"margin-left": "-210px"});
                $(".main-content").addClass("animation");
                $(".main-content").removeClass("reverse-animation");
                $(".hidden-toggle").css({"display": "block"});
                hide = false;
            } else {
                $("#sidebar").css({"margin-left": "0px"});
                $(".main-content").removeClass("animation");
                $(".main-content").addClass("reverse-animation");
                $(".hidden-toggle").css({"display": "none"});
                hide = true;
            }
        });
    }

    init();
=======
var baseUrl = "http://localhost/main";
var apiUrl = baseUrl + "/api/dev";

$(function() {
    function init() {
        var hide = true;

        $(".custom-toggle").click(function() {
            if (hide) {
                $("#sidebar").css({"margin-left": "-210px"});
                $(".main-content").addClass("animation");
                $(".main-content").removeClass("reverse-animation");
                $(".hidden-toggle").css({"display": "block"});
                hide = false;
            } else {
                $("#sidebar").css({"margin-left": "0px"});
                $(".main-content").removeClass("animation");
                $(".main-content").addClass("reverse-animation");
                $(".hidden-toggle").css({"display": "none"});
                hide = true;
            }
        });
    }

    init();
>>>>>>> dev
});