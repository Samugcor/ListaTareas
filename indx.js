$(function(){

    $('#sendinput').on("click",function(){
        let input = $('#taskInput').val();
        $('ul').append('<li class="sincompletar"><div class="checkckontainer"><img src="Imagenes/square.svg" alt=""></div>'+input+'<div class="trashcontainer"><img src="Imagenes/trash-2.svg" alt=""></div></li>');
        $('#taskInput').val('');
    })

    $('ul').on("mouseenter", 'li', function(){
        $(this).children('.trashcontainer').css("display","flex");
    })
    $('ul').on("mouseleave",'li', function(){
        $(this).children('.trashcontainer').css("display","none");
    })

    $('ul').on("click", '.checkckontainer',function(){
        if($(this).children('img').attr('src')=="Imagenes/square.svg"){
            $(this).children('img').attr('src','Imagenes/square-check-big.svg');
        }
        else{
            $(this).children('img').attr('src','Imagenes/square.svg');
        }
        
        $(this).parent('li').toggleClass("completada sincompletar");
    });

    $('ul').on("click", '.trashcontainer',function(){
        
        $(this).parent('li').fadeOut(100);
    });

})