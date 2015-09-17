(function( $ ) {

    /*
    * Add Smooth Scrolling Transition */
    var smoothTarget = function(){

        $('a.target[href^="#"]').click(function(event) {

            var id      = $(this).attr("href"),
                target  = $(id).offset().top;

            $('html, body').animate({ scrollTop:target }, 500);

            event.preventDefault();
        });

    }

    smoothTarget();

    /* Tooltip.js
    * Hover over the links below to see tooltips */
    var toolTip = function(){
        $('[data-toggle="tooltip"]').tooltip();
    }

    toolTip();


    /* Popover.js
    * Add small overlays of content */
    var popOver = function(){
        $('[data-toggle="popover"]').popover()
    }
    
    popOver();


    /* bootstrap-datepicker.js
    * A datepicker for Twitter Bootstrap */

    var bootstrapDatepicker = function(){
        $('.date, .input-group.date, .input-daterange').datepicker();
    }

    bootstrapDatepicker();

    /* bootstrap-datepicker.js
    * Select2 is a jQuery based replacement for select boxes. 
    * It supports searching, remote data sets, and infinite scrolling of results. */

    var boostrapSelect = function(){
        $('.select2').select2();
    }

    boostrapSelect();


})( jQuery );
