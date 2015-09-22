(function( $ ) {

    /*
    * Add Smooth Scrolling Transition */
    function smoothTarget(){

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
    function toolTip(){
        $('[data-toggle="tooltip"]').tooltip();
    }

    toolTip();


    /* Popover.js
    * Add small overlays of content */
    function popOver(){
        $('[data-toggle="popover"]').popover()
    }
    
    popOver();


    /* bootstrap-datepicker.js
    * A datepicker for Twitter Bootstrap */

    function bootstrapDatepicker(){
        $('[data-plugin="datepicker"]').datepicker();
    }

    bootstrapDatepicker();

    /* chosen.js
    * jQuery plugin that makes long, unwieldy select boxes much more user-friendly. */

    function selectBox(){
        $('[data-plugin="selectbox"]').chosen();
    }

    selectBox();

    /* dropzone.js
    * An open source library that provides drag’n’drop file uploads with image previews. */
 
    function dropZone(){
        $('[data-plugin="dropzone"]').dropzone();
    }
 
    dropZone();

    /* InputFile
    * Adding the filename label to the input file button */

    function inputFile(){ 
        var inputs = $('.inputfile input[type="file"]');

        inputs.each(function(){ 
            $(this).on('change', function(){
                var fileName = '';
                fileName =  $(this).val().split( '\\' ).pop();
                
                if(fileName){
                    $(this).next('label').text(fileName);
                }
            });
        });
    }

    inputFile();

    /* sweetalert2.js
    * A beautiful and customizable replacement for Javascript's "Alert" */
 
    function sweetAlert(){

        // Show basic message
         $('[data-plugin="sweetAlert"]').on('click', function(){
             swal('The Internet?', 'That thing is still around?');
          });

        // Show success message
        $('[data-plugin="sweetAlert"][data-alert="success"]').on('click', function(){
           swal(   'Good job!',  'You clicked the button!',   'success' );
        });

        // Show error message
        $('[data-plugin="sweetAlert"][data-alert="danger"]').on('click', function(){
         swal(   'Oops...',  'Something went wrong!!',   'error' );
        });
    }
 
    sweetAlert();

    /* TinyMCE
    * A platform independent web-based JavaScript HTML WYSIWYG editor control. */


    function tinyMCE(){ 
        tinymce.init({
            selector: '[data-plugin="tinyMCE"]',
            theme   : "modern",
            skin    : 'light',
            menubar : false,
            plugins : [
                "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                "searchreplace wordcount visualblocks visualchars code fullscreen",
                "insertdatetime media nonbreaking save table contextmenu directionality",
                "emoticons template paste textcolor colorpicker textpattern imagetools"
            ],
            toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        });
    }

    tinyMCE();

    

})( jQuery ); 