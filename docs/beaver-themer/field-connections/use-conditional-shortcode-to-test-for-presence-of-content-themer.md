---
id: use-conditional-shortcode-to-test-for-presence-of-content-themer
title: Use conditional shortcodes to test for presence of content
sidebar_label: Use conditional shortcodes to test for content
---

This is one of the ways you can use conditional shortcodes to test various aspects field connection shortcodes. See [the Overview article](/beaver-themer/field-connections/field-connection-shortcodes-overview-themer.md) for general information.

You can use field connection shortcode to do a boolean test for the presence or absence of content returned by a regular field connection shortcode. It works for any type of field connection as long as it can be used as a shortcode – in other words, any field connection that returns a text string. It works with built-in WordPress field connections, WordPress custom fields, Advanced Custom Fields (ACF), and Pods custom fields.

Here's the basic logic when the conditional shortcode is used this way:

> If `<some field connection shortcode>` returns content, then `<display this text>` else `<display some other text>`

## Syntax

### If

```markup
[wpbb-if some-field-connection-shortcode]
    My custom text because the field has content.
[/wpbb-if]
```

Notice `wpbb-if` has a beginning and end tag.

### If not

To add the logical operator **NOT**, use the exclamation mark `!`, as shown in this code. The following syntax is paraphrased as "If some-field-connection-shortcode doesn't return any content, display the text 'Field connection content doesn't exist."

```markup
[wpbb-if !some-field-connection-shortcode]
    Field connection content doesn't exist.
[/wpbb-if]
```

### If-else

The *if-else* statement has this syntax:

```markup
[wpbb-if some-field-connection-shortcode]
    my-custom-text
    [wpbb-else]
    my-other-custom-text
[/wpbb-if]
```

Notice `wpbb-else` doesn't have an end tag.

## Example 1: Label for custom field

You're using shortcode to display the value of an optional custom field, such as Hobbies, and you want to add a label before the value, such as:

> Hobbies: chainsawing, weight lifting

If the custom field has no content, you don't want the label "Hobbies:" to appear, so you can wrap your text with conditional shortcode so it displays only when a custom field has content. In this example code, you can see that the ACF field connection shortcode appears both in the conditional shortcode and in the custom text area, which also includes HTML markup and the label:

```markup
[wpbb-if post:pods_display field='hobbies']
    <p>Hobbies: [wpbb post:acf field='hobbies']</p>
[/wpbb-if]
```

## Example 2: Markup for an optional field

If you include markup for a field, you probably only want that markup to appear when the field has something to display. The Posts module's layout code uses this conditional shortcode to display the featured image:

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
[/wpbb-if]
```

In this example, you'd have to write a CSS rule for the `.no-featured-image` class to position the text properly.

## Example 3: Display an icon if Pods custom field has content

Suppose you have a Pods custom field to indicate that a location is accessible, and when it is accessible you want to display a Font Awesome icon of a wheelchair. Because you can only test whether the shortcode for a Pods custom field returns Text, you can't use a Yes-No field type to indicate accessibility. The Yes-No field doesn't return text.

One workaround is to use a Text field and enter directions to type Yes when the location is accessible and leave the field blank when it isn't, such as the example in this screenshot:

![](/img/use-conditional-shortcode-to-test-for-presence-of-content-themer-0c6312a3.png)

You can then test for the presence or absence of content in that field and insert an icon if there is content. Note that from the point of view of the conditional test, the field can contain any text, not just yes, to be true. However, this is the only option you have in Beaver Themer to convert a Pods custom field to an icon only on the condition that there is accessibility. Here's the code, which could be inserted into an HTML module.

```markup
<div class="accessible-icon">
    [wpbb-if post:pods_display field='wheelchair_accessible']<i class="fas fa-wheelchair fa-2x"></i>
    [/wpbb-if]
</div>
```

This code says if the shortcode for the `wheelchair_accessible` field has content, insert an `<i>` tag for the Font Awesome Solid wheel hair icon at size 2x. See the [Font Awesome documentation](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) for information about how to insert and style icons in HTML.

For another Pods example, see [this tutorial for a Pods example](/beaver-themer/field-connections/connections-to-pods-custom-fields/build-this-display-a-pods-custom-field-and-separator-only-when-theres-content.md).

##  Example 4: Troubleshoot field connection problems

The Boolean *if-else* statement is useful for troubleshooting field connection problems. See these articles for concrete examples with code:

  * [Hide a row or module when a field connection is empty](/beaver-themer/developer/hide-row-or-module-when-field-connection-is-empty-themer.md)
  * [Build this: Display a Pods custom field and separator only when there's content](/beaver-themer/field-connections/connections-to-pods-custom-fields/build-this-display-a-pods-custom-field-and-separator-only-when-theres-content.md)
