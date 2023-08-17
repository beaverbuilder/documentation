---
id: posts-slider
title: Posts Slider
sidebar_label: Posts Slider module
description: The Posts Slider module displays a set of posts or pages that display one at a time, either sliding or fading to the next slide.
---

In the Posts Slider module, a set of posts or pages is displayed with either a
sliding or a fade-in animation. The featured image of each post becomes the
background image in the slide (unless you select the option to hide it), with
post info and content overlaid on the slide. See examples of Posts Slider
layouts in [this article](/beaver-builder/layouts/modules/posts/posts-slider.md).

:::info
Some features are distributed across more than one tab. For example,
you can set the featured image to display as a thumbnail instead of a
background on the **Layout** tab. On the **Style** tab, you can then set the
post title, post info, and excerpt to appear to the left or right of the
thumbnail.
:::

##  Slider tab

Section  |  Field  |  Description  
---|---|---  
&nbsp;  |  Height  |  Minimum height of the posts slider. The height will expand to fit the photo being displayed.<br/> **Tip:** If you don't like the expanding and shrinking to accommodate various photo heights, preprocess your photos so they are all the same height.  
&nbsp;  |  Auto play  |  If **Yes**, the display moves through the posts automatically, unless the user intervenes by clicking on the dots or arrows or moving the cursor over one of the posts. If **No**, there is no animation and user must use the navigational aids.  
&nbsp;  |  Delay  |  Number of seconds each post is displayed. This setting is used only if **Auto play** is enabled.  
&nbsp;  |  Loop  |  If **Yes**, the list of posts is displayed in a repeating continuous carousel. If **No**, the list of posts ends when the last post is reached. This behavior occurs whether autoplay is enabled or not.  
&nbsp;  |  Transition  |  Choose the type of animation for the transition to the next post: **Fade** or **Slide**.  
&nbsp;  |  Transition speed  |  When autoplay is enabled, the speed in seconds at which one slide moves to the next when the **Delay** time has finished.  
&nbsp;  |  Number of posts  |  Maximum number of posts to display. Which posts are selected depends on the filters set on the **Content** tab.  
**Slider controls** |  Show dots  |  If **Yes**, a set of horizontal dots is displayed at the bottom of the carousel. The number of dots equals the **Number of posts** value, and one dot is highlighted to indicate which post in the sequence is being displayed. Visitors can manually change the display by clicking one of the dots.  
&nbsp;  |  Show arrows  |  If **Yes**, a left and right arrow is displayed on either side of the post list so user can move ahead or back manually. You can style the arrow color, background color, and background shape on the **Style** tab.  

## Layout tab

Section  |  Field  |  Description  
---|---|---  
&nbsp;  |  Show featured image?  |  Choose **Show** to display the post featured image. Choose **Hide** to show only text with a solid color background.  
**Featured image (appears when featured image is set to Show)** |  Image  | Display image as the slide background or as a thumbnail. **Thumbnail** displays the post title and post info to the left and the featured image thumbnail to the right in each slide.
&nbsp;  |  Size  |  Which size image from the WordPress Media Library to use.<br/> **Note:** The image will always be sized to fit the post max width, so this setting affects image resolution rather than the actual size of the image on the page. This setting doesn't change the amount of crop. Increasing mage size increases the size of the file loaded, which can affect page load time.
&nbsp;  |  Crop  |  (Appears when **Image** is set to **Thumbnail**)<br/> Crops the featured image to a particular shape. Note that this may cut out some parts of the image.  
**Post info** |  Author  |  Show or hide the post author.  
&nbsp;  |  Date  |  Show or hide the post date.  
&nbsp;  |  Date format  |  (Appears when **Date** is set to **Show**)<br/> Select **Default** to use the WordPress date format specified in **Settings > General** or override the default with a specific date format.  
&nbsp;  |  Comments  |  Show or hide the number of comments.  
**Content** |  Content  |  Show or hide post content. If set to **Yes**, the entire post excerpt is displayed, if the post has content in the **Excerpt** field. If there's no excerpt, the WordPress default of the first 55 words of the post content is displayed, with an ellipsis of three dots at the end to show there is more content.  
&nbsp;  |  More link  |  Show or hide the **Read more** link after the post content.<br/> If set to **Show**, you can also customize the default **Read more** text.  
&nbsp;  |  More link text  |  Customize the default **Read more** text.  

## Style tab

Section  |  Field  |  Description  
---|---|---  
**Content** |  Position  |  If **Image** on the **Layout** tab is set to **Background**, this setting determines which part of the slide the post text appears in: **Left**, **Right**, or **Bottom**. If **Image** is set to **Thumbnail**, this setting determines the orientation of post text in relation to the thumbnail: post text on the left or post text on the right.  
&nbsp;  |  Text width  |  (Applies only when **Position** is set to **Left** or **Right**)<br/>The percent of the width of the slide that the post content covers.  
&nbsp;  |  Text padding  |  Sets the amount of space on all four sides of the post text.  
&nbsp;  |  Background color  |  Color of the text background.  
&nbsp;  |  Background gradient  |  (Applies only when the featured image is set to **Background**)<br/>If set to **Yes** , automatically adds an opacity gradient to the specified text background color. The gradient uses the text background color and the text background opacity at the left edge (for text on the left) or right edge (for text on the right) and decreases in opacity towards the center of the slide. There's an example of a text background gradient [in the Posts Slider section of this article](/beaver-builder/layouts/modules/posts/posts-posts-carousel-and-posts-slider-modules-examples.md/#posts-slider-module).  
&nbsp;  |  Text background height  |  (Applies only when the featured image is set to **Background**)<br/> If set to **Auto** , the text background color adjusts to fit the area of text shown on the slide plus the **Text padding** specified in the **Text** section.<br/> If set to **100%** , the text background color covers the entire height of the slide. (The text background width is the width of the text plus padding.) See examples [in the Posts Slider section of this article](/beaver-builder/layouts/modules/posts/posts-posts-carousel-and-posts-slider-modules-examples.md/#posts-slider-module).<br/> **Note:** When **Position** in the **Text** section on the **Style** tab is set to **Bottom** , the text background effect will always be the equivalent of the **Auto** setting, even when set to **100%**.
**Post title** | Title tag | The heading style of the post title.  
&nbsp; | Color | Color of the post title.  
&nbsp; | Hover color | Hover color of the post title.  
&nbsp; | Typography | The standard Beaver Builder [typography section](/beaver-builder/styles/typography/typography.md) for the post title.
**Post info** | Color | Color of the post info text.  
&nbsp; | Link color | Color of text links.  
&nbsp; | Link hover color | Hover color of text links.  
&nbsp; | Typography | The standard Beaver Builder [typography section](/beaver-builder/styles/typography/typography.md) for the post info.  
**Post content** | Color | Color of the post content.  
&nbsp; | Link color | Color of text links.  
&nbsp; | Link hover color | Hover color of text links.  
&nbsp; | Typography | The standard Beaver Builder [typography section](/beaver-builder/styles/typography/typography.md) for the post content.  
**Nav arrows** (Only when **Show arrows** is set to **Yes** on the **Slider** tab)  | Arrows background color  |  Sets the color of a circle or square background behind the navigation arrows. When no color is set, there is no background circle or square.  
&nbsp;  |  Arrows background style  |  Sets the arrow background to a circle or a square.
&nbsp;  |  Arrows color  |  Sets the color of the arrows themselves.  

## Content tab

Section  |  Field  |  Description  
---|---|---  
&nbsp;  |  Source  |  Main query or custom query. The default for a standard Beaver Builder layout is **Custom query**, which enables all the other fields on this tab.<br/> In Beaver Themer, the default is **Main query**, because normally for a Themer layout you want the query for posts to be based on whatever archive page the query is created for.  
**Custom query** |  Post type  |  Choose pages, posts, or a custom post type, such as WooCommerce Products or a custom post type that you create yourself.
&nbsp;  |  Order  |  Descending or ascending, and whether it is by date, numerical, or alphabetical depends on the **Order by** setting.
&nbsp;  |  Order by  |  The choices are **Author**, **Comment count**, **Date**, **Date last modified**, **ID**, **Menu order**, **Meta value** (alphabetic or numeric), **Random**, **Title**.<br/> If you display pages in **Menu order**, you are effectively displaying a menu, with the added ability to display a content summary of the page.<br/> The **Meta value** option enables ordering by a custom field. If you select either the alphabetic or numeric **Meta value** option, a **Meta key** field appears so you can enter the key (`meta_key`).
&nbsp;  |  Offset  |  Enter an integer if you want to skip a certain number of posts in the order specified in the **Order** setting.  
&nbsp;  |  Exclude current post  |  Excludes the current post from the query. This is useful when you are using the module to create a list of related posts on a single post page.
**Filter** |  Posts, Pages, Products, etc.  |  (The label matches the single post name for the **Post type** you set)<br/> Include or exclude a set of posts, page, products, etc., by title. Start typing a word, and the titles containing that word will be displayed for you to choose. Keep selecting titles until you have the set you want to include or exclude. You can reorder matched selections and they are reflected in the front end. See an example for the Posts module at [Selection Order in Filtering](/beaver-builder/layouts/modules/posts/posts.md#selection-order-in-filtering).  
&nbsp;  |  Categories  |  (Hidden when the **Post type** setting is **Pages**)<br/> You can include or exclude categories to display.<br/> The third setting, **Match related categories except**, is useful in Singular-type Themer layouts when you want to use the Posts module to display a list of related posts, and you want to display the related posts in a family of categories except for the specific categories that you name.  
&nbsp;  |  Tags  |  (Hidden when the **Post type** setting is **Pages** )<br/> You can include or exclude tags to display. The choices are the same as for including or excluding categories.  
&nbsp;  |  Authors  |  You can include or exclude posts or pages by specific authors.

## Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab/index.md) for margins, visibility, animations, and advanced HTML settings.

