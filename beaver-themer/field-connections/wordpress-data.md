---
id: wordpress-data
title: WordPress Data
sidebar_label: WordPress Data
description: The article covers all field connections shortcodes available in Beaver Themer for standard WordPress fields.
---

The article covers all field connections shortcodes available in Beaver Themer for standard WordPress fields.

Standard WordPress fields are what make up pages and posts. This includes the title of your page or post, page or post content, publishing date, archive title and so forth. 

:::info
Field Connection shortcodes for our third-party integrations can be found using the links below.

* [Advanced Custom Fields (ACF)](advanced-custom-fields/overview.md)
* [BigCommerce](#)
* [Easy Digital Downloads](../integrations/easy-digital-downloads/field-connections.md)
* [The Events Calendar](../integrations/the-events-calendar/field-connections.md)
* [WooCommerce](../integrations/woocommerce/field-connections.md)
:::


## Archive

### Archive Title

Outputs an archive's title.

```markup
[wpbb archive:title]
```

### Archive Description

Outputs an archive's description.

```markup
[wpbb archive:description]
```

### Archive Count 

Outputs an archive's count. Example: *(Showing 1-5 of 25.)*

```markup
[wpbb archive:show_count]
```

### Archive Page Count

Outputs an archive page count. Example: *(Page 1 of 3.)*

```markup
[wpbb archive:show_page_count]
```

### Archive Term Meta

Outputs an archive’s meta term, such as the value of a custom field assigned to a taxonomy (a post category or tag or a custom taxonomy).

```markup
[wpbb archive:term_meta key='']
```

## Author

### Author Name

Outputs the authors name.

```markup
[wpbb post:author_name]
```

* Options  
  * **Type** - Choices are display (default), first name, last name, first last, last first, nickname, and username.
  * **Link** - Enable/Disable a link to the author's archive or to the website in the author's user profile.

* Example  

  ```markup
  [wpbb post:author_name type='first' link='yes' link_type='website']
  ```

### Author Bio

Outputs the author's bio (**WordPress Dashboard > Users > Profile > Biographical Info**).

```markup
[wpbb post:author_bio]
```

### Author URL

Outputs the author's website or archive e.g. `https://my-website.com/author/name/`.

```markup
[wpbb post:author_url type='archive']
```

* Options  

  * **Type** - Post Archive or Profile Website.

:::tip **Tip**
You can wrap the field connection shortcode with `<a>` tags to make a link.

```markup
<a href="[wpbb post:author_url type=archive]" title="Author Website">Author Website</a>
```
:::

### Author Picture

Outputs the authors profile picture.

```markup
[wpbb post:author_profile_picture link='no' link_type='archive' size='100']
```

* Options  
  * **Type** - Choices are display (default), first name, last name, first last, last first, nickname, and username.
  * **Link** - Enable/Disable a link to the author's archive or to the website in the author's user profile.

* Example  

  ```markup
  [wpbb post:author_name type='first' link='yes' link_type='website']
  ```
  
### Author Picture URL

Outputs the authors profile picture URL.

```markup
[wpbb post:author_profile_picture_url size='100']
```

* Options

  * **Size** - Set the pixel size of the image e.g. 100px.
  
### Author Meta

Outputs the author’s meta term, such as the value of a custom field assigned to the user profile page.

```markup
[wpbb post:author_meta key='']
```

## Comments

### Comments Number

Outputs a post's comment number. Example: 21 Comments.

```markup
[wpbb post:comments_number link='yes' none_text='No Comments' one_text='1 Comment' more_text='% Comments']
```

* Options  

  * **Link** - Enable/Disable link.
  * **No Comments Text** - Set the text for when there are no comments. Default is "No Comments".
  * **One Comment Text** - Set the text for when there is one comment. Default is "1 Comment".
  * **Comments Text** - Set the text for when there are multiple comments. Default is "% Comments".

### Comments URL

Outputs a post's comment URL. Example: `https://my-website.com/hello-world/#respond`

```markup
[wpbb post:comments_url]
```

## Post/Page

The Post/Page field connections work for all public post types this includes custom post types.

### Post Title

Outputs the post's title. 

```markup
[wpbb post:title]
```

### Post ID

Outputs the post's ID.

```markup
[wpbb post:id]
```

### Post Excerpt

Outputs the post excerpt.

```markup
[wpbb post:excerpt length='55' more='']
```

* Options
  
  * **Length** - Accepts a number (number of words). Default is 55.
  * **More** - Accepts text to appear after the excerpt

* Example

  ```markup
  [wpbb post:excerpt length='100' more='Continue Reading']
  ```

### Post Content

Outputs the post's content.

```markup
[wpbb post:content]
```

### Post Custom Field

Outputs [WordPress custom fields](https://wordpress.org/support/article/custom-fields/) added to the page, post or custom post type.

```markup
[wpbb post:custom_field key='']
```

* Options
  
  * **Key** - Your custom field key

* Example

  ```markup
  [wpbb post:custom_field key='blue']
  ```

### Post Link

Outputs the post's Link.

```markup
[wpbb post:link text='title']
```

* Options

  * **Link Text** - Choice of Post Title or Custom.

* Example

  ```markup
  [wpbb post:link text='custom' custom_text='Read More...']
  ```

### Post URL

Outputs the post's URL. Example: `https://my-website.com/hello-world/`.

```markup
[wpbb post:url]
```
  
### Post Slug

Outputs the post's slug. Example: `hello-world`.

```markup
[wpbb post:slug]
```

### Post Date

See the [PHP date() document](https://secure.php.net/manual/en/function.date.php) for a list of date formats or use the Insert functionality in the Beaver Builder UI to choose from a list of date formats when you insert this field connection.

```markup
[wpbb post:date format='']
```

* Options

  * **Format** - Accepts date formats

* Example

  ```markup
  [wpbb post:date format='F j, Y']
  ```
  
  * Output
  
    ```markup
    December 25, 2021
    ```

### Post Modified Date

See the [PHP date() document](https://secure.php.net/manual/en/function.date.php) for a list of date formats or use the Insert functionality in the Beaver Builder UI to choose from a list of date formats when you insert this field connection.

```markup
[wpbb post:modified_date format='']
```

* Options

  * **Format** - Accepts date formats.

* Example

  ```markup
  [wpbb post:modified_date format='F j, Y']
  ```
  
### Post Featured Image

Outputs the post's [featured image](https://wordpress.org/support/article/settings-sidebar/#featured-image).

```markup
[wpbb post:featured_image size='thumbnail' display='tag' align='left' linked='yes']
```

* Options

  * **Size** - Thumbnail, Medium, Large, Full Size and any custom sizes you have.
  * **Display** - Image Tag ([`<img>`](https://www.w3schools.com/tags/tag_img.asp)), URL, Title, Caption, Description or Alt.
  * **Align** - default, left, center, right.
  * **Linked** - Enable or disable the link on the featured image.

* Example

  ```markup
  [wpbb post:featured_image size='medium' display='tag' align='center' linked='yes']
  ```

### Post Attached Image

Outputs any [images attached to the post](https://wordpress.org/support/article/using-image-and-file-attachments/#attachment-to-a-post). 

:::note **Note**
This field connection only appears in modules that have a gallery field setting, such as the Gallery or Slideshow modules.
:::

```markup
[wpbb post:attached_images]
``` 

### Post Terms List

Outputs the post's terms assigned to the post type you are editing.

```markup
[wpbb post:terms_list taxonomy='category' html_list='no' display='name' separator=', ' limit= linked='yes']
```

* Options

  * **Taxonomy** - Displays the taxonomy terms assigned to the post type your Themer layout applies to.  
  Examples: For standard posts, the terms are Categories and Tags. For WooCommerce Products, the terms are Product Categories and Product Tags.
  
  * **Layout** - Choose how the terms are displayed from Separator, Unordered List (`<ul>`), Ordered List (`<ol>`), Div/Span (`<span>`).
  
    :::note **Note**
    The list layouts are not hierarchical. For example, if you have both parent and child categories selected for posts, they will appear at the same level in the list layout.
    :::

  * **Separator** - Leave blank or add in something to separate the terms (if Layout is set to Separator). Default is comma (,). 

  * **Limit** - Limit the number of terms returned.
  
  * **Linked** - Enable or disable the link to the taxonomy term.

* Example

  ```markup
  [wpbb post:terms_list taxonomy='category' html_list='no' display='name' separator='* ' limit='5' linked='yes']
  ```

## Site

### Site Title

Outputs the site's title from the [WordPress Customizer](https://wordpress.org/support/article/appearance-customize-screen/#site-identity).

```markup
[wpbb site:title]
```

### Site Tagline

Outputs the site's tagline from the [WordPress Customizer](https://wordpress.org/support/article/appearance-customize-screen/#site-identity).
```markup
[wpbb site:tagline]
```

### Site URL

Outputs the site's URL.

```markup
[wpbb site:url]
```

### Current Year

Outputs the site's year. Useful for adding a dynamic year in footer layouts. Example: `Copyright © 2010 - [wpbb site:year format='Y'] My Company Name.`

```markup
[wpbb site:year format='Y']
```

## User

### User Name

Outputs the user's name.

```markup
[wpbb site:user_name type='display' link='yes' user='current']
```

* Options

  * **Type** - Choices are display (default), first name, last name, first last, last first, nickname, and username.
  * **Link** - Enable/Disable a link to the user's archive or to the website in the user profile.
  * **Link_type** - Post Archive or Profile Website (if Link set to yes).
  * **User** - Current or Specific
  * **User ID** Enter the User ID number (if User is set to Specific).

* Example

  ```markup
  [wpbb site:user_name type='display' link='yes' link_type='archive' user='specific' user_id='1']
  ```

### User Bio

Outputs the user's bio **(WordPress Dashboard > Users > Profile > Biographical Info)**.

```markup
[wpbb site:user_bio user=current user_id='']
```

* Options

  * **User** - Current, Specific
  * **User ID** - User ID number (if User set to Specific).

* Example

  ```markup
  [wpbb site:user_bio user='specific' user_id='2']
  ```

### User URL

Outputs the user's URL. Example: `https://my-website.com/author/name/`.

```markup
[wpbb site:user_url type='archive' user='current']
```

* Options

  * **Type** - Post Archive or Profile Website
  * **User** - Current or Specific
  * **User ID** Enter the User ID number (if User is set to Specific).

* Example

  ```markup
  [wpbb site:user_url type='website' user='specific' user_id='1']
  ```
  
### User Picture

```markup
[wpbb site:user_profile_picture link='yes' size='300' user='current']
```

* Options

  * **Link** - Yes or No.
  * **Link Type** - Post Archive or Users Profile Website 
  * **Size** - Image Size in pixels (px).
  * **User** - Current or Specific
  * **User ID** - User ID number (if User set to Specific).

* Example

  ```markup
  [wpbb site:user_profile_picture link='yes' link_type='archive' size='300' user='specific' user_id='5']
  ```

### User Meta

Outputs the user's meta term, such as the value of a users profile setting or custom field assigned to a user profile.

```markup
[wpbb site:user_meta key=?? user=current user_id=??]
```

* Options

  * **Key** - User Meta key value
  * **User** - Current or Specific
  * **User ID** - User ID number (if User set to Specific).

* Example

  This is an example using [WooCommerce meta terms](https://docs.woocommerce.com/document/tutorial-customising-checkout-fields-using-actions-and-filters/#section-2) to output the user's company from the Customer billing address.

  ```markup
  [wpbb site:user_meta key='billing_company' user='specific' user_id='5']
  ```

### User Logged In

This shortcode returns True (1) or False (0) and is used mostly as a conditional shortcode.

```markup
[wpbb site:logged_in role='' user='current' user_id='']
```

* Options

  * **Role/Roles** - User role, in lower case. Separate multiple roles with commas.
  * **User** - Current or Specific
  * **User ID** - User ID number (if User set to Specific).

* Example

  ```markup
  [wpbb-if site:logged_in role='administrator' user='current']
  
    Display this message if currently logged-in user has role Administrator.
  
  [/wpbb-if]
  ```
