---
id: field-connection-shortcode-index-themer
title: Field connection shortcode reference
sidebar_label: Field connection shortcode reference
---

:::tip **Tips**
  * If you can't find any of these shortcodes in the UI as a field connection with an **Insert** button, try [using the HTML module](/beaver-themer/field-connections/find-the-full-list-of-field-connection-and-parameters-themer.md).
  * For Advanced Custom Fields (ACF) shortcodes, see [this article](/beaver-themer/field-connections/connections-to-acf/connect-to-acf-fields-themer.md).
  * For the WooCommerce shortcode index, see [this article](/beaver-themer/integrations/woocommerce/woocommerce-field-connection-shortcode-index).
:::

## Shortcodes with no options

### Site category

  * **Site Title**`[wpbb site:title]`
  * **Site Tagline**`[wpbb site:tagline]`

### Archive category

  * **Archive Title** `[wpbb archive:title]`
  * **Archive Description** `[wpbb archive:description]`
  * **Archive Count** (Showing 1-5 of 25.) `[wpbb archive:show_count]`
  * **Archive Page Count** (Page 1 of 3.) `[wpbb archive:show_page_count]`

###  Post category

  * **Post Title** `[wpbb post:title]`
  * **Post ID** `[wpbb post:id]`
  * **Post Content**`[wpbb post:content]`
  * **Post URL**`[wpbb post:url]`
  * **Post Slug** `[wpbb post:slug]`

### Comments category

  * **Comments URL** `[wpbb post:comments_url]`

### Author category

  * **Post Author Bio** `[wpbb post:author_bio]`

## Shortcodes with options

### Archive category

  * **Archive Term Meta** `[wpbb archive:term_meta]`
    * Options

      * Key – Accepts a meta term
    * Example `[wpbb archive:term_meta key='apparel']`

### Post category

  * **Post Excerpt** `[wpbb post:excerpt]`
    * Options
      * Length - Accepts a number (number of words)
      * More - Accepts text to appear after the excerpt
    * Example `[wpbb post:excerpt length='55' more='Continue Reading']`

  * **Post Link** `[wpbb post:link]`
  Displays the post permalink.

    * Options
      * Text - Accepts either "title" to show the Post Title or "custom" to put your own text
        * If "custom", then **custom_text** accepts (almost) any text
    * Example
      * `[wpbb post:link text="custom" custom_text="Read More"]`

  * **Post Date**`[wpbb post:date]`
  See the [PHP date document](https://secure.php.net/manual/en/function.date.php) for a list of date formats or use the **Insert** functionality in the Beaver Builder UI to choose from a list of date formats when you insert this field connection.

    * Options
      * Format - Accepts date formats
    * Example
      * `[wpbb post:date format='F j, Y']`

  * **Post Modified Date**`[wpbb post:modified_date]`
    * Options
      * Format - Accepts date formats
    * Example
      * `[wpbb post:modified_date format='F j, Y']`

  * **Post Featured Image**`[wpbb post:featured_image]`
    * Options
      * Size - thumbnail, medium, large, full (also others if you have custom sizes)
      * Display - tag, url, title, caption, description, alt
      * Align - default, left, center, right
      * Linked - yes, no
    * Example
      * `[wpbb post:featured_image size='medium' display='tag' align='center' linked='no']`

  * **Post Terms List**`[wpbb post:terms_list]`
  Post terms are items in the taxonomy.

    * Options
      * Taxonomy - slug of chosen taxonomy (default taxonomies like category or post_tag or a custom taxonomy)
      * html_list - no, ol, ul
    The value `no` means to use the separator to separate terms in the list; `ol` means to put them into an ordered list, and `ul` into an unordered list. The list is not hierarchical, which means for example if you have both parent and child categories selected for posts, they will appear at the same level in the list.

      * Separator - leave blank or add in something to separate the list
      * Linked - yes or no
    * Example
      * `[wpbb post:terms_list taxonomy='category' html_list='ul' separator=', ' linked='yes']`

  * **Post Custom Field** `[wpbb post:custom_field]`
    * Options
      * Key - Your custom field key
    * Example
      * `[wpbb post:custom_field key='blue']`

### Comments category

  * **Comments Number** `[wpbb post:comments_number]`
    * Options
      * Link - yes or no
      * None_text - text to display when there are no comments
      * One_text - text to display when there is 1 comment
      * More_text - text to display when there is more than 1 comment
    * Example
      * `[wpbb post:comments_number link='yes' none_text='No Comments' one_text='1 Comment' more_text='% Comments']`

### Author category

  * **Author Name** `[wpbb post:author_name]`
    * Options
      * Type - display, first, last, firstlast, lastfirst, nickname, username
      * Link - yes or no
        * Link_type (if link is set to yes) - archive, website
    * Example
      * `[wpbb post:author_name type='display' link='no']`

  * **Author URL** `[wpbb post:author_url]`
    * Options
      * Type - archive, website
    * Example
      * `[wpbb post:author_url type='archive']`

  * **Author Picture** `[wpbb post:author_profile_picture] `
    * Options
      * Link - yes or no
      * Size - number (in pixels)
    * Example
      * `[wpbb post:author_profile_picture link='no' size='100']`

  * **Author Meta**`[wpbb post:author_meta]`
    * Options
      * Key - Key of author profile field
    * Example
      * `[wpbb post:author_meta key=‘billing_company']`
(*This is an example using WooCommerce*)

### User category

  * **User Name**`[wpbb site:user_name]`
    * Options
      * Type - display, first, last, firstlast, lastfirst, nickname, username
      * Link - yes or no
        * Link_type (if link set to yes) - archive, website
      * User - current, specific
        * User_id (if user set to specific) - User ID number
    * Example
      * `[wpbb site:user_name type='display' link='no' user='current']`

  * **User Bio**`[wpbb site:user_bio]`
    * Options
      * User - current, specific
        * User_id (if user set to specific) - User ID number
    * Example
      * `[wpbb site:user_bio user='specific' user_id='2']`

  * **User URL** `[wpbb site:user_url]`
    * Options
      * Type - archive, website
      * User - current, specific
        * User_id (if user set to specific) - User ID number
    * Example
      * `[wpbb site:user_url type='archive' user='current']`


  * **User Picture** `[wpbb site:user_profile_picture]`
    * Options
      * Link - yes, no
        * Link_type (if link set to yes) - archive, website
      * Size - Number (in pixels)
      * User - current, specific
        * User_id - User ID number
    * Example
      * `[wpbb site:user_profile_picture link='no' size='100' user='current']`

  * **User Meta**`[wpbb site:user_meta]`
    * Options
      * Key - User Meta key value
      * User - current, specific
    * Example
      * `[wpbb site:user_meta key=‘billing_company' user='current']`
    ( *This is an example using WooCommerce* )

  * **User Logged In** `[wpbb site:logged_in]`
  :::note **Note** This shortcode returns True (1) or False (0) and is used mostly as a conditional shortcode. This shortcode has the following options to limit by user role and user.
  :::

    * Options
      * Role/Roles - User role, in lower case. Separate multiple roles with commas.
      * User - current, specific
        * User_id - User ID number
    * Example
      * `[wpbb-if site:logged_in role='administrator' user='current']Displays if currently logged-in user has role Administrator[/wpbb-if]`
