---
id: use-conditional-shortcode-to-test-for-presence-of-content-themer
title: Use conditional shortcodes to test for the presence of content
sidebar_label: Use conditional shortcodes to test for content
---

This article describes one use of Themer's conditional shortcode: to test for the presence or absence of a value returned by a field connection shortcode, with the ability to specify custom text to be displayed based on the result. Follow these links for overview of [field connection shortcodes](/beaver-themer/field-connections/field-connection-shortcodes-overview-themer.md) and other uses of [conditional shortcodes](/beaver-themer/field-connections/conditional-shortcodes-for-field-connections-overview-themer.md).

The use of conditional shortcode to test for the presence of content works for [any Themer field connection shortcode](/beaver-themer/field-connections/field-connection-shortcode-index-themer.md), connecting to standard WordPress fields, third-party plugin custom fields (such as [WooCommerce](/beaver-themer/integrations/woocommerce/woocommerce-field-connection-shortcode-index.md)), WordPress custom fields, Advanced Custom Fields (ACF), and Pods custom fields. 

Here's the basic logic when the conditional shortcode is used to test for the presence of content:

> If `<some field connection shortcode>` returns a value, then `<display this custom text>` else `<display some other custom text>`

The custom text that you display can itself contain field connection shortcodes, as the examples below show.

## Syntax

First, we'll show you the conditional shortcode syntax to test for the presence of a value returned by a field connection shortcode, then we'll provide examples in the sections below.

### If

```markup
[wpbb-if some-field-connection-shortcode]
    Display this custom content.
[/wpbb-if]
```

Notice that `wpbb-if` has a beginning and end tag.

### If not

The exclamation mark `!` functions as the logical operator **NOT**: 

```markup
[wpbb-if !some-field-connection-shortcode]
    There are no data available.
[/wpbb-if]
```

### If-else

```markup
[wpbb-if some-field-connection-shortcode]
    Display my custom text.
  [wpbb-else]
    Display my other custom text
[/wpbb-if]
```

:::note **Note**
`[wpbb-else]` doesn't have an end tag.
:::

## Example 1: Display a label for custom field values only if the field has content

Suppose you want to display a contributor's hobbies on each post, like this:

> Hobbies: chainsawing, weight lifting

To accomplish this, you've created an optional ACF custom field named `hobbies` and you're using a Themer field connection shortcode to display the value of this field so that you can display both the label "Hobbies: " plus the contents of the ACF field.

However, if the field has no content, you don't want to display the label "Hobbies: " either. In this case, you can use conditional shortcode so it displays the label only when the custom field has content. 

In this example code, you can see that the ACF field connection shortcode appears both in the conditional shortcode and in the custom text area, which also includes HTML markup and the "Hobbies: " label:

```markup
[wpbb-if post:acf type='text' field='hobbies']
    <p>Hobbies: [wpbb post:acf type='text' field='hobbies']</p>
[/wpbb-if]
```
In natural language, this conditional means "if the ACF `hobbies` field has content, display the text 'Hobbies:' plus the value of the field." If the conditional shortcode evaluates to `false`, the custom text doesn't display.

## Example 2: Markup for an optional field

If you include markup for a field, you probably only want that markup to be used when the field has something to display. The Posts module's layout code uses this conditional shortcode to display the featured image:

```markup
[wpbb-if post:featured_image]
    <div class="fl-post-image">
        [wpbb post:featured_image size="large" display="tag" linked="yes"]
    </div>
[/wpbb-if]
```

You could add an *else* clause to the featured image code to display the text "No featured image" when one doesn't exist:

```markup
[wpbb-if post:featured_image]
    <div class="fl-post-image">
        [wpbb post:featured_image size="large" display="tag" linked="yes"]
    </div>
    [wpbb-else]
        <div class="no-featured-image">
            No featured image.
        </div>
[/wpbb-if]
```

In this example, you might need to write a CSS rule for the `no-featured-image` class to position the text properly.

:::note **Note**
The reason there is a field connection shortcode for an image is that the field  contains the image's URL as its value. The `[wpbb post:featured_image]` shortcode has a special status, in that the URL is automatically embedded in an HTML `<img>` tag. If you have a custom image field, the field's URL value must be embedded in the `<src>` attribute of an `<img>` tag, like the following example for an ACF Image field:

```markup
[wpbb-if archive:acf type='image' name='extra_image']
<div>
	<img src="[wpbb archive:acf type='image' name='extra_image' image_size='medium']">
</div>
[/wpbb-if]
```
:::

## Example 3: Display an icon if a Pods custom field has content

Suppose you have a Pods custom field to indicate that a location is accessible, and when it is accessible you want to display a Font Awesome icon of a wheelchair. Because you can only test whether the shortcode for a Pods custom field returns Text, you can't use a Yes-No field type to indicate accessibility. The Yes-No field doesn't return text.

One workaround is to use a Text field and enter directions to type <kbd>Yes</kbd> when the location is accessible and leave the field blank when it isn't, such as the example in this screenshot:

![](/img/use-conditional-shortcode-to-test-for-presence-of-content-themer-0c6312a3.png)

You can then test for the presence or absence of content in that field and insert an icon if there is content. Note that from the point of view of the conditional test, the field can contain any text, not just yes, to be true. However, this is the only option you have in Beaver Themer to convert a Pods custom field to an icon only on the condition that there is accessibility. Here's the code, which could be inserted into an HTML module.

```markup
<div class="accessible-icon">
    [wpbb-if post:pods_display field='wheelchair_accessible']<i class="fas fa-wheelchair fa-2x"></i>
    [/wpbb-if]
</div>
```

This code says if the shortcode for the `wheelchair_accessible` field has content, insert an `<i>` tag for the Font Awesome Solid wheel hair icon at size 2x. See the [Font Awesome documentation](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) for information about how to insert and style icons in HTML.

For another Pods example, see [this tutorial](/beaver-themer/field-connections/connections-to-pods-custom-fields/build-this-display-a-pods-custom-field-and-separator-only-when-theres-content.md).

##  Example 4: Troubleshoot field connection problems

Here are a couple of related articles that use the Boolean *if-else* conditional shortcode.

  * [Hide a row or module when a field connection is empty](/beaver-themer/developer/hide-row-or-module-when-field-connection-is-empty-themer.md)  
  Simply not displaying text can leave a hole in your layout, so this article has some developer code to remove the entire row or module when there's no content.
  * [Troubleshoot field connection shortcodes](/beaver-themer/field-connections/troubleshoot-field-connection-shortcodes-themer.md)  
  You can troubleshoot field connection shortcodes when the site is under development by using an HTML module to check for the presence of content in a field connection shortcode and display the value.
