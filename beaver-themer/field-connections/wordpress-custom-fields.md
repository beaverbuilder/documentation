---
id: wordpress-custom-fields
title: WordPress Custom Fields
sidebar_label: WordPress Custom Fields
---

[WordPress Custom Fields](https://wordpress.org/support/article/custom-fields/) is a feature in WordPress which allows you to add additional information to your pages, posts, and custom post types. You do this by adding a `key` which is the custom field name and a value which is the information you want to display on your page or post. You can then use Beaver Themer field connections to display this data into your layout.

## Enable WordPress Custom Fields

By default, Custom fields are hidden. You can make the custom fields panel visible on your post edit screen in two ways depending on whether you're using the default WordPress editor (Gutenberg) or the [Classic Editor plugin](https://wordpress.org/plugins/classic-editor/). 

:::info
When the Advanced Custom Fields plugin is installed and active on your website, the functionality of WordPress custom fields is deactivated. To utilize WordPress custom fields, you need to disable the Advanced Custom Fields plugin.
:::
### Block Editor (Gutenberg)

To enable WordPress custom fields while utilizing the Block editor, follow these steps:

1. On the **WordPress Edit Screen** for pages or posts and access the **Options** panel by clicking the (<i className="fa-solid fa-ellipsis-vertical"></i>) vertical ellipsis icon.
2. Choose **Preferences** from the dropdown menu.
3. In the popup window, select the **Panel** option.
4. Toggle the **Custom Fields** option to enable and finalize the process by clicking the **Enable & Reload** button.

![Access custom fields using WordPress default editor](/img/beaver-themer/field-connections--wp-custom-fields--1.jpg)

### Classic Editor Plugin

To enable WordPress custom fields while using the Classic Editor plugin, follow these steps:

1. On the **WordPress Edit Screen** for pages or posts, access the **Screen Options** panel located in the upper right corner.
2. Mark the checkbox for **Custom Fields**.
3. The **Custom Fields** panel will now become visible beneath the Classic Editor.

![Access custom fields using WordPress classic editor](/img/beaver-themer/field-connections--wp-custom-fields--2.jpg)

## Add a WordPress Custom Field

To add a WordPress custom field:

1. Input the name (key) for your custom field and provide a value for the field.
2. Apply the changes by clicking **Publish**.

:::info
If you have previously added WordPress custom fields, you'll notice a dropdown menu that presents a list of all existing custom fields. To add a new custom field, click on the **Enter New** button.
:::

![Add a WordPress Custom Field](/img/beaver-themer/field-connections--wp-custom-fields--3.jpg)

## Apply WordPress Custom Field

A WordPress custom field can be assigned to a row, column, or module option using the following steps:

1. Access the specific row, column, or module to which you intend to apply the WordPress custom field.
2. Click the [Field Connection toggle](getting-started.md#access-field-connections) and within the [Field Connection menu](getting-started.md#field-connection-menu), choose **Post Custom Field**.
3. Select either [Connect](getting-started.md#connect) or [Insert](getting-started.md#insert) to apply the WordPress custom field onto the chosen option.

![Apply a WordPress Custom Field](/img/beaver-themer/field-connections--wp-custom-fields--4.jpg)

## WordPress Custom Field Shortcode

You also have the option to display WordPress custom fields within your layouts using the Field Connection shortcode. This can be accomplished by choosing **Post Custom Field** from the [Field Connection Menu](getting-started.md#field-connection-menu) and then inputting the field name (key).

```markup
[wpbb post:custom_field key='FIELD_NAME']
```

### Conditionals & Expressions Support

WordPress custom fields also have support for [conditionals](conditionals.md) and [expressions](expressions.md).

#### Conditionals

The following code provides a simple example of the syntax used for applying conditionals with your WordPress custom field connection shortcodes.

```html
[wpbb-if post:custom_field key='FIELD_NAME']

  <p>Show this if TRUE.</p>

[wpbb-else]

  <p>Show this if FALSE.</p>

[/wpbb-if]
```

Check out the [Conditional](conditionals.md) article to delve deeper into understanding how conditionals work. Also, take a look at the [Conditional Examples](examples/conditional.md) article for more instances that showcase how conditionals can be applied.

#### Expressions

The following code provides a simple example of the syntax used for applying expressions with your WordPress custom field connection shortcodes.

```html
[wpbb-if post:custom_field key='FIELD_NAME' exp='equal' value='Beaver Builder']

  <p>This content will only display if the field's value is Beaver Builder.</p>

[/wpbb-if]
```

Check out the [Expressions](expressions.md) article to delve deeper into understanding how expressions work. Also, take a look at the [Expression Examples](examples/expressions.md) article for more instances that showcase how expressions can be applied.
