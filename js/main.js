$(function(){

    $('.header__menu-btn').on('click', function(e){
       $('.header__menu ul').slideToggle();
       $(this).toggleClass('menu-btn__active')
       
        // e.preventDefault;
        // $(this).toggleClass('menu-btn__active')
    });
    
});
