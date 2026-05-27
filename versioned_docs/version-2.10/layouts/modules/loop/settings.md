---
id: settings
title: Loop Module Settings
sidebar_label: Settings
---

The Loop module consists of three primary settings tabs: General, Content, and Pagination, along with the customary Advanced tab. These setting tabs offer you the flexibility to create a wide variety of complex layouts for your loop content.

## General tab

The General tab includes settings for controlling the layout of your loop content, such as the number of columns, spacing between items, and width.

- **Item Sizing** - Toggle between Columns and Item Size.

  - **Number of Columns** - Control the number of columns in your loop layout. Selecting a value of `1` displays your loop content as a single column, creating a list of items similar to a traditional blog layout.

  - **Item Size** - Control the minimum and maximum width of each item in your loop layout. The Maximum Width value determines the number of columns, setting a smaller values increases the number of columns, and a larger value decreases the number of columns.

    - **Minimum Width** - Control the minimum width of each item in your loop layout. You can choose between `px` and `fr` units.
    - **Maximum Width** - Control the maximum width of each item in your loop layout. You can choose between `px` and `fr` units.

  - **Gap** - The Gap option is available for both Columns and Item Sizing, allowing you to control the vertical and horizontal spacing between items in your loop layout. Setting a value of 0 removes any spacing between items.

## Content tab

The Content tab includes settings for controlling the display of loop content, such as query source, number of items to show, order, and filter options.

- **Source** - Select the source of your loop content. You can choose between:

  - **Custom Query:**
    Define your own query parameters to filter and display content exactly how you need it. This option gives you complete control over what data is pulled into your loop layout.

    <details><summary>Custom Query Options</summary>

    The following options are available for custom queries:

    - **Post Type** - Choose the post type you want to query, you may select multiple post types.
    - **Order** - Specify the direction either ascending (ASC) or descending (DESC).
    - **Orderby** - The choices are: Author, Comment count, Date, Date last modified, ID, Menu order, Meta value (alphabetic or numeric), Random, Title, Selection order.

      - **Menu order** can be used with a plugin such as Post Types Order to order the posts or custom posts in the same way you arrange them in the back end.

      - **Meta value** option enables ordering by a custom field. If you select either the alphabetic or numeric Meta value option, a Meta key field appears so you can enter the key (meta_key).

      - **Selection Order** allows you to use drag and drop to reorder posts, pages, or custom post types added to the Filter settings. The order in which your posts, pages, or custom post types appear is reflected in the order of the items that appear on the page.

    - **Offset** - Specify the number of items to skip at the beginning of the query.
    - **Exclude Current Post** - Exclude the current post from the loop.

    </details>

  - **Main Query:**
    Utilizes WordPress’s default query for the current page, automatically displaying the standard content determined by your site’s main loop.

    :::info

    The main query cannot be customized or filtered through the Loop module. To modify the main query, you must use the [`pre_get_posts()`](https://developer.wordpress.org/reference/hooks/pre_get_posts/) hook.

    :::

  - **Taxonomy Query:**
    Filters content based on taxonomy terms such as categories, tags, or custom taxonomies. Use this to display items that belong to specific groups or classifications.

    <details><summary>Taxonomy Query Options</summary>

    The following options are available for taxonomy queries:

    - **Taxonomy:** Select the taxonomy to filter by.
    - **Parent Term:** Choose the parent term.
    - **Order:** Specify the order of terms (ascending or descending).
    - **Hide Empty:** Hide terms that don't have any posts associated with them.
    - **Order By:** Choose how to sort the terms (alphabetically, by ID, etc.).

    </details>

  - **Advanced Custom Fields Relationship Query:**
    Leverages ACF relationship fields to pull related posts or custom post types. This is ideal for showcasing content connections that you’ve defined using Advanced Custom Fields.

    <details><summary>ACF Relationship Query Options</summary>

    The following options are available for relationship queries:

    - **Type** - Choose the type of relationship to query. You can choose between Relationship and Users.
    - **Key** - Choose the key (field name) of the relationship field to query.
    - **Order:** _(Relationship field type only)_ Specify the order of relationship items (ascending or descending).
    - **Order By:** Choose how to sort the relationship items (alphabetically, by ID, etc.).
    - **Post Type:** _(Users field type only)_ Specify which post types to display for user-authored content. You can select multiple post types to include in the results.

    </details>

  - **Advanced Custom Fields Repeater Query:**
    Retrieves data from ACF repeater fields, allowing you to display a series of custom field entries as part of your loop. This is perfect for repeating data structures like testimonials, features, or lists.

    <details><summary>ACF Repeater Query Options</summary>

    The following option is available for Repeater queries:

    - **Key** - Choose the key (field name) of the relationship field to query.

    </details>

- **Filter** - Available only with Custom Query. Include or exclude posts, pages, or custom post types by title, taxonomy, and author. Filter options vary by post type. Note: category and tag filters are unavailable when Products (WooCommerce) is selected.

  - **Post** - Include or exclude a post or multiple posts, by typing the post title(s).

  - **Page** - Include or exclude a page or multiple pages, by typing the page title(s)

  - **Custom Post Type** - Include or exclude a set of posts from the custom post type, by the custom post type title(s).

  - **Categories** - Include or exclude posts assigned to a specific category.

  - **Custom Taxonomies** - Include or exclude custom post types assigned to custom taxonomies. For example, if WooCommerce is installed, the Product Categories and Product Tag taxonomies are available.

  - **Tags** - Include or exclude posts assigned to a specific tag.

  - **Authors** - Include or exclude posts or pages by specific authors.

* **Custom Field Filter** - Available only with Custom Query. Include or exclude posts, pages, or custom post types by custom field. You can add as many custom fields as you want.

  - **Relation** - The Relation option allows you to apply logic when filtering by custom fields. The rules operate with either `AND` or `OR` logic.

  - **Edit/Add Custom Field**

    - **Label**
      Labels are used to identify custom fields. They appear in the Custom Field Filter section.

    - **Meta Key**
      Custom field key or field name.

    - **Meta Value**
      Custom field value.

    - **Type**
      A list of all available field types supported. Choose between:

      - **Numeric**
      - **Binary**
      - **Text**
      - **Date**
      - **Date Time**
      - **Decimal**
      - **Signed**
      - **Time**
      - **Unsigned**

    - **Compare**
      You can use the Compare option to check whether or not the field value matches, or if it is greater than, less than, or the same as, depending on the comparison operator. Choose from the following operators:

      - **Equals**
      - **Does not equal**
      - **Greater than**
      - **Less than**
      - **Greater than or equal to**
      - **Less than or equal to**
      - **Exists**
      - **Not Exists**

## Pagination

The Pagination tab has settings that let you divide a large collection of posts or query items into multiple pages.

- **Numbers**
  The pagination appears as numbers under the posts, and when a different number is clicked, a new page loads with the new set of posts.

- **Scroll**
  A new set of posts/items are loaded into subsequent rows on the same page as the user scrolls down.

- **None**
  No Pagination. Use this setting when you want to display only a subset of posts. For example, you might want to display only the three most recent posts.

- **Posts Per Page**
  Determines how many posts/items appear in your query per page. The default is 10 posts.

  :::info

  When the Source is set to Main Query, Taxonomy, or ACF Repeater Queries, the **Posts per page** setting does not appear.

  :::

- **No Results Message**
  The message displayed when there are no posts to display.

  :::tip
  This option also supports shortcodes, which lets you add more complex layouts (rows, columns, modules, templates) than just text.
  :::

- **Show Search**
  Show or hide a search form when no posts are found. See the screenshot below the table.

## Advanced tab

The Advanced tab includes all the standard settings for margins, visibility, animations, and advanced HTML configurations.

See the [Advanced tab](../../advanced-tab/index.md) section for more information.
