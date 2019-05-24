//Prende il valori della form e li butta in post su /auth. 

$('.login').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        type: "POST",
        url: "http://itmil-dvz:3000/auth",
        data: {
            "username":"demo",
            "password": "demo"
        },
        success: function(){console.log("Autenticazione Mandata")},
        dataType: "json"
      });
});

