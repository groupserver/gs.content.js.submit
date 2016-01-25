'use strict';jQuery.noConflict();
function GSDisableSubmit(){function b(a){a=a=null;a=jQuery(this);a=a.find(":submit");a.each(function(){var a=null,a=jQuery(this);a.addClass("hiddenType").css("display","none");a.before(c)});return!0}var c='<button class="processing btn" disabled="disabled">Processing…</button>';return{init:function(){var a=null;jQuery("form").submit(b);a=jQuery("form input[type=submit]");null!==a&&("undefined"!==typeof a&&"undefined"!==typeof a.button)&&a.button().addClass("btn")}}}
jQuery(window).load(function(){var b=null,b=GSDisableSubmit();b.init()});
