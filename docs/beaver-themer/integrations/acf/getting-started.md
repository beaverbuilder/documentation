---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

This article covers how to get started using field connections with Advanced Custom Fields.

## Access ACF Field Connections

To access Advanced Custom Fields (ACF) field connections, follow these steps:

1. Open the Settings Window for the desired row, column, or module in Beaver Builder.
2. Look for an option that supports field connections. This option is usually marked by a plus icon (+) located on the right side.
3. Click the plus icon (+) to open the Field Connection panel.
4. In the Field Connection panel, you will find a list of available field connections.
5. Scroll down the list until you reach the Advanced Custom Fields section.

:::info
The Advanced Custom Fields section will only appear if you have the Advanced Custom Fields plugin installed and activated.
:::

![ACF field connection panel list](/img/beaver-themer/integrations--acf--getting-started--1.jpg)

## ACF Field Connection UI Choices

When selecting options from the Field Connection Panel List for Advanced Custom Fields, the choices are determined by the [ACF Location Rules](https://www.advancedcustomfields.com/resources/custom-location-rules/), rather than the specific field types you created. The available options will vary depending on the type of Beaver Themer layout you are designing and the Beaver Builder option to which you are applying them.

For example, if you create an Image field and assign it to a Post Type using the ACF location rule, then you should choose the ACF Post Field option. Similarly, if you apply a field to an archive or taxonomy, you should select the ACF Archive Field option.

* **ACF Archive Field**  
The **ACF Archive Field** option pulls data from ACF fields whose Location rule is set to display in Taxonomy edit screens such as categories, tags or custom taxonomy archives.

* **ACF Archive Field - URL**  
The **ACF Archive Field URL** option allows you to pull the URL from your field. For example, the URL from an Image field used on an archive such as a WordPress post category.

* **ACF Post Field**  
The **ACF Post Field** option pulls data from ACF fields whose Location rule is set to display in Post Type edit screens such as pages, posts or custom post types.

* **ACF Post Field URL**  
The **ACF Post Field URL** option allows you to pull the URL from your field. For example, the URL from an Image field used on a post type such as a WordPress page or post.

* **ACF Post Author Field**  
The **ACF Post Author Field** option pulls data from ACF fields whose Location rule is set to **User Form**. These fields appear on the user profile edit screen (**WordPress Admin Dashboard > Users > Profile**) and can be used to display the data for the author of your page, post or custom post type.

* **ACF Post Author Field URL**  
The **ACF Author Field URL** option allows you to pull the URL from your field for the author of the page, post or custom post type. For example, the URL from an Image field used on a user profile.

* **ACF Options Field**  
The **ACF Options Field** option pulls data from ACF fields whose Location rule is set to [Options Page](options-page.md).

* **ACF Options Field URL**  
The **ACF Options Field URL** option allows you to pull the URL from your field. For example, the URL from an Image field used on the ACF options page.

* **ACF User Field**  
The **ACF User Field** option pulls data from ACF fields whose Location rule is set to **User Form**. These fields appear on the user profile edit screen (**WordPress Admin Dashboard > Users > Profile**) and can be used to display the data for the logged in user.

* **ACF User Field URL**  
The **ACF User Field URL** option allows you to pull the URL from your field for the logged in user. For example, the URL from an Image field used on a user profile.

* **ACF Relational**  
The **ACF Relational** option pulls data from ACF relational field types such as [Page Link](field-types/page-link.md), [Post Object](field-types/post-object.md), [Taxonomy](field-types/taxonomy.md) and [User](field-types/user.md), regardless of their location.  
  
  For example, if you create a [Taxonomy field](field-types/taxonomy.md) with a location rule of **Post Type > Is equal to > Post** you would use **ACF Relational** instead of **ACF Post Field** to output the field's data.

## ACF Options

After selecting an item from the ACF field connection list, a new settings window will be displayed. In this window, you can specify the ACF field type and enter the field name, typically in text format separated by underscores.

Depending on the ACF field type and Beaver Builder settings, additional options may be available. For instance, if you opt for an ACF Image field type, you will also have the option to select an image size, as shown in the screenshot below.

![ACF field connection options](/img/beaver-themer/integrations--acf--getting-started--2.jpg)

## Automatic Field Detection & Population

Beaver Themer automatically detects any custom fields created in Advanced Custom Fields. When you select any ACF field category from the [Field Connection Panel List](../work-with-field-connections.md#add-a-field-connection) as a field connection, the Detected Fields dropdown lists all ACF fields available.

The detected fields in the dropdown have the following format:

```markup
Field Label (Field Name) [Field Type]
```

Suppose you have created an [Image field](field-types/image.md) with a label of **Movie Poster**, a field name of **movie_poster**. Then the ACF field detection will display the field in the following format.

```markup
Movie Poster (movie_poster) [image]
```

Selecting a field from this list automatically populates the Field type and Field name settings.


## Data Types

When integrating ACF fields with Beaver Builder options for rows, columns, and modules, it is crucial to consider the compatibility of data types. Here are specific behaviors demonstrated by different data types in various scenarios:

### Text & Images

ACF Text and Image fields can be connected interchangeably, but the output will vary depending on the Beaver Builder option they are connected to.

For instance, connecting an ACF Image field to a Beaver Builder text option, such as the heading option in the Heading module, will only provide the image URL as output. This is because Beaver Builder text options are designed to handle text content and do not support image display.

Similarly, Beaver Builder photo options, such as row background images or Photo module options, exclusively accept images and cannot process text. Therefore, it is not possible to connect an ACF text field to a Beaver Builder photo option.

### Galleries

ACF Gallery fields are compatible with specific options in Beaver Builder that support multiple images, such as the row background slideshow and the Gallery module in Beaver Builder. Due to this, there is no field connection shortcode available for the ACF Gallery field.

![ACF Gallery and Gallery module](/img/beaver-themer/integrations--acf--getting-started--3.jpg)

For more information, see the [ACF Gallery Field Type](field-types/gallery.md) article.

### Colors

ACF Color Picker fields can be utilized in both Beaver Builder text and color picker options. If you intend to use the ACF Color Picker field value to display a color, such as for background or text color, it is essential to connect the field to a Beaver Builder color picker option.

![ACF Color and Row Background color](/img/beaver-themer/integrations--acf--getting-started--4.jpg)

When using the ACF Color Picker field with a Beaver Builder text option, it will output the hexadecimal value of the color as plain text, for example: `#ff0000`. However, this allows you to leverage the value in inline CSS for styling elements, as demonstrated in the following example:

```html
<p style="color:[wpbb post:acf type='color_picker' name='FIELD NAME' prefix='1']">
  Lorem ipsum...
</p>
```
