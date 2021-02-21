---
id: classic-wordpress-and-beaver-builder-text-editor-toolbars-dont-match
title: "Classic WordPress and Beaver Builder text editor toolbars don't match"
sidebar_label: "Classic WordPress and Beaver Builder text editor toolbars don't match"
---

There are two types of differences between the classic WordPress classic text
editor and the Beaver Builder text editor that you might notice:

  * The classic WordPress text editor toolbar has some icons that Beaver Builder text editor doesn't, and vice versa.
  * Some WordPress plugins add icons to the WordPress text editor toolbar that don't appear in the Beaver Builder text editor toolbar.

Both of these cases are described here.

## Editor toolbar differences

If you're used to working with the WordPress text editor, you might notice
some subtle differences in the Beaver Builder text editor. Here's a specific
comparison. The Beaver Builder text editor is displayed above and the
WordPress text editor is displayed below.

![](/img/troubleshoot-classic-editor-toolbar-1.png)

![](/img/troubleshoot-classic-editor-toolbar-2.png)

**Item in the Beaver Builder text editor that doesn't appear in the WordPress
editor:**

(This is the orange item in the Beaver Builder text editor in the screenshot
above)

  * Font size  
This setting makes it convenient to change text size without going to the Text
tab and typing in the code.

**Items in the classic WordPress editor that are missing in the BeaverBuilder
text editor:**

(These are the green items in the WordPress editor in the screenshot above)

1. **Insert Read More** tag  
Beaver Builder doesn't use the **more** tag or the text `<!--more-->` because
it breaks Beaver Builder. Insert a link instead.

2. Text strikethrough  
  You can add text strikethrough in either of the following ways:

   * Click the **Text** tab and enclose your text in an `<s>` tag. For example:  
   `<s>keyboard shortcuts</s>` results in ~~keyboard shortcuts~~.

   * Use the *Alt+Shift+d* keyboard shortcut on Windows; *Control+Option+d* on Mac.

  3. Keyboard shortcuts  
  You can access a more complete list of keyboard shortcuts [in the WordPress codex](https://wordpress.org/support/article/keyboard-shortcuts/).

  4. Certain plugin buttons  
See the next section.

## Plugin buttons or icons in the classic WordPress toolbar missing in the
Beaver Builder text editor

In addition, there can be special buttons or icons on your WordPress editor
toolbar for plugins that don't appear in the Beaver Builder text editor.
Besides the **Pods shortcode** button in the previous screenshot, the
following screenshot shows some plugin buttons and an icon in the WordPress
editor toolbar.

![](/img/troubleshoot-classic-editor-toolbar-3.png)

Only one of these plugin buttons remains in Beaver Builder:

![](/img/troubleshoot-classic-editor-toolbar-4.png)

Plugin buttons that appear in the WordPress text editor are removed in Beaver
Builder because, in WordPress coding concepts, the WordPress text editor
operates in the "back end" and Beaver Builder operates in the "front end."
Many plugins are only coded to work in the WordPress back end admin area, and
when used in the front end, they don't work or even completely break Beaver
Builder.

The only way to fix this is to contact the plugin developer and request that
they make the plugin Beaver Builder-compatible and add the button to the UI
with a priority higher than `9999`.
