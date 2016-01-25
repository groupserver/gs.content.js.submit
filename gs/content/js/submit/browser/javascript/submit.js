'use strict';
// Disable the command button when submitting a form (debounce).
//
// Copyright © 2013, 2014, 2016 OnlineGroups.net and Contributors.
// All Rights Reserved.
//
// This software is subject to the provisions of the Zope Public License,
// Version 2.1 (ZPL). http://groupserver.org/downloads/license/
//
// THIS SOFTWARE IS PROVIDED "AS IS" AND ANY AND ALL EXPRESS OR IMPLIED
// WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF TITLE, MERCHANTABILITY, AGAINST INFRINGEMENT, AND
// FITNESS FOR A PARTICULAR PURPOSE.
jQuery.noConflict();

function GSDisableSubmit() {
    // Private variables
    // The disabled  button that says "Processing", followed by
    //    ellipsis.
    var newButtonText = '<button class="processing btn" ' +
                          'disabled="disabled">Processing\u2026</button>';

    // Private methods
    function handle_submit(event) {
        var form = null, buttons = null;

        form = jQuery(this);
        buttons = form.find(':submit');
        buttons.each(function() { disable_button(this); });

        return true;
    } // handle_submit

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
    } // disable_button

    // Public methods and properties
    return {
        init: function() {
            var buttons = null;
            jQuery('form').submit(handle_submit);
            buttons = jQuery('form input[type=submit]');
            if ((buttons !== null) &&
                (typeof buttons !== 'undefined') &&
                (typeof buttons.button !== 'undefined')) {
                // Hello, Twitter Bootstrap
                buttons.button().addClass('btn');
            }
        }
    };
} //GSDisableSubmit

jQuery(window).load(function() {
    var s = null;
    s = GSDisableSubmit();
    s.init();
});
