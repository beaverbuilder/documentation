---
id: smooth-scrolling-tweaks-with-code
title: Smooth scrolling tweaks with code
sidebar_label: Smooth scrolling tweaks with code
---


You can use JavaScript to customize the following aspects of Beaver Builder smooth scrolling: duration,
the type of animation, and the offset of the target from the top of the
screen. 

Here's the JavaScript that you can use to tweak all these changes.

```js
jQuery(function () {
  if ("undefined" != typeof FLBuilderLayoutConfig) {
    FLBuilderLayoutConfig.anchorLinkAnimations.duration = 1000;
    FLBuilderLayoutConfig.anchorLinkAnimations.easing = "swing";
    FLBuilderLayoutConfig.anchorLinkAnimations.offset = 100;
  }
});
```

These lines are explained in the following sections.

## Change the duration of the scroll

By changing the duration of the scroll, you can make it slower or faster. The
value is in milliseconds. The default duration is one second ( which is 1000
milliseconds).

To change the duration of the scroll, change the value in this line in the JQuery example above:

```js
FLBuilderLayoutConfig.anchorLinkAnimations.duration = nn;
```
where `nn` is the duration in milliseconds.

## Change the type of animation

Type of animation, in this case, refers to the speed of scroll throughout the scroll time. The values are `swing` and `linear`. The default value is `swing`. [Here's a visual demonstration of the difference](https://jqueryui.com/easing/). 

To change to linear animation, change the value in this line in the JQuery example above:

```js
FLBuilderLayoutConfig.anchorLinkAnimations.easing = 'linear';
```

##  Change the target offset

By default, when smooth scrolling finishes, the target sits 100px below the
top of the page. This vertical displacement downwards is called the *offset*.

The default of 100px works for the Beaver Builder Theme and other themes with
normal-sized headers, but in other cases, you might want the target to sit
higher or lower on the page when the scroll finishes, to ensure it's high
enough on the page but not obscured by something like a fixed or shrink
header.

To change the offset, change the value in this line in the JQuery example above:

```js
FLBuilderLayoutConfig.anchorLinkAnimations.offset = nn;
```
where `nn` is the value you want to use.

## More complex offset examples

You can add `if`-conditional statements to change the offset for each screen size or add an offset when the WordPress admin bar is present. This will make use of a longer jQuery code block, so we'll show you that first and then show how to make some additional tweaks to customize smooth scrolling offsets.

### The full jQuery code block for smooth scrolling

Here's a longer jQuery code block for smooth scrolling. This example contains the default settings, so if you copied in this code with no changes, nothing would change. In the following sections, we'll show you how to tweak this code block to get the effects you want.

```js
jQuery(function ($) {
  var win = $(window);

  function bbScroll() {
    if ("undefined" != typeof FLBuilderLayoutConfig) {
      var offset = 100;

      if ("undefined" === typeof FLBuilderLayout) {
        return;
      }

      if (FLBuilderLayout._isMobile() && win.width() < 992) {
        offset = offset;
      }

      if ($("body.admin-bar").length > 0) {
        offset += 0;
      }

      FLBuilderLayoutConfig.anchorLinkAnimations.duration = 1000;
      FLBuilderLayoutConfig.anchorLinkAnimations.easing = "swing";
      FLBuilderLayoutConfig.anchorLinkAnimations.offset = offset;
    }
  }

  bbScroll();
  win.on("resize", bbScroll);
});
```

### Adjust offset depending on screen width

If you have different fixed header settings on smaller devices or no fixed
header at all, you can add an offset that applies only to smaller
devices. 

In the following line from the full jQuery example above, the value is changed so the offset is 0 if the
window width is less than 992px, which means both medium and small devices
will have no offset, but large devices will. 


```js
    if ( FLBuilderLayout._isMobile() && win.width() < 992 ) {
      offset = 0;
    }  
  }
});
```

Next is a full jQuery example where the offset for medium devices (<992px) is 10px and the offset for small devices (<768px) is 0px. Large devices retain the default offset of 100px.

```js
jQuery(function ($) {
  var win = $(window);

  function bbScroll() {
    if ("undefined" != typeof FLBuilderLayoutConfig) {
      var offset = 100;

      if ("undefined" === typeof FLBuilderLayout) {
        return;
      }

      if ( FLBuilderLayout._isMobile() && win.width() < 768 ) {
        offset = 0;
      }  
      if ( FLBuilderLayout._isMobile() && win.width() < 992 ) {
        offset = 10;
      }  

      if ($("body.admin-bar").length > 0) {
        offset += 0;
      }

      FLBuilderLayoutConfig.anchorLinkAnimations.duration = 1000;
      FLBuilderLayoutConfig.anchorLinkAnimations.easing = "swing";
      FLBuilderLayoutConfig.anchorLinkAnimations.offset = offset;
    }
  }

  bbScroll();
  win.on("resize", bbScroll);
});
```

### Adjust the offset to compensate for the WordPress admin bar

You can add an extra offset to compensate for the height of the WordPress admin bar when a user is logged in. In this section from the full code example, 32 pixels are added to the offset value to accommodate the WordPress admin bar.

```js
jQuery(function () {
  if ("undefined" != typeof FLBuilderLayoutConfig) {
    var offset = 100;
    if ( $( 'body.admin-bar' ).length > 0 ) {
      offset += 32;
    }
  }
});
```

In this example, the standard offset is 100px, so when the admin bar is present the total offset is 172px. 

## How to add the code

Depending on where you add the code, you can make these smooth scrolling tweaks specific to one page or apply them globally across your site.

:::note **Note**
When you add JavaScript to any of the following locations, you don't have to wrap it in a `<script>` tag. 
:::

### Customize smooth scrolling on a single page

1. Open the page for editing in Beaver Builder.
2. In the upper left corner click the arrow to reveal the **Tools** menu, then click **Layout CSS & JavaScript**.
3. Click the **JavaScript** tab. 
4. Paste in the jQuery code and tweak it as you like.

### Customize smooth scrolling globally

You can add global custom JavaScript either in the Beaver Builder editor or in the Customizer code section of the Beaver Builder Theme.

**To add global JavaScript in the Beaver Builder editor:**

1. Open the page for editing in Beaver Builder.
2. In the upper left corner click the arrow to reveal the **Tools** menu, then click **Global settings**.
3. Click the **JavaScript** tab. 
4. Paste in the jQuery code and tweak it as you like.

**To add global JavaScript in the Beaver Builder Theme's Customizer:**

1. In the WordPress admin panel, go to **Appearance > Customize**. 
2. Click the **Code** tab, then the **JavaScript code** subtab. 
3. Paste in the jQuery code and tweak it as you like.   


