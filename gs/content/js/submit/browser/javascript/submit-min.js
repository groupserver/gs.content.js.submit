jQuery.noConflict();var GSDisableSubmit=function(){var b='<button class="processing btn" disabled="disabled">Processing\u2026</button>';
function c(f){var e=null,d=null;e=jQuery(this);d=e.find(":submit");d.each(function(){a(this)
});return true}function a(d){var f=null,e=null;f=jQuery(d);f.addClass("hiddenType").css("display","none");
e=f.before(b);return true}return{init:function(){jQuery("form").submit(c);jQuery("form input[type=submit]").button().addClass("btn")
}}}();jQuery(window).load(GSDisableSubmit.init);