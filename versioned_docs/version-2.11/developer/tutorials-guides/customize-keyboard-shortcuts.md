---
id: customize-keyboard-shortcuts
title: Customize keyboard shortcuts
sidebar_label: Customize keyboard shortcuts
---

The [keyboard shortcut system](user-interface/tools-menu.md#keyboard-shortcuts) in the Beaver Builder editor offers many keyboard shortcuts, and they are customizable. You can remove keyboard
shortcuts, modify them, or register your own.

:::info
Some browsers or operating systems may override particular keyboard
combinations with actions of their own. Be sure to test! Also, if your
keyboard shortcut does override a browser or operating system's keyboard
shortcut, keep in mind that you may have some unhappy users.
:::

## Find the keys of currently registered keyboard shortcuts

Each keyboard shortcut has both a key (the string you use to access an item in
an associative array, which we refer to as the dictionary) and a `keyCode`
(the particular key or key combination that is associated with the action).

To remove or modify a keyboard shortcut, you'll need to find its key in the
`$shortcuts` dictionary. Here's how to find it. As an example, we'll use the
_Open Global Settings_ shortcut.

### To find the keys for currently registered keyboard shortcuts

1. Open the Beaver Builder editor.
2. Open the browser’s JavaScript console.
   The procedure to open the console depends on your browser. Here are
   [instructions for Google Chrome](https://developers.google.com/web/tools/chrome-devtools/console/).

3. Type `FLBuilderConfig.keyboardShortcuts` into the console and press _Enter_.
   In Google Chrome, you'd type this command directly into the console, as shown
   in the following screenshot.
   ![](/img/dev-keyboard-shortcuts-1.png)

4. If necessary, expand the `showModules` line, as shown in this screenshot from Google Chrome.
   ![](/img/dev-keyboard-shortcuts-2.png)
   This produces a list of all of the currently registered keyboard shortcuts.

5. Find the command you want to modify and make a note of its key, which is the first item in each row. In this example, it's `showGlobalSettings.`
   ![](/img/dev-keyboard-shortcuts-3.png)

6. If you plan to modify the shortcut, inspect the `keyCode` values for the entire set of shortcuts to make sure that the key combination you want to use isn't already registered for another keyboard shortcut.

:::info
The word `mod` in some of the `keyCode` values is a special token
used to signify the current platform’s standard modifier key. On <i class="fab fa-windows"></i> Windows,
`mod` will be translated to <kbd>Ctrl</kbd> for the control key, while on <i class="fab fa-apple"></i> macOS, mod
will be translated to the <kbd>command &#8984;</kbd> key.
:::

### Keyboard shortcut list

- **showModules:** <kbd>j</kbd>
- **showRows:** <kbd>k</kbd>
- **showTemplates:** <kbd>l</kbd>
- **showSaved:** <kbd>;</kbd>
- **saveTemplate:** <kbd>mod</kbd> + <kbd>j</kbd>
- **previewLayout:** <kbd>p</kbd>
- **responsiveEditing:** <kbd>r</kbd>
- **showGlobalSettings:** <kbd>mod</kbd> + <kbd>u</kbd>
- **showLayoutSettings:** <kbd>mod</kbd> + <kbd>y</kbd>
- **toggleUISkin:** <kbd>o</kbd>
- **showSearch:** <kbd>mod</kbd> + <kbd>i</kbd>
- **showSavedMessage:** <kbd>mod</kbd> + <kbd>s</kbd>
- **publishAndRemain:** <kbd>mod</kbd> + <kbd>p</kbd>
- **cancelTask:** <kbd>esc</kbd>
- **undo:** <kbd>mod</kbd> + <kbd>z</kbd>
- **redo:** <kbd>shift</kbd> + <kbd>mod</kbd> + <kbd>z</kbd>

## The fl_builder_keyboard_shortcuts filter

The `fl_builder_keyboard_shortcuts` filter is used to remove or modify
existing keyboard shortcuts or to register new ones. It expects one argument –
the `$shortcuts` array – which is a dictionary of all the registered
shortcuts.

:::tip **Tip**
Since this is a filter, not an action, always return the `$shorcuts`
variable at the end of your filter function, as shown in the code examples
below.
:::

## Remove a keyboard shortcut

Remove any keyboard by unsetting its key. The following code removes the _Go
to Previous Tab_ keyboard shortcut.

```php
add_filter("fl_builder_keyboard_shortcuts", function ($shortcuts) {
  unset($shortcuts["goToPrevTab"]);
  return $shortcuts;
});
```

This will remove the _Go to previous tab_ command from Beaver Builder and also
remove it from the list displayed at **Tools > Keyboard shortcuts**.

To remove another keyboard shortcut, replace `goToPrevTab` with the key of the
shortcut you want to remove.

## Modify a keyboard shortcut

You can change the key combination that a shortcut uses by using the
`fl_builder_keyboard_shortcuts` filter with the key value of that particular
shortcut entry.

### To change the keyboard shortcut

1. Add the following code to the _functions.php_ file in your child theme and modify it as described in the following steps.

```php
add_filter("fl_builder_keyboard_shortcuts", function ($shortcuts) {
  $shortcuts["showGlobalSettings"]["keyCode"] = "mod+b";
  return $shortcuts;
});
```

2. In the `$shortcuts` parameter, change the key to the one you want to modify.
3. Set the new `keyCode` value that you want to use for the keyboard shortcut. You can use the following keys or key combinations.

### Options for `keyCode` values

- A single lowercase letter, symbol, or special key
- mod+ a single lowercase letter, symbol, or special key

**Special keys** use the following values: `backspace`, `tab`, `enter`,
`return`, `capslock`, `esc`, `escape`, `space`, `pageup`, `pagedown`, `end`,
`home`, `left`, `up`, `right`, `down`, `ins`, `del`, `plus`.

## Register a new keyboard shortcut

You can use the `fl_builder_keyboard_shortcuts` filter to create an entirely
new keyboard shortcut. Virtually anything that you can accomplish in
JavaScript can be registered as a shortcut – you just need a function or
object method in your JavaScript to fire when your shortcut is invoked.

### To register a new keyboard shortcut

1. In your child theme's _functions.php_ file, add a new entry with a key for your keyboard shortcut and assign it a dictionary array containing a `label` and a `keyCode` item.

:::tip **Tip**
Make a note of the key string you set for your action
(doMyCustomShortcut in this case) because you’ll need it to handle the event
firing in a later step.
:::

```php
add_filter("fl_builder_keyboard_shortcuts", function ($shortcuts) {
  $shortcuts["doMyCustomShortcut"] = [
    "label" => __("Do My Custom Action", "my-plugin"),
    "keyCode" => "mod+t",
  ];
  return $shortcuts;
});
```

2. Open a page for editing in Beaver Builder or reload a page that's open and check to see if the shortcut is displayed in the list at **Tools > Keyboard Shortcuts**.
3. Enqueue your custom JavaScript to run when Beaver Builder is active, using the following code.

```php
add_action("wp_enqueue_scripts", function () {
  // Check if Beaver Builder is active
  if (class_exists("FLBuilderModel") && FLBuilderModel::is_builder_active()) {
    /**
     * Enqueue your custom JavaScript file
     *
     * Be sure to use the appropriate url reference function for whether your
     * code is contained in a custom plugin or theme.
     *
     * Include fl-builder-min as a dependency for your script to ensure
     * Beaver Builder as well as jQuery are available when your script runs.
     */
    wp_enqueue_script(
      "my-builder-script",
      get_stylesheet_directory_uri() . "/js/my-builder-script.js",
      ["fl-builder-min"]
    );
  }
});
```

4. Inside your JavaScript file, create a function that will fire when your shortcut is triggered and register the script with Beaver Builder, using the key from the first step.

```php
(function( $ ) {
  // Create a function to fire when your custom shortcut is triggered
  function doMyCustomShorcut() {
    // Work done here
    alert( 'Hey, it worked!' );
  }
  $(function() { // Once the document is ready
    // Register a hook listener using the key that you registered
    // your shortcut with along with the function it should fire.
    FLBuilder.addHook('doMyCustomShortcut', doMyCustomShorcut );
  });
})( jQuery );
```

5. Reload the Beaver Builder editing page in your browser and try out your new keyboard shortcut!
