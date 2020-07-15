---
id: add-a-widget-area-after-the-beaver-builder-theme-top-bar
title: Add a widget area after the top bar
sidebar_label: Add a widget area after the top bar
---

Out of the box, Beaver Builder Theme has the following widget areas.

  * **Primary sidebar**  
  This widget area is used when you select a left or right sidebar in **Customize > Content > Blog layout**.
  * **Footer Column 1, Footer Column 2,  Footer Column 3, Footer Column 4**  
  These widget areas appear when you enable the footer widget in **Customize > Footer > Footer widgets layout**.
  * **After post widget**  
  This widget appears after the single post content and comments area but before the post navigation.

This article shows how to add a widget area under the top bar with some PHP code and CSS rules to style the widgets you add.

![](/img/add-a-widget-area-after-the-beaver-builder-theme-top-bar-60a26ea9.png)

:::note **Note**
This tutorial requires that you have both Beaver Builder Theme and the child theme installed. [See this article for why you need a child theme](/bb-theme/getting-started/do-i-need-to-install-the-beaver-builder-child-theme.md).
:::

## Add the PHP code to your child theme

Add the following code to your child theme's functions.php file.

```php
/*** Register new Widget Area for After TopBar
-------------------------------------------------- ***/
function bb_child_widgets_init() {

    register_sidebar( array(
        'name'          => 'After Top Bar',
        'id'            => 'widgets_after_topbar',
        'before_widget' => '<div id="my-top-bar-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="my-top-bar-h2">',
        'after_title'   => '</h2>',
    ) );

}
add_action( 'widgets_init', 'bb_child_widgets_init' );

/*** Add Widget area After Top Bar
-------------------------------------------------- ***/

function bb_child_add_widget_top() {

dynamic_sidebar( 'widgets_after_topbar' );
}
add_action('fl_after_top_bar', 'bb_child_add_widget_top');
```

This code first registers a new widget area in the function `bb_child_widgets_init()` and then adds that new widget area to the appropriate location, which in this case is after the top bar.

## Add CSS to style the widget area

The following CSS rules  make the background color of the widget area purple and the title and body of a text widget white. Change the colors to match your preference.

```css
/* Style custom widget area after top bar */

/* Style the row background */
#my-top-bar-widget {
	background: #47318e;
	text-align: center;
	padding-top: 20px;
	padding-bottom: 20px;
}
/* Style the widget titles */
.my-top-bar-h2 {
	color: #ffffff;
}

/* Style the widget paragraph text */
#my-top-bar-widget p {
	color: #ffffff;
}
```
:::tip **Tips**
* To change the location of the custom widget area, see [the current list of Beaver Theme hooks on this page](https://hooks.wpbeaverbuilder.com/bb-theme/).  
  You can see a graphic displaying the location of Beaver Theme hooks at the [ProBeaver](https://probeaver.com/beaver-theme-hooks/) site.
* If you have Beaver Themer, you can [create a Part layout](/beaver-themer/layout-types-modules/part-layout-type/themer-part-layout-type.md) with Widget modules and easily place it in any of a number of locations on your page.
:::
