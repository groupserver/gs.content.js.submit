jQuery.noConflict();
var GSDisableSubmit = function () {

    // Private variables
    // The disabled  button that says "Processing", followed by
    //    ellipsis.
    var newButtonText = '<button class="processing btn" '+
                          'disabled="disabled">Processing\u2026</button>';
    
    // Private methods
    function handle_submit(event) {
        var form = null, buttons = null;
        form = jQuery(this);
        buttons = form.find(':submit');
        buttons.each(function(){disable_button(this);});
        return true;
    }
    function disable_button(submitButton) {
        // --=mpj17=-- If I disable the button the form is not 
        //      processed by zope.formlib, as disabled buttons are
        //      "unsuccessful" by definition, so they are not POSTed
        //      to Zope as part of the form data. So, I *hide* the
        //      button (using CSS) and add a disabled button in its
        //      place.
        var s = null, newButton = null;
        s = jQuery(submitButton);
        s.addClass('hiddenType').css('display', 'none');

        newButton = s.before(newButtonText);
        
        return true;
    }
    // Public methods and properties
    return {
        init: function ( ) {        
            jQuery('form').submit(handle_submit);
        }
    };
}(); // GSDisableSubmit

jQuery(window).load(GSDisableSubmit.init);
