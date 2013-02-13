Introduction
============

:Issue: Someone can perform three possible actions with a GUI widget:
        select, edit, and execute. That is why the mouse for the Xerox Alto
        had three buttons.

:Problem: In his wisdom, Steve Jobs put one button on the mouse for the
          Macintosh. Apparently he did not want people to become confused.

:Hack One: The edit button was moved to the keyboard (you hold down ⌘ and
           click).

:Hack Two: The execute "button" was triggered if the user clicked twice on
           a widget. Clicking once was interpreted as select.

:New Problem: People are now confused between execute (two clicks) and
              select (one click). Especially with buttons. So they click
              twice on all buttons (same as they would for an icon). This
              causes a form to be posted twice, causing the state change
              (posting a message, for example) to occur twice.

:Solution: Disable the ``<button>`` element if someone clicks on it.

:Final Problem: Zope_ formlib_ interprets disabled buttons as
                "unsuccessful". So if you disable the button when someone
                clicks on it then the form will not be processed. (This is
                understandable, as that is what the standard says to do)

Presented here is the workaround for all the above problems. When the user
clicks on a button it is *hidden*. Because the button is hidden the second
click (if one was made) never reaches its target. However, because the
button is just hidden, the user cannot see it, but the formlib_ code *does*
see it. In place of the hidden button, a new button is added. This new
button is disabled, and contains the text ``Processing…``, which provides
some feedback.

Resource
========

This product provides a JavaScript module as a Zope_ `browser
resource`_. Any Zope or Plone_ project should be able to use this product
as-is by placing the following line in a page template::

  <script type="text/javascript" 
          src="/++resource++gs-content-js-submit-20130113.js" 
          defer="true"> </script>     

Users of other systems are invited to copy the file
``gs/content/js/submit/browser/javascript/submit.js`` out of this product.
The JavaScript will bind to the ``submit`` event for all forms, once the
window has loaded.

Resources
=========

- Code repository: https://source.iopen.net/groupserver/gs.content.js.submit/
- Questions and comments to http://groupserver.org/groups/development/
- Report bugs at https://redmine.iopen.net/projects/groupserver/

.. _GroupServer: http://groupserver.org/
.. _Zope: http://zope.org/
.. _formlib: http://docs.zope.org/zope.formlib/
.. _browser resource: http://docs.zope.org/zope.browserresource/
.. _Plone: http://plone.org
.. _jQuery: http://jquery.com/

.. LocalWords:  jQuery UI Plone
