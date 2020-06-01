$(document).ready(function(){
    $('.html').hide();
    $('.psql').hide();
    $('.a11y').hide();
    $('.css').hide();
    $('.js').hide();
    $('.cl').hide();
    $('.jq').hide();
    $('.postgresql').hide();

    $('button').on('click', function(){
        $(`.${event.target.value}`).toggle()
    });

});

