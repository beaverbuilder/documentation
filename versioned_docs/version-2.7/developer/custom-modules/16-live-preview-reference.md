---
id: 16-live-preview-reference
title: '16: Live preview reference'
sidebar_label: '16: Live preview reference'
slug: live-preview-reference
---

By default, whenever a user changes a module setting, the Beaver Builder
layout will refresh to reflect that change. The default refresh functionality
works in many cases but can be overridden as detailed in the examples below
for an instant preview that doesn't require a refresh.

Additionally, when developing a module, you must write it in a way that you
account for the default settings as modules are rendered as soon as they are
dropped into a layout. As such, your code should never expect that it's
dealing with user submitted settings as it could be dealing with the default
settings.

## Important Preview

You can declare preview rules as important using the `important` param.

```php
'text_color' => array(
  'type'    => 'color',
  'label'   => 'Text Color',
  'preview' => array(
    'type'	    => 'css',
    'selector'  => '.my-selector',
    'property'  => 'color',
    'important' => true,
  ),
),
```

## Attribute Preview

Attribute previews allow you to preview an HTML attribute change on an
element. For example, you can have a text field update the `data-foo`
attribute on an element as shown below.

```php
'my_text' => array(
  'type'    => 'text',
  'label'   => 'My Text',
  'preview' => array(
    'type'	    => 'attribute',
    'attribute' => 'data-foo',
    'selector'  => '.my-selector',
    'format_callback' => '', // Optional JS format callback.
  ),
),
```

## Callback Preview

Callback previews allow you to specify the name of a JavaScript function in
your field config for implementing custom preview logic.

```php
'my_color' => array(
  'type' => 'color',
  'label' => 'My Color',
  'preview' => array(
    'type' => 'callback',
    'callback' => 'myPreviewCallback',
  ),
),
```

Then define your callback function in JavaScript:

```php
function myPreviewCallback( args ) {
  /**
   * Use `args` for any kind of preview logic you can dream of!
   */
  console.log( args )
}
```

## Text Preview

A text preview will insert the text of a field into the element specified by
the selector value. The selector value for all preview types is scoped to your
module and only needs to include the selector of the element you wish to
modify.

```php
'my_text' => array(
  'type'          => 'text',
  'label'         => __('My Text', 'fl-builder'),
  'preview'       => array(
    'type'          => 'text',
    'selector'      => '.fl-example-text'
  )
),
```

## CSS Preview

A CSS preview will use the value of a field combined with the property value
to change the style of the element specified by the selector value. A unit
value (as shown below) must also be specified for style properties such as
font-size or line-height.

```php
'my_font_size' => array(
  'type'          => 'text',
  'label'         => __('My Font Size', 'fl-builder'),
  'description'   => 'px',
  'preview'       => array(
    'type'          => 'css',
    'selector'      => '.fl-example-text',
    'property'      => 'font-size',
    'unit'          => 'px'
  )
),
```

You can also define an array of rules for your CSS previews that allows a
field to affect more than one selector and property.

```php
'my_color' => array(
  'type'          => 'color',
  'label'         => __('My Color', 'fl-builder'),
  'preview'       => array(
    'type'          => 'css',
    'rules'           => array(
      array(
        'selector'     => '.selector-1',
        'property'     => 'color'
      ),
      array(
        'selector'     => '.selector-2',
        'property'     => 'background-color'
      ),   
    )
  )
),
```

## CSS Color Preview

A CSS color preview is similar to the standard CSS preview except that it only
applies to color picker fields. The value of the color picker field will be
combined with the property value to change the style of the element specified
by the selector value.

```php
'my_color' => array(
  'type'         => 'color',
  'label'        => __('My Color', 'fl-builder'),
  'preview'      => array(
    'type'         => 'css',
    'selector'     => '.fl-example-text',
    'property'     => 'color'
  )
),
```

## None

A preview type of none will prevent any preview from occurring when a module
setting field is changed. This preview type can be useful if you wish to code
your own custom preview functionality in the module's _settings.js_ file.

```php
'my_select' => array(
  'type'          => 'select',
  'label'         => __('My Select', 'fl-builder'),
  'default'       => 'option-2',
  'options'       => array(
    'option-1'      => __('Option 1', 'fl-builder'),
    'option-2'      => __('Option 2', 'fl-builder')
  ),
  'preview'      => array(
    'type'         => 'none'
  )
),
```

## JavaScript Events

There are two JavaScript events available to you when working with live
previews that may come in handy:

### fl-builder.layout-rendered  
This event fires on the main builder content wrapper `.fl-builder-content`
every time the layout is rendered or rerendered, typically when saving
settings. It can be used to run additional logic once the render has been
completed.

**Example:**

```js
$( '.fl-builder-content' ).on( 'fl-builder.layout-rendered', myCallbackFunction );
```

### fl-builder.preview-rendered  
This event fires on the main builder content wrapper `.fl-builder-content`
every time the layout _preview_ is rendered or rerendered when editing
settings. It can be used to run additional logic once the render has been
completed.

**Example:**

```js
$( '.fl-builder-content' ).on( 'fl-builder.preview-rendered', myCallbackFunction );
```
