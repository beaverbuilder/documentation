---
id: conditional
title: Conditional Shortcode Examples
sidebar_label: Conditional Shortcodes
description: The examples in this article demonstrates how to use conditional field connections for standard WordPress fields, custom WordPress fields and Advanced Custom Fields.
---

The examples in this article demonstrates how to use conditional field connections for standard WordPress fields, custom WordPress fields and Advanced Custom Fields.

## If `[wpbb-if]`

Below are some examples that showcase the practical use of the `[wpbb-if]` shortcode:

### Check for the existence of a featured image.

In this example, we are verifying whether a post contains a featured image or not. When the statement evaluates to `TRUE`, the post's featured image will be displayed. However, if the statement evaluates to `FALSE`, no image will be shown for the post.

```markup
[wpbb-if post:featured_image]

  <div class="fl-post-image">
  
    [wpbb post:featured_image size="large" display="tag" linked="yes"]

  </div>

[/wpbb-if]
```

### Display content based on User Role

In this example, the [User Logged In](../wordpress-data.md#user-logged-in) field connection is utilized to show content for any user assigned to the administrator role.

:::tip
You can replace the administrator role with any other WordPress user role.
:::

```markup
[wpbb-if site:logged_in role='administrator']

  <h3>This text will only be visible to users assigned to the administrator role.</h3>

[/wpbb-if]
```

### Display tags for posts that have tags

In this example, the [Post Term List](../wordpress-data.md#post-terms-list) field connection is utilized to display all tags assigned to a post. If a post has no tags, then no tags will be shown.

```markup
[wpbb-if post:terms_list taxonomy='post_tag']

	<p>Tagged in: [wpbb post:terms_list taxonomy='post_tag' html_list='no' display='name' separator=', ' limit='' linked='yes']</p>

[/wpbb-if]
```

## Else `[wpbb-else]`

Below are some examples that showcase the practical use of the Else `[wpbb-else]` shortcode:

### Fallback Featured Image

This example demonstrates the use of the `[wpbb-else]` statement to verify the presence of a featured image in a post. When the statement is `TRUE`, the post's featured image will be shown. If the statement is `FALSE`, the fallback image will be displayed instead.

```markup
[wpbb-if post:featured_image]

  <div class="fl-post-image">
  
    [wpbb post:featured_image size="large" display="tag" linked="yes"]

  </div>

[wpbb-else]

  <div class="fl-post-image">

    <img src="https://my-website.com/images/fallback.jpg" alt="Fallback Image">

  </div>

[/wpbb-if]
```

### Show Content if Field is Empty

This example demonstrates the use of the `[wpbb-else]` statement to verify whether a post's Advanced Custom Field (ACF) field is empty or not. When the statement is `TRUE`, the post's ACF field value will be shown. If the statement is `FALSE`, the fallback content will be displayed instead.

```markup
[wpbb-if post:acf type='text' name='ACF_FIELD_NAME']

    <p>[wpbb post:acf type='text' name='ACF_FIELD_NAME']</p>

[wpbb-else]

    <p>This post's ACF field is empty!</p>
    
[/wpbb-if]
```

## If Not `[wbpp-if !]`

Below are some examples that showcase the practical use of the If Not `[wpbb-if !]` shortcode:

### Test for Absence of Featured Image

This example tests for the absence of a featured image.

```markup
[wpbb-if !post:featured_image]

<div class="fl-post-image">
		
	<img src="[wpbb post:acf type='image' name='FIELD_NAME' image_size='large' display='url']">

</div>

[/wpbb-if]
```

### Test for Absence of Field Value

This example tests for the absence of a post's Advanced Custom Field (ACF) field value. If the statement evaluates to `TRUE`, the text *"This post's FIELD_NAME has no value."* will be displayed. This is a great way to locate posts that are missing a value for a specific field.

```markup
[wpbb-if !post:acf type='image' name='acfimg']

    <h3>This post's FIELD_NAME has no value.</h3>

[/wpbb-if]
```