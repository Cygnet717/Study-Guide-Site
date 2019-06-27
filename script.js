$(document).ready(function(){

    $('div').on('click', function(){
        console.log ('div clicked');
        $(event.target).children('ul').slideToggle('fast');
    });

    $('li').on('click', 'a', event=>{
        console.log ('li clicked');
        $(event.target).children('p').slideToggle('fast');
    })

});

