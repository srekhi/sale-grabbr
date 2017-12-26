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
    1. User interactions
    2. Scroll plugins
    3. Newsletter
*/

$(document).ready(function(){
    "use strict";

    /* ------------------------------------- */
    /* 1. User interactions ................ */
    /* ------------------------------------- */

    // Next function allows the user to close the right side by clicking outside of it

    $(document).click(function(e) {
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
    /* 2. Scroll plugins ................... */
    /* ------------------------------------- */

    function scrollbar(){

        $('body').mCustomScrollbar({
            scrollInertia:200,
            scrollEasing:"easeInOutCubic"
        });
    }
  
    scrollbar();

    /* ------------------------------------- */
    /* 3. Newsletter ....................... */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    // Next function remove the shining effect on the newsletter button once the user has clicked on it

    $('a.action-btn').on( "click", function() {
        
        $('a.action-btn').removeClass('blink');
    });
});