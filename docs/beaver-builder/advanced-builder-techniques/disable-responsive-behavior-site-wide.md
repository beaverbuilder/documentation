---
id: disable-responsive-behavior-site-wide
title: Disable responsive behavior site-wide
sidebar_label: Disable responsive behavior site-wide
---

If you disable responsive behavior, the layouts you see on large devices will
be preserved on medium and small devices.

Here's what functionality you lose when you disable responsiveness site-wide:

  * Column stacking doesn't occur.
  * Margins and padding stay the same on every device, ignoring any previous settings for medium and small devices on individual rows, columns, and modules, and not allowing new ones.
  * Other responsive settings in **Tools > Global settings** and on the **Advanced** tab of individual rows, columns, and modules are ignored, except for the choice to hide rows, columns, or modules on specific device sizes.

As an example, here's a large-screen display with two columns, plus subcolumns
for the buttons.

![](/img/how-to-tips-disable-responsive-behavior-1.jpg)

Here's that same layout on a small device with normal responsive column
stacking and auto spacing:

![](/img/how-to-tips-disable-responsive-behavior-2.jpg)

And here's what it looks like with responsiveness disabled.

![](/img/how-to-tips-disable-responsive-behavior-3.jpg)

Remember this will apply site-wide.

We don't recommend disabling responsive behavior entirely. Here are some
alternatives:

* You can [prevent columns from stacking by setting custom widths](/beaver-builder/layouts/columns/stacking.md).
* For more control over spacing, you can [disable auto spacing site-wide](/beaver-builder/getting-started/bb-editor-basics/global-settings.md#auto-spacing) instead of disabling responsiveness entirely, then control margins and padding individually. 

Still, there could be a time when you want to disable responsiveness site-
wide. For example, you might be developing an internal website that you know
will only be accessed on large screens. Or, your site might consist mainly of
images where you want identical layout and spacing on every device at the
expense of legibility of text.

**To disable responsiveness:**

1. Open one of your pages in Beaver Builder.
2. Open Global Settings in one of the following ways:
3. Click the title bar in the upper left corner to expose the **Tools** menu, then click **Global settings**, or just use the keyboard shortcut <kbd>⌘</kbd> + <kbd>U</kbd> (<i class="fab fa-apple"></i> Mac) or <kbd>Ctrl</kbd> + <kbd>U</kbd> (<i class="fab fa-windows"></i> Windows).  
4. Scroll to the **Responsive layouts** section and change **Enabled** to **No**.
5. Click **Save** to save your setting.
