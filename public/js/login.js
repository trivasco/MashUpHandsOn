//Prende il valori della form e li butta in post su /auth. 

$('.login').click(function () {
   // $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        type: "POST",
        url: "http://itmil-dvz:3000/auth",
        dataType: "json",
        data: {
            "username":username,
            "password": password
        },
        success: function(d){
            //d.Ticket rappresenta il ticket di autenticazione. 
            //console.log(d)
            window.location.href="https://windows2012-cii/ticket/single/?appid=bf7877fd-f92b-429b-b546-f5f9a116cf38&obj=fzrxtjq&qlikTicket="+d.Ticket;
            //window.location.href="http://itmil-dvz:3000/index.html?qlikTicket="+d.Ticket;
        }
        
      });
    return false;
});

