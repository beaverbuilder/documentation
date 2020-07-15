---
id: cmdg-17-partial-refresh-reference
title: 'CMDG 17: Partial refresh reference'
sidebar_label: 'CMDG 17: Partial refresh reference'
---

Current versions of Beaver Builder plugin employ Partial Refresh for layout,
in which only the row, column, or module that you are currently editing is
updated when you click Save (or a preview refresh is triggered). However,
custom module developers need to enable this for their modules and be sure
that they are compatible for partial refresh to work. Custom modules that do
not support partial refresh will trigger a full layout refresh when edited.

### Partial refresh compatibility

:::note **Note**
If your module doesn't use JavaScript, you can skip this section and
enable partial refresh.
:::

To make your custom modules compatible with partial refresh, any JavaScript
written for them must only run for the current instance that is being edited.
If it doesn't, then when your module is refreshed, the JavaScript will run for
all instances on the page (if any are present) potentially causing things to
break.

Here's an example of JavaScript code that is NOT partial-refresh compatible
and runs for all instances on the page.

```js
$( '.my-module-class' ).each( function(){
	// Do something to each module on the page.
} );
```

As you can see, that code will run the same function for each module on the
page, even when just a single module is updated.

Here's an example of JavaScript code that **is** partial-refresh compatible
and only runs for an individual instance. **Note:** this should be in
_frontend.js.php_.

```js
$( '.fl-node-<?php echo $id; ?>' ).css( 'background', '#ffffff' );
```

That code will only run for a module with a specific ID.

At this point, you may be wondering how you can accomplish this without having
to use _frontend.js.php_ for everything. We typically do that by using
_frontend.js.php_ for the instance code and _frontend.js_ to house the bulk of
the logic. Here's an example:

In _frontend.js.php_ , we instantiate the module's JavaScript logic for the
individual instance. Any number of parameters can be passed here. We're just
using `id` for this module.

```js
(function($) {
  $(function() {
    new FLBuilderAccordion({
      id: '<?php echo $id ?>'
    });
  });
})(jQuery);
```

In _frontend.js_ we build the `FLBuilderAccordion` object, which has all of
the module's JavaScript logic and uses the parameters passed in <
_frontend.js.php_ (some code omitted for brevity).

```js
(function($) {

  FLBuilderAccordion = function( settings ) {
    this.settings 	= settings;
    this.nodeClass  = '.fl-node-' + settings.id;
    this._init();
  };

  FLBuilderAccordion.prototype = {

    _init: function() {
      $( this.nodeClass + ' .fl-accordion-button' ).click( $.proxy( this._buttonClick, this ) );
    },

    _buttonClick: function( e ) {
      ...
    },

    _slideUpComplete: function() {
      ...
    },

    _slideDownComplete: function() {
      ...
    }
  };

})(jQuery);
```

### Enable partial refresh

Once your module is compatible, enabling partial refresh is easy. Just set the
partial_refresh parameter in your module's constructor to true as shown in the
example below and partial refresh will be enabled for your module.

```php
class MyModuleClass extends FLBuilderModule {

  public function __construct()
  {
    parent::__construct(array(
      'partial_refresh' => true // Set this to true to enable partial refresh.
    ));
  }
}
```
