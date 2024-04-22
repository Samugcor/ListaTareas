$(function(){
$('#taskInput').change(function(){
    let input = $(this).val();
    $('ul').append('<li class="sincompletar"><div class="checkckontainer"><img src="Imagenes/square.svg" alt=""></div>'+input+'</li>');
    $(this).val('')
})

})