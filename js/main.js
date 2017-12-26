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
    2. User interactions
    3. Scroll plugins
    4. Newsletter
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
    /* 2. User interactions ................ */
    /* ------------------------------------- */

    // Next function allows the user to close the right side by clicking outside of it

    $(document).on( "click", function(e) {
        if (e.target.id !== 'right-side' && !$('#right-side , .pswp , #mCSB_1_scrollbar_vertical , #mCSB_1_dragger_vertical , .mCSB_dragger_bar').find(e.target).length) {

            $('.mCSB_scrollTools, #close-right-side, #right-side, #left-side, #particles-js').removeClass('right-side-opened');

            if ($(window).width() > 667) {

                setTimeout(function() {
                    $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side",{
                        scrollInertia:500,
                        callbacks:false
                    });
                }, 350);

            }

        }
    });

    // Next function allows the user to open the right side

    $('a#open-more-info').on( "click", function() {

        $('#close-right-side, #right-side, #left-side, #particles-js').toggleClass('right-side-opened');

        setTimeout(function() {

            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side",{
                scrollInertia:500,
                callbacks:false
            });

            $('.mCSB_scrollTools').toggleClass('right-side-opened');

        }, 350);

        return false;

    });

    // Next function allows the user to open the right side and scrolled it automatically until the contact part

    $('a#get-in-touch').on( "click", function() {

        $('#close-right-side, #right-side, #left-side, #particles-js').toggleClass('right-side-opened');

        setTimeout(function() {

            $("#mcs_container").mCustomScrollbar("scrollTo", "#contact-part",{
                scrollInertia:500,
                callbacks:false
            });

            $('.mCSB_scrollTools').toggleClass('right-side-opened');

        }, 350);

        return false;

    });

    // Next function closes the right side by clicking on the top right cross

    $('button#close-right-side').on( "click", function() {
        
        $('.mCSB_scrollTools, #close-right-side, #right-side, #left-side, #particles-js').removeClass('right-side-opened');

        setTimeout(function() {
            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side",{
                scrollInertia:500,
                callbacks:false
            });
        }, 350);

        return false;
    });

    /* ------------------------------------- */
    /* 3. Scroll plugins ................... */
    /* ------------------------------------- */

    function scrollbar(){

        $('body').mCustomScrollbar({
            scrollInertia:200,
            scrollEasing:"easeInOutCubic"
        });
    }
  
    scrollbar();

    /* ------------------------------------- */
    /* 4. Newsletter ....................... */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    // Next function remove the shining effect on the newsletter button once the user has clicked on it

    $('a.action-btn').on( "click", function() {
        
        $('a.action-btn').removeClass('blink');
    });
});