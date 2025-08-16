// fv-catch------------------------------
var mediaQuery1 = window.matchMedia("(max-width: 321px)");
function handleMediaQueryChange1(mediaQuery1){
    if(mediaQuery1.matches){
        $('.fv-catch').css('fontSize', '25.8px');
    } else{
        $('.fv-catch').css('fontSize', '');
    }
}
handleMediaQueryChange1(mediaQuery1);
mediaQuery1.addEventListener('change', handleMediaQueryChange1);


// idea-description font-size: 13.8px; (max-width: 323px)--------------------------
var mediaQuery2 = window.matchMedia("(max-width: 323px)");
function handleMediaQueryChange2(mediaQuery2){
    if(mediaQuery2.matches){
        $('.idea-description').css('fontSize', '13.8px');
    } else{
        $('.idea-description').css('fontSize', '');
    }
}
handleMediaQueryChange2(mediaQuery2);
mediaQuery2.addEventListener('change', handleMediaQueryChange2);

// idea-textarea bottom: 30px; (max-width: 369px)-------------------------------
var mediaQuery3 = window.matchMedia("(max-width: 369px)");
function handleMediaQueryChange3(mediaQuery3){
if(mediaQuery3.matches){
    $('.idea-textarea').css('bottom', '25px');
} else{
    $('.idea-textarea').css('bottom', '');
}
}
handleMediaQueryChange3(mediaQuery3);
mediaQuery3.addEventListener('change', handleMediaQueryChange3);


// .privacy-row-text (max-width: 329px) font-size: 15.4px;--------------------------
var mediaQuery4 = window.matchMedia("(max-width: 329px)");
function handleMediaQueryChange4(mediaQuery4){
    if(mediaQuery4.matches){
        $('.privacy-row-text').css('fontSize', '15.4px');
    } else{
        $('.privacy-row-text').css('fontSize', '');
    }
}
handleMediaQueryChange4(mediaQuery4);
mediaQuery4.addEventListener('change', handleMediaQueryChange4);

// drawer------------------------------------------
$('.hamburger').on('click', function(){
    $(this).toggleClass('active');
    $('.drawer').toggleClass('active');
    $('html, body').toggleClass('no-scroll');
});

// .product .inner and .news .inner (min-width: 1100px) and (max-width: 1199px)----------------
var mediaQuery5 = window.matchMedia("(min-width: 1100px) and (max-width: 1199px)");
function handleMediaQueryChange5(mediaQuery5){
if(mediaQuery5.matches){
    $('.products').find('.inner').css('paddingLeft', '170px');
    $('.products').find('.inner').css('paddingRight', '170px');
    //---------------------------------------------------------------
    $('.news').find('.inner').css('paddingLeft', '120px');
    $('.news').find('.inner').css('paddingRight', '120px');
} else{
    $('.products').find('.inner').css('paddingLeft', '');
    $('.products').find('.inner').css('paddingRight', '');
    // -----------------------------------------------------------------
    $('.news').find('.inner').css('paddingLeft', '');
    $('.news').find('.inner').css('paddingRight', '');
}
}
handleMediaQueryChange5(mediaQuery5);
mediaQuery5.addEventListener('change', handleMediaQueryChange5);


// smoothScroll-------------------------------------------------------
$('a[href^="#"]').on('click', function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
        scrollTop: position
    }, 300);
});

$('.drawer').find('a[href^="#"]').on('click', function(){
    $('.drawer').toggleClass('active');
    $('.hamburger').toggleClass('active');
    $('html, body').toggleClass('no-scroll');
});