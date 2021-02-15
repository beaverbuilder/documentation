---
id: posts
title: Posts
sidebar_label: Posts module
description: The Posts module displays a set of posts or pages with various layouts, styles, and content filters.
---

The Posts module is the non-animated version of the three Posts modules (Posts,
Posts Slider, Posts Carousel), and it has the most versatility with layouts,
settings, and content filters.

:::tip **Tip**
Not sure which Posts module to choose? See [examples of all three Posts modules and layouts](/beaver-builder/layouts/modules/posts/posts-posts-carousel-and-posts-slider-modules-examples.md).
:::

## Layout tab

**Table 1: Layout tab in Posts module**

Section  |  Field  |  Description  
---|---|---
&nbsp;  |  Layout  |  **Columns** : Posts are displayed in top-aligned rows. Title, metadata, and content appear under featured image. **Columns** layout lets you choose number of columns. **Masonry** : Posts are displayed in columns but vertical spacing is fit to the height of the post (unless the equal heights setting is selected). **Masonry** layout lets you choose the width of each post in pixels.<br/> **Gallery** : Post title and metadata are overlaid on the featured image and isplayed on mouseover. There is no option to display content. if there is no featured image, an image icon is displayed. **Gallery** layout offers no options to set number of columns or post width.<br/>**List** : The posts are listed vertically in a single column.
&nbsp;  |  Post layout **(Requires Beaver Themer)**  |  Enables the use of custom HTML to display the posts. Though this field requires Beaver Themer, you can create custom layouts both in Themer layouts and in a Posts module that you add to the content area of a regular page. For example, you can use a custom layout to provide a fallback image if the eatured image isn't present or you can display custom fields.  
**Posts** **(all except Gallery layouts)** |  Equal heights  |  **(Columns** and **Masonry layouts** only)<br/> Creates a border box of equal height around each post. The border box is sized to fit the post of greatest height in the display.<br/> **Tip:** Setting **Equal heights** to **Yes** for the **Masonry** layout changes the masonry appearance to look like the **Columns** layout. The major difference is that you set width of each box in **Masonry** layout and number of columns in **Columns** layout.  
&nbsp;  |  Columns  |  **(Columns** layout only)<br/> Maximum number of columns in each layer. Readjusts automatically as screen size grows smaller. Clicking the icon next to this field shows the responsive posts display for large, medium, and small devices.
&nbsp;  |  Post width  |  (s **Masonry** layout only)<br/> Width of each post display in pixels.
&nbsp;  |  Post spacing  |  Distance between post border boxes horizontally and vertically, in pixels.<br/> The **Post spacing** value does not affect the spacing above the top layer of posts, but it does affect the spacing below the bottom layer of posts.  
&nbsp;  |  Post padding  |  Distance between a post's border and its text (the post title, metadata, and content). The featured image is not affected by this setting, so if there is a featured image the upper post padding occurs between the featured image and the post text.
&nbsp;  |  Posts element  |  Lets you select a different content sectioning element from the default `<div>`. If unsure, leave the default setting.  
&nbsp;  |  Posts element class  |  Lets you assign a custom class to the content section.  
**Featured Image** |  Image  |  (All except **Gallery** layout)<br/> Show or hide the post's featured image.  
&nbsp;  |  Image position  |  (All except  **Gallery**  layout)<br/> Set where the featured image appears relative to post title or post content.<br/> **Columns** and **Masonry** layout: Above the post title or above the post content.<br/> **List** layout: Above title, above post content (and below post title and post info), left of both title and content, left of post content (image appears under title and post info and left of post content).  
&nbsp;  |  Image size  |  (All except  **Gallery**  layout)<br/> Which size image from the WordPress Media Library to use.<br/>**Note:** The image will always be sized to fit the post max width, so this setting affects image resolution rather than the actual size of the image on the page. This setting doesn't change the amount of crop.<br/>Increasing mage size increases the size of the file loaded, which can affect page load time.
&nbsp;  |  Image spacing  |  (All except  **Gallery**  layout)<br/> Where the spacing occurs depends on the **Image position** setting.<br/> **Above title** : The number of pixels above, left, and right of the image.<br/> The space between the image and the post title is controlled by the **Post padding** value.<br/> **Above content** : The number of pixels left and right of the image.<br/> **Left** or **Left content** ( **List** layout only): Spacing between the image and the text to the right.<br/>**Right** or **Right content** ( **List** layout only): Spacing between the image and the text to the left.<br/> **Note:** As image spacing increases, the image becomes smaller. When the spacing gets larger than the column width, the image will jump larger and become displaced outside the column. For example, if you have a Masonry layout set to 300px, setting the Image spacing to 150px means there is no more room for the image to be sized within the column. The exact number of pixels that causes this to happen depends on the number or width of the columns.
&nbsp;  |  Image width  |  **(List** layout only)<br/> When Image position is **Left** or **Left content** or **Right** or **Right content** the **Image width** setting determines the width of the column in which the image appears. Note that if Image spacing is >0, the image column width stays the same, but the text column width is reduced by that number of pixels.
&nbsp;  |  Fallback image  |  Choose an image that will appear for any single post doesn't have a featured image.<br/> **Post info** |  Author  |  **(Columns**, **Masonry**, and **List** layouts)<br/> Show or hide the post author.  
&nbsp;  |  Date  |  Show or hide the post date.  
&nbsp;  |  Date format  |  (Appears when **Date** is set to **Show**)<br/> Select **Default** to use the WordPress date format specified in **Settings > General** or override the default with a specific date format.
&nbsp;  |  Comments  |  **(Columns**, **Masonry**, and **List** layouts)<br/> Show or hide the number of comments.  
&nbsp;  |  Separator  |  **(Columns**, **Masonry**, and **List** layouts)<br/> Choose the character that separates the display of author, date, and comments on the same line. The default is the pipe character.
**Content** **(all except Gallery layout)** |  Content  |  Show or hide post content. If set to **Yes**, the entire post excerpt is displayed, if the post has content in the **Excerpt** field. If there's no excerpt, the WordPress default of the first 55 words of the post content is displayed, with an ellipsis of three dots at the end to show there is more content.  
&nbsp;  |  Content length  |  Set a custom number of words in the post content to display (default is 55). This setting has no effect on post excerpts. It applies only when the post has no excerpt and post content is displayed.  
&nbsp;  |  More link  |  Show or hide the **Read more** link after the post content.<br/> If set to **Show**, you can also customize the default **Read more** text.  
&nbsp;  |  More link text  |  (Appears if **More link** is set to **Show**)<br/> Customize the default **Read more** text.  


## Style tab

The Gallery layout has a different set of settings and is presented in Table
3.

**Table 2: Columns, Masonry, and List Style tab in Posts module**

Section  |  Field  |  Description  
---|---|---  
**Posts** |  Post alignment  |  Sets the overall alignment of the post title, post info, and post content. This setting can be overridden for each component in the **Typography** subsection for each component (title, info, content) in the **Text** section of the **Style** tab.  
&nbsp;  |  Post background color  |  The color fill of each post border box. Opacity is set within the color picker.  
&nbsp;  |  Border  |  The Border section has settings for border, radius, and shadow.<br/> See the articles about [borders](/beaver-builder/styles/effects/borders.md) and [border effects](/beaver-builder/styles/effects/radius-shadow.md).  
**Text** |  Title color  |  Color of the post title.
&nbsp;  |  Title Typography  |  The [standard typography section](/beaver-builder/styles/typography/typography.md) applied to the post title.
&nbsp;  |  Post info color  |  Color of the post info (author, date, comments, separator).<br/> **Note:** By default the link color in the Post Info is set by the theme's accent color, if there is one. If you set Post info color, the color of the entire Post Info line is this color, with no distinction between text and links.  
&nbsp;  |  Post info Typography  |  The standard typography section applied to the post info.  
&nbsp;  |  Content color  |  Color of post content.  
&nbsp;  |  Content Typography  |  The standard typography section applied to the post content.  
&nbsp;  |  Link color  |  **(List** layout full text only)<br/>Sets the color of links in full-text post content.  
&nbsp;  |  Link hover color  |  **(List** layout full text only)<br/>Sets the hover color of links in full-text post content.  

The following table applies to the **Style** tab for Gallery layout only.

**Table 3: Style tab for Gallery layouts in Posts module**

Section  |  Field  |  Description  
---|---|---  
&nbsp;  |  Hover transition  |  The type of transition when a user mouses over a post in the display: fade, slide up or down, scale up or down.  
**Overlay colors** |  Overlay text color  |  The color of text overlaid on the featured image.  
&nbsp;  |  Overlay background color  |  The color of the overlay placed on the featured image. This setting is generally used to make the overlay text color more legible. Opacity is set in the color picker.  
**Icons** |  Use icon for posts  |  Choose **Yes** to display an icon on the line above or below the text.  
&nbsp;  |  Post icon  |  Select the icon you want to display.  
&nbsp;  |  Post icon position  |  Above or below the text.  
&nbsp;  |  Post icon color  |  Icon color  
&nbsp;  |  Post icon size  |  Size in pixels of the icon  

## Content tab

**Table 4: Content tab of Posts module**

Section  |  Field  |  Description  
---|---|---  
&nbsp;  |  Source  |  Main query or custom query. The default for a standard Beaver Builder layout is **Custom query**, which enables all the other fields on this tab.<br/>In Beaver Themer, the default is **Main query**, because normally for a Themer layout you want the query for posts to be based on whatever archive page the query is created for. When the selection is main query, none of the other settings for the **Content** tab appear.  
**Custom query** |  Post type  |  Choose pages, posts, or a custom post type, such as WooCommerce Products or a custom post type that you create yourself.  
&nbsp;  |  Order  |  Descending or ascending, and whether it is by date, numerical, or alphabetical depends on the **Order by** setting.  
&nbsp;  |  Order by  |  The choices are: **Author**, **Comment count**, **Date**, **Date last modified**, **ID**, **Menu order**, **Meta value** (alphabetic or numeric), **Random**, **Title**, **Selection order**.<br/>**Menu order** can be used with a plugin such as [Post Types Order](https://wordpress.org/plugins/post-types-order/) to order the posts or custom posts in the same way you arrange them in the back end.<br/>The **Meta value** option enables ordering by a custom field. If you select either the alphabetic or numeric **Meta value** option, a **Meta key** field appears so you can enter the key (`meta_key`).<br/>**Selection order** works when you have selected specific posts to display in the **Filter** settings on this tab.( The Posts will display in the same sequence as your selections (Ascending order) or the reverse sequence (Descending order). ) 
&nbsp;  |  Offset  |  Enter an integer if you want to skip a certain number of posts in the order specified in the **Order** setting.  
&nbsp;  |  Exclude current post  |  Excludes the current post from the query. This is useful when you are using the module to create a list of related posts on a single post page.  
&nbsp;  |  Posts, Pages, Products, etc.  |  (The label matches the single post name for the **Post type** you have set)<br/>Include or exclude a set of posts, page, products, etc., by title. Start typing a word, and the titles containing that word will be displayed for you to choose. Keep selecting titles until you have the set you want to include or exclude.  
&nbsp;  |  Categories  |  (When the **Post type** setting is **Posts**)<br/>You can include or exclude categories to display.<br/>The third setting, **Match related categories except**, is useful in Singular-type Themer layouts when you want to use the Posts module to display a list of related posts, and you want to display the related posts in a family of categories except for the specific categories that you name.
&nbsp;  |  Tags  |  (When the **Post type** setting is **Posts**)<br/>You can include or exclude tags to display. The choices are the same as for including or excluding categories.  
&nbsp;  |  Authors  |  You can include or exclude posts or pages by specific authors.  

## Pagination tab

The **Pagination** tab has settings that let you divide a large collection of posts into manageable chunks, as described in the following table.

Section  |  Field  |  Description  
---|---|---  
**Pagination** |  Pagination style  |  See below the table for screenshots of these choices.<br/>**Numbers** : The page numbers appear under the posts, and when a different number is clicked, the new chunk of posts replaces the previous chunk of posts.<br/>**Scroll** : Chunks of posts are loaded into subsequent rows on the same page as the user scrolls down.<br/>**Load more button** : Appears under the initial chunk of posts, and when clicked it generates the next chunk of posts. The user must keep clicking to get each next chunk. This setting works better than **Scroll** when you want your users to have more control over the display, or when network bandwidth is low and you don't want to use resources loading more chunks of posts unless the user really wants to see them.<br/> **None:** No pagination. Use this setting when you want to display only a subset of posts. For example, you might want to display only the three most recent posts.
&nbsp;    |  Posts per page  |  Determines how many posts constitute each chunk. The default is 10 posts.<br/>**Note:** Posts per page does not set the number of columns across the page.<br/>That is controlled automatically according settings on the Layout tab and screen width. For example, if the screen size allows 3 posts per row and your **Posts per page** is set to **5**, you will see three posts in the first row and two posts in the second row in the first chunk of posts.<br/> **Note:** When **Source** on the **Content** tab is set to **Main query**, this  **Posts per page** setting does not appear. In this case, the number of posts that appears on the page is determined by the WordPress value for the **Blog pages show at most** field at **Settings > Reading** in the WordPress admin panel.  
&nbsp;  |  No Results message  |  The message displayed when there are no posts to display. <br/>**Note:** This option also supports shortcodes, which lets you add more complex layouts (rows, columns, modules, templates) than just text.
&nbsp;  |  Show search  |  Show or hide a search form when no posts are found. See the screenshot below the table.  
**Load more button** |  (Button settings)  |  This section appears when
**Pagination style** is set to **Load more button**. It contains the usual
style settings for a button.  

Here's an animated example of the Scroll pagination style.

![](/img/posts-module-1.gif)

Here's an example of the Numbers and Load more pagination style, plus the
search form when **Show search** is set to **Show**.

![](/img/posts-module-2.png)

## Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.

