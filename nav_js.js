$(document).ready(function() {

    $(".menu-link").click(function(event) {
        event.preventDefault();
        $(".menu-overlay").toggleClass("open");
        $(".menu").toggleClass("open");
    });
});