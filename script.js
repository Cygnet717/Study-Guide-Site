$(document).ready(function(){

    $('div').on('click', function(){
        console.log ('div clicked');
        $(event.target).children('ul').slideToggle('fast');
    });

    $('li').on('click', event=>{
        event.stopPropagation();
        console.log ('li clicked');
        /*$(this).closest('section').children('p').css({'color':'red'});*/
        $(this).find('section').slideToggle('fast');
    })

});

