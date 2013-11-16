$(document).ready(function(){$('#username').focus()});
function check_login(){
    $.ajax({
        type:'POST',
        url:'http://benjax.co/mobile/login.php',
        data:"usuario="+$('#username').val()+"&senha="+$('#password').val(),
        success:function(response){
            if(response=='ok'){$('#error').css({'color':'#0c0','display':'block'}).html('CORRECT!')}
            else {$('#error').css({'color':'red','display':'block'}).html('Login credentials incorrect!')}
            
        }
    });
};