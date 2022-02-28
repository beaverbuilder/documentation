---
id: safe-mode
title: Safe Mode
sidebar_label: Safe Mode
---

You published or saved a page in Beaver Builder, and now you can't open it for
editing again. What to do?

This usually happens after you enter custom code (such as JavaScript or HTML
markup that is not well formed) into a module in Beaver Builder.

There's an easy way to troubleshoot the problem. You can open the page in Safe
Mode, then fix or remove the module that contains the offending code. When you
open the page in Safe Mode, the page is opened in Beaver Builder for editing
as usual, but no HTML, JavaScript, or CSS is rendered. Instead, there's a
**`[SAFEMODE]`** message and identification of each module in the layout, as
shown in the following screenshot.

![](/img/troubleshooting-safe-mode-1.png)

## Enable Safe Mode

To enable safe mode when opening a page for editing in Beaver Builder:

1. Try to open the page in Beaver Builder in the normal fashion.

2. When the page fails to open, append `&safemode` to the end of the URL.  
  
  ```markup title='Example'
  https://my-website.com/?fl_builder&safemode
  ```

3. Check each module, looking especially for any custom HTML or JavaScript. Custom HTML can be inserted into any field that accepts text. JavaScript is more likely to have been placed in an HTML or Text Editor module.

4. Save or publish the page.

5. Now try opening the page in Beaver Builder in the normal fashion to make sure the page is working.

## `[fl-safe]` shortcode

The `[fl-safe]` shortcode allows you to use code known to conflict with Beaver Builder or break the Beaver Builder user-interface (UI). While the Beaver Builder editor is active on a page or post, any code wrapped within the shortcode `[fl-safe]` will not render. When published, the page is automatically refreshed.

```markup
[fl-safe]
  // Your code here...
[/fl-safe]
```

:::tip
`[fl_safe]` also supports wrapping third-party or custom shortcodes that may conflict with Beaver Builder.

```markup
[fl-safe]
  [my_shortcode]
[/fl-safe]
```
:::
