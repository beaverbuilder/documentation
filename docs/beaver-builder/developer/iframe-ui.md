---
id: iframe-ui
title: Beaver Builder Responsive iFrame UI
sidebar_label: Responsive iFrame UI
description: The purpose of this article is to explain what the responsive iframe UI is, how it works, and how it can be extended and integrated.
---

The purpose of this article is to explain what the responsive iframe UI is, how it works, and how it can be extended and integrated.

## Introduction

Responsive iFrame User Interface (UI) displays the layout that you are editing for accurate previews on a variety of devices. The interface has been updated so that you can preview the layout at any size you choose while you are editing.

The iframe UI works by using two "windows." One is the browser window you use to view the builder, also referred to as the parent window. The other is an iframe window used to render the page content for you to edit.

### What's in the Parent Window?

The parent window contains everything needed for the iframe to load and function properly. Once loaded, the iframe also renders the builder's UI. This includes the majority of the UI including the toolbar, menu, panels, and settings. The parent window loads everything, but the iframe controls the majority of the execution.

### What's in the iFrame?

The iframe currently contains the entire page and the builder. When the builder loads, if it is in an iframe, its UI will be displayed in the parent window rather than in the window in which it is loaded. The overlays are the only UI elements rendered within the iframe.

## How the iFrame UI Loads

### Loading the UI

If the `fl_builder_ui` `GET` variable is present, the iframe UI will intercept the `template_redirect` hook and render a custom HTML document with only the necessary information to render the iframe.

The iframe UI works by intercepting the `template_redirect` hook and rendering a custom HTML document with only what's needed to render the iframe when the `fl_builder_ui` `GET` variable is present.

As the iframe loads the same page, the builder knows to load the iframe's content rather than the iframe's parent by including the `fl_builder_ui_iframe` `GET` variable. This allows the builder to send AJAX requests from both the parent and the child because the URL is the same.

### Loading Scripts

The majority of scripts are loaded within the iframe, allowing the builder to continue working in the legacy UI. In contrast to legacy, the UI renders itself in the parent window once loaded instead of the current one.

Some scripts are loaded in the parent window as they work on the current window and cannot be adjusted through the config to render and work on the parent window. The media library, for example, must render in the parent in order for it to span the width of the page with smaller devices, which we cannot do with the iframe.

:::info
See `FLBuilderUIIFrame::enqueue_scripts` in `classes/fl-builder-ui-iframe.php` for more information on script loading in the parent window. Script loading in the iframe remains the same.
:::

### Loading Styles

In order to provide a consistent UI for the iframe and the parent window, styles are loaded in both. The reason for this is that the styles for the iframe (mainly overlays) and the parent window UI (toolbar, settings, etc.) are all combined within a few files and plugins, if you have Beaver Themer installed.

It is currently necessary to load those stylesheets in both the iframe and parent window so that they can be applied to elements rendered in both. Third-party developers may also encounter this issue since we recommend enqueuing builder assets using `wp_enqueue_scripts` and checking `FLBuilderModel::is_builder_active`.

:::info
The future could bring new hooks for enqueuing assets either in the iframe or parent window and splitting Beaver Builder styles into separate files.
:::

## Developing in the IFrame UI

### Accessing the Parent Window

```js
// Within the iframe
const win = window.parent

// Within the parent window
const win = window
```

Since the builder's iframe is loaded on the same domain, we do not have to use `postMessage` to communicate. We can access the parent window from the iframe using `parent.window`, which enables you to execute scripts attached to the parent window or manipulate its DOM with native functions.

Despite not being in an iframe, `parent.window` is still set. In that legacy context, it'll resolve to the only window that's available, the current window, and your logic should still function as expected. For example, if you called `parent.window.document.getElementById` in your script to access a UI element in the parent window, it would still access that same UI element in the legacy UI.

### Accessing the IFrame Window

```js
// Within the iframe
const win = window

// Within the parent window
const win = FLBuilder.UIIFrame.getIFrameWindow()
```

When executing code within the parent window, you can access the iframe's window object by using the `FLBuilder.UIIFrame.getIFrameWindow()` helper function. That will return the iframe's window object or the current window object if the legacy UI is enabled.

In an iframe, you can access the `window` object or call any globals directly if you need something on the iframe window. If you use the legacy user interface, that will fall back to the current window.

### Selecting Elements with jQuery

```js
// Accessing parent UI from within the iframe
$( '.fl-builder-bar', parent.window.document )
$( 'body', parent.window.document ).find( '.fl-builder-bar' )

// Accessing iframe UI from within the parent
var win = FLBuilder.UIIFrame.getIFrameWindow();
$( '.fl-row', win.document )
$( 'body', win.document ).find( '.something' )
```

Selecting elements with jQuery works the same, however, there are cases when you need to specify which document you are checking in. jQuery's select function has a second parameter that's not often used (shown above) that lets you specify the document you'd like it to check in.

That matters because only calling `$( '.fl-builder-bar' )` won't select it if you're selecting from a script within the iframe. That element is rendered in the parent window, so to select it, you need to tell jQuery to look there. Both of the examples above will also fallback to the same window object in the legacy UI.

When the builder is loaded, jQuery's select function is modified at runtime to also check in the parent window. That will help catch most of the time you forget to specify which document to check but it won't catch everything. The rule of thumb going forward is to know what window you're executing in and to specify the document if you're accessing something outside of that window.

### Triggering Events with jQuery

```js
// Triggering parent events within the iframe
parent.window.jQuery( '.fl-button' ).trigger( 'click' )

// Triggering iframe events within the parent
var win = FLBuilder.UIIFrame.getIFrameWindow();
win.jQuery( '.fl-row' ).trigger( 'mouseenter' )
```

Triggering events across windows using jQuery requires you to use that window's copy of jQuery to select the element. That's because jQuery internally stores event data that won't be available if you trigger using the wrong copy. Triggering in the same window requires no changes.

### Working with TinyMCE

```js
// When working with settings forms in the iframe
const t = parent.window.tinymce

// When working with inline editing in the iframe
const t = tinymce
```

TinyMCE is one of the scripts that's loaded in both the iframe and parent window. This is because TinyMCE needs to load in the window that it renders. The parent window's copy of TinyMCE is used to work with settings forms since that's where they render. The iframe's copy is used to work with inline editing since that is rendered in the iframe.

### Enqueuing in the Parent Window

```php
add_action( 'fl_builder_ui_enqueue_scripts', function() {
    // Enqueue builder UI assets.
} );
```

Even though we lock down script loading in the parent window, we still allow scripts to be explicitly enqueued using the `fl_builder_ui_enqueue_scripts` action. Most scripts should still be enqueued in the `FLBuilder` class for backwards compatibility with the legacy UI until we decide to sunset that.

### Disabling the IFrame UI

The iframe UI can be disabled with a filter or by going to **Admin > Settings > Beaver Builder > Advanced** and toggling the **Responsive IFrame UI** setting.

```php
add_filter( 'fl_builder_iframe_ui_enabled', '__return_false' );
```


## Migrating Existing Code

In most cases, existing code should continue to work in the iFrame UI. However, there are some cases where it will need to be adjusted.

### Selecting Elements with jQuery

The most common issue is selecting elements with jQuery. If you have been selecting an element that is now located in the parent window, your code will need to be updated to target it there. If the element is in the iframe window, your code can stay the same.

```js
// OLD WAY - Only targets elements in the iframe.
$( '.my-element' )

// NEW WAY - Targets elements in the parent window.
$( '.my-element', parent.window.document )
```

### Loading Scripts

The majority of scripts are loaded within the iframe. However, there are some cases where you need to load a script in the parent window. That can be done by enqueuing on the `fl_builder_ui_enqueue_scripts` action.

Additionally, there may be times where a script reference needs to be shared across windows. TinyMCE is a great example of this. We only want to load it in one place but we need the global variable available to both windows. Below are examples of passing global variables between windows.

```js
// Passing from the iframe to the parent window.
window.parent.FooBar = FooBar

// Passing from the parent to the iframe window.
var win = FLBuilder.UIIFrame.getIFrameWindow()
win.FooBar = FooBar
```

## Frontend Code Reference

* `FLBuilder.UIIFrame.isEnabled`
  Returns `TRUE` if the iFrame UI is enabled. The legacy UI is enabled if this returns `FALSE`.

* `FLBuilder.UIIFrame.isUIWindow`
  Returns `TRUE` if the script is currently executing in the parent window that renders the builder's UI.

* `FLBuilder.UIIFrame.isIFrameWindow`
  Returns `TRUE` if the script is currently executing in the iframe window.

* `FLBuilder.UIIFrame.getIFrameWindow`
  Returns the iframe's window object. Falls back to the current window for the legacy UI.

## Backend Code Reference

* `FLBuilderUIIFrame::is_enabled`
  Returns `TRUE` if the iFrame UI is enabled. The legacy UI is enabled if this returns `FALSE`.

* `FLBuilderUIIFrame::is_ui_request`
  Returns `TRUE` if the current request is for the iframe's parent window.

* `FLBuilderUIIFrame::is_iframe_request`  
  Returns `TRUE` if the current request is for what should load in the iframe.
