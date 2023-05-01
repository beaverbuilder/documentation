---
id: getting-started
title: Getting started
sidebar_label: Getting Started
---

This article covers how to get started using field connections for Advanced Custom Fields.

## Access ACF Field Connections

If you have installed and activated Advanced Custom Fields, you can access an **Advanced Custom Fields** group in the Field Connection Panel List. This group enables you to select any custom fields you have created in Advanced Custom Fields, which can then be utilized with Beaver Themer field connections.

![ACF field connection panel list](/img/beaver-themer/integrations--acf--getting-started--1.jpg)

## ACF Field Connection UI Choices

When selecting options from the Field Connection Panel List for Advanced Custom Fields, the choices are determined by the [ACF Location Rules](https://www.advancedcustomfields.com/resources/custom-location-rules/), rather than the specific field types you created. The available options will vary depending on the type of Beaver Themer layout you are designing and the Beaver Builder option to which you are applying them.

For example, if you create an Image field and assign it to a Post Type using the ACF location rule, then you should choose the ACF Post Field option. Similarly, if you apply a field to an archive or taxonomy, you should select the ACF Archive Field option.

* **ACF Archive Field**  
This option enables you to fetch data from ACF fields that have their location rule set to taxonomies, such as categories, tags, or custom taxonomies.  

  The ACF Archive Field option retrieves data from ACF fields that are set to display in Taxonomy edit screens, such as categories, tags, or custom taxonomy archives

* **ACF Archive Field - URL**  
The ACF Archive Field URL option allows you to pull the URL from your field. For example, the URL from an Image field used on an archive such as a WordPress post category.

* **ACF Post Field**  
The ACF Post Field option pulls data from ACF fields whose Location rule is set to display in Post Type edit screens such as pages, posts or custom post types.

* **ACF Post Field URL**  
The ACF Post Field URL option allows you to pull the URL from your field. For example, the URL from an Image field used on a post type such as a WordPress page or post.

* **ACF Post Author Field**  
The ACF Post Author Field option pulls data from ACF fields whose Location rule is set to User Form. These fields appear on the user profile edit screen (WordPress Admin Dashboard > Users > Profile) and can be used to display the data for the author of your page, post or custom post type.

* **ACF Post Author Field URL**  
The ACF Author Field URL option allows you to pull the URL from your field for the author of the page, post or custom post type. For example, the URL from an Image field used on a user profile.

* **ACF Options Field**  
The ACF Options Field option pulls data from ACF fields whose Location rule is set to Options Page.

* **ACF Options Field URL**  
The ACF Options Field URL option allows you to pull the URL from your field. For example, the URL from an Image field used on the ACF options page.

* **ACF User Field**  
The ACF User Field option pulls data from ACF fields whose Location rule is set to User Form. These fields appear on the user profile edit screen (WordPress Admin Dashboard > Users > Profile) and can be used to display the data for the logged in user.

* **ACF User Field URL**  
The ACF User Field URL option allows you to pull the URL from your field for the logged in user. For example, the URL from an Image field used on a user profile.

* **ACF Relational**  
The ACF Relational option pulls data from ACF relational field types such as Page Link, Post Object, Taxonomy and User, regardless of their location. For example, if you create a Taxonomy field with a location rule of Post Type > Is equal to > Post you would use ACF Relational instead of ACF Post Field to output the field's data.


---

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

Once you've chosen an item in the ACF field connection list, a new settings window appears, in which you choose the ACF field type and add the field name, which is usually text separated by underscores. There may also be other options, depending on the ACF field type and the Beaver Builder setting. For example, if you select an ACF **Image** field type, there's also an image size setting you can choose, as shown in this screenshot.

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

The ACF custom field data type should match the Beaver Builder row, column, or module setting data type. Here are some examples.

### Text and shortcodes

Use ACF **Text** field types in row, column, or module settings that take text, such as any heading or label field or any module with a text editor.

:::info
If you insert a field connection or shortcode for an ACF Image field into a Beaver Builder text field, or insert a field connection shortcode into a Beaver Builder custom post layout, the URL of the image is returned, not the image itself. To create a link of the URL, or to display the image, add the appropriate HTML markup into the text field or custom layout. You could even insert an image into Heading field by adding the shortcode for an image and wrapping it in `<img src="[acf-field-shortcode-goes-here]"/>`
:::

### Galleries

For example, you can only add an ACF field of type **Gallery** to a Gallery module. You won't see an option to select an ACF Gallery field type anywhere else in the Beaver Builder UI. Here's a screenshot of a Singular Themer layout for a custom post type with an ACF Gallery field.

![ACF Gallery and Gallery module](/img/beaver-themer/integrations--acf--getting-started--3.jpg)

### Colors

You can set a field connection for most color settings in Beaver Builder. For example, you can set a custom color background for a row in a Singular Themer layout. The screenshot shows that the field connection choices are all related to Color, which means the ACF field type should be **Color Picker**.

![ACF Color and Row Background color](/img/beaver-themer/integrations--acf--getting-started--4.jpg)
