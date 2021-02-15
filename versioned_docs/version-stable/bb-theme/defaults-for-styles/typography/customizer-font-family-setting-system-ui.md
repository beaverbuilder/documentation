---
id: customizer-font-family-setting-system-ui
title: The system-ui font family
sidebar_label: The system-ui font family
---

When you select a font family in Customizer, in the **System fonts** section of the fonts list there's a **system-ui** option. This option uses the system font of the user's operating system (or the operating system plus browser).

:::note **Note**
The system-ui font is available only in Customizer, not in Beaver Builder modules.
:::

The main advantages of the system-ui font are:

  * A performance improvement in page load time, because there's no font to load
  * A display that's potentially better suited for individual users because it's a font they're used to.

Here's a [great article on the system font stack](https://woorkup.com/system-font/). As noted in that article, the WordPress dashboard also implements a system font stack. In the Beaver Builder Theme, the system font stack is implemented with the following fallbacks:

```php
'system-ui' => array(
  'fallback' => "-apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif",
  'weights' => array(
    '300',
    '400',
    '700',
  ),
),
```

The weights in the code above appear as the **Light**, **Normal**, and **Bold** choices in the **Font weight** field in Customizer.

:::note **Note**
When you use a system font stack, you give up some control over the style of your site, in that the font is controlled by the user's system. You should test your site carefully on a number of platforms, particularly languages with non-Latin scripts.
:::
