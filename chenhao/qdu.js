$(document).ready(function () {
    $("#login").click(function () {
        $("#content").load("login.html");
    });
});
$(document).ready(function () {
    $("#add").click(function () {
        $("#content").load("form.html");
    });
});
$(document).ready(function () {
    $("#sum").click(function () {
        $("#content").load("grade.html");
    });
})