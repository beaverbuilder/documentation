---
id: syntax
title: Field Connection Shortcode Syntax
sidebar_label: Shortcode Syntax
---


The Field Connection shortcode offers a straightforward way to showcase data from custom fields in your layouts. This reference illustrates the syntax for the field connection shortcode.

:::tip
To make things even easier, you can generate the shortcode automatically by using an [HTML module](/beaver-builder/layouts/modules/html) and the Field Connection [Insert](getting-started.md#connect-vs-insert) function.
:::

## Syntax

The Field Connections shortcode syntax varies based on the data type, the location where it is applied, and whether it supports [parameters](#parameters). Below are two examples that demonstrate how the syntax can vary depending on the data's location.

```markup title="Post Title"
[wpbb post:title]
```

```markup title="Archive Title"
[wpbb archive:title]
```

## Conditional Shortcodes

The Field Connections shortcode syntax supports conditionals, allowing you to display dynamic content based on the evaluation of statements as `TRUE` or `FALSE`.

```markup
[wpbb-if some-field-connection]

  If True, show this!

[/wpbb-if]
```

See the [Conditionals](conditionals.md) article for more information.

## Parameters

The Field Connection shortcode syntax provides support for a range of parameters, enabling you to perform various actions, such as modifying the output, displaying content based on the field's returned value, or setting a default value.

### Post ID

The `post_id` parameter lets you specify which post a field connection pulls its data from. By default, every field connection retrieves its value from the current post, the page being viewed, or the current item when used inside a loop or posts module. Adding a `post_id` parameter overrides that behavior, telling the connection to pull from a specific post instead, regardless of the context it renders in.

This parameter works with any field connection, since the post is swapped before the field's value is retrieved. It's useful for displaying a particular post's data, such as its title, featured image, and/or excerpt, on another page. For instance, you could use it to surface a related post or to highlight a featured post you want to draw attention to.

:::info
  The value is the numeric ID of the post you want to target. If you leave it off (or leave it blank), the connection falls back to the current page/post.
:::

The two examples below demonstrate how `post_id` can be applied to different field connections.

* **Example: Post Title** Display the title of post ID 42, regardless of which page the shortcode appears on.  
  
  ```css
  [wpbb post:post_title post_id='42']
  ```

* **Example: Featured Image** Combine `post_id` with a connection's own modifiers to output post 42's featured image at a specific size.
  
  ```css
  [wpbb post:featured_image post_id='42' size='large' display='tag']
  ```

### Modifiers

The modifier parameter is available for field connections that have option support. These options grant you the ability to configure the field connection output according to your preferences. After configuring the options, they are incorporated into the shortcode syntax as modifier parameters. The value you selected for each individual option is then utilized as the corresponding value for the modifier parameter.

The two examples below demonstrate how the modifier parameters can differ for each field connection.

* **Example: Post Date**  
  The post date field connection comes with a parameter named `format`, which allows you to modify the date format returned using PHP `date()`.
  
  ```markup title="Post Date"
  [wpbb post:date format='F Y, J']
  ```

* **Example: Featured Image**  
  The featured image field connection offers parameters like `size`, `display`, `align`, and `linked`, allowing you to adjust the output accordingly.
  
  ```markup title="Featured Image"
  [wpbb post:featured_image size='large' display='tag' align='default' linked='no']
  ```

### Expressions

Expressions extend the functionality of the conditional field connection shortcode through two parameters: `exp` (operator) and `value` (comparison value). This allows you to display content based on the value returned by the field.

```markup
[wpbb-if some-field-connection exp='<operator>' value='<comparison value>']
    
  Display this text when the value test is True.

[wpbb-else]
  
  Display this text when the value test is False.

[/wpbb-if]
```

See the [Expressions](expressions.md) article for more information.

### Defaults

Field Connection shortcodes support default modifier parameters that enable the addition of a default value to a Field Connection shortcode. These two default modifiers have slightly different functions, depending on the default value you’re adding.

:::warning Warning
The parameters `default=''` and `wpbb_default=''` are incompatible with [Conditional](conditionals.md) shortcodes, as they enforce the statement to be consistently `TRUE`.
:::

#### `default=''`

The `default=''` parameter is optional and specifies a default value that is returned if the field has no value. The default value can include plain text, or HTML markup.

```markup
[wpbb post:custom_field key='name' default='John Doe']
```

* **Example: Default Featured Image**  
  In this example, the default value is a URL to a default image (default.jpg). If the post has no featured image, the default image is displayed.

  ```markup
  <img src="[wpbb post:featured_image size='large' display='url' default='https://my-website.com/wp-content/uploads/default.jpg']">
  ```

#### `wpbb_default=''`

The `wpbb_default=''` parameter is optional and used instead of `default=''` when the default value is sourced from a custom field.

```markup title="wpbb_default Example"
[wpbb post:custom_field key='FIELD_NAME' wpbb_default="wpbb post:custom_field key='FIELD_NAME'"]
```
