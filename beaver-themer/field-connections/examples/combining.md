---
id: combining
title: Combining Shortcode Examples
sidebar_label: Combining Shortcodes
toc_min_heading_level: 2
toc_max_heading_level: 2
description: The following examples demonstrate how you can combine field connections. You can also use HTML and CSS to give you greater control over the markup and style the field connection output.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This article offers various examples demonstrating how to effectively combine field connections to grant you greater freedom and flexibility over the output. This includes the ability to wrap the field connection within HTML tags and apply custom CSS classes.

## Post Title with Custom HTML & CSS

To display a post title into your layout, the easiest approach involves utilizing a Heading module with the [Post Title](../wordpress-data.md#post-title) field connection.

In the following code example, we have made use of the [Post Title](../wordpress-data.md#post-title) and [Post URL](../wordpress-data.md#post-url) field connections, alongside custom HTML markup and CSS, to generate the Post Title with a personalized HTML structure and CSS classes.

```markup
<h1 class="my-post-title">

  <a href="[wpbb post:url]" class="my-post-title-link" title="[wpbb post:title]">
    [wpbb post:title]
  </a>

</h1>
```

### Output

```markup
<h1 class="my-post-title">

  <a href="https://my-website.com/hello-world/" class="my-post-title-link" title="Hello World">
    Hello World
  </a>

</h1>
```

## Featured image using custom HTML and CSS

It's possible to use multiple field connections to output the featured image. As a result, you have more control over the HTML structure and can use your own CSS classes.

```markup
<img src="[wpbb post:featured_image size='large' display='url']" class="my-feat-img" alt="[wpbb post:featured_image display='alt']">
```

### Output

```markup
<img src="https://my-website.com/wp-content/uploads/2023/08/image.jpg" class="my-feat-img" alt="My Post's Featured Image">
```

## Post Title & Post Author

In this particular example, the [Post Title](../wordpress-data.md#post-title) and [Author Name](../wordpress-data.md#author-name) field connections are used, with the word "by" inserted between them. This allows for displaying both the post title and author within a single heading tag.

```markup
<h3>[wpbb post:title] by [wpbb post:author_name type='display' link='no']</h3>
```

### Output

> Hello World by Beaver Builder

## Categories or Tag Name as CSS Class

In this example, the [Post Term List]((../wordpress-data.md#post-terms-list)) field connection is used to implement the category slug as a CSS class name. This proves beneficial for customizing individual categories, like assigning unique colors or adding category-specific icons.

```markup
<h3>
  <a href="[wpbb post:url]" class="[wpbb post:terms_list taxonomy='category' html_list='no' display='slug' separator=', ' limit='1' linked='no']-category">
    [wpbb post:title]
  </a>
</h3>
```

### Output

```markup
<h3>
  <a href="https:://my-website.com/blog/hello-world" class="movies-category">
    Some Movie Title
  </a>
</h3>
```

## Featured Image as Background Image

In this example, the [Featured Image](../wordpress-data.md#featured-image) field connection is applied as an inline CSS value for the CSS `background-image` property. This allows you to set the post's featured image as a background image, which can be conveniently overlaid with additional content, like the post title. This provides a great example of how to use field connections as inline CSS values.

:::info
Some custom CSS is required to make this display the featured image correctly. The CSS code is not included in this example.
:::

```markup
<div class="featured-image-bg" style="background-image: url([wpbb post:featured_image size='large' display='url'])">

  <h3 class="featured-img-heading">[wpbb post:title]</h3>

</div>
```
