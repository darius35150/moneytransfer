$(document).ready(function(){
    $("#loginform").hide();
    $("#signupform").hide();

    $("#login").click(function(){
        $("#loginform").fadeIn();
    });

    $("#logincancel").click(function(){
        $("#loginform").fadeOut();
    });

    $("#signup").click(function(){
        $("#signupform").fadeIn();
    });

    $("#cancel").click(function(){
        $("#signupform").fadeOut();
    });
});
   

    