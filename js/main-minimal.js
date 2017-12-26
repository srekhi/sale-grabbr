/*
* GENIUS - Ambitious Coming Soon Template
* Build Date: November 2016
* Last Update: November 2016
* Author: Madeon08 for ThemeHelite
* Copyright (C) 2016 ThemeHelite
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Newsletter
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function(){
    "use strict";

    setTimeout(function(){

    $('#loading span').each(function(i) {
        (function(self) {
            setTimeout(function() {
                $(self).velocity({
                    translateY : "100vh",
                },

                {
                    duration: 900,
                    easing: [0.7,0,0.3,1]
                });
            },(i*150)+150);
            })(this);
        });

    },1000);

    setTimeout(function(){

        $('.text-intro').each(function(i) {
        (function(self) {
            setTimeout(function() {
                $(self).velocity( 'transition.perspectiveUpIn' ).css('opacity', '1');
            },(i*150)+150);
            })(this);
        });

        $('.entrance-anim-1').velocity( 'transition.slideDownIn' ).css('opacity', '1');

        $('.entrance-anim-2').velocity( 'transition.slideUpIn' ).css('opacity', '1');

        $('#loading').velocity( 'transition.slideUpOut' );

    },1800);

});

$(document).ready(function(){
    "use strict";

    $('#preloader').velocity( 'transition.slideUpIn' ).css('opacity', '1');

    /* ------------------------------------- */
    /* 2. Newsletter ....................... */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    // Next function remove the shining effect on the newsletter button once the user has clicked on it

    $('a.action-btn').on( "click", function() {
        
        $('a.action-btn').removeClass('blink');
    });
});