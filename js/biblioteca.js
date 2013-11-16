$(document).ready(function(){$('#username').focus()});
function check_login(){
    $.ajax({
        type:'POST',
        url:'http://benjax.co/mobile/login.php',
        data:"usuario="+$('#username').val()+"&senha="+$('#password').val(),
        success:function(response){
            if(response=='jPb5mInzFpOnsRYXM1T5HXZa/Vk2SAgM2wjm6iNVyXM='){$('#error').css({'color':'#0c0','display':'block'}).html('CORRECT!')}
            else {$('#error').css({'color':'red','display':'block'}).html('Login credentials incorrect!')}
            
        }
    });
};
<<<<<<< HEAD
=======

var connectionStatus = false;

$(document).on('pagebeforeshow', '#index', function () {
    setInterval(function () {
        connectionStatus = navigator.onLine ? 'online' : 'offline';
    }, 100);
    $(document).on('click', '#check-connection', function () {
        alert(connectionStatus);
    });
});
>>>>>>> verificar conexao com internet
