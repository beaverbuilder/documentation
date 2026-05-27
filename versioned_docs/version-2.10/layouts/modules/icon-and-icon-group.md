---
id: icon-and-icon-group
title: Icon and Icon Group
sidebar_label: Icon and Icon Group
description: The Icon and Icon Group modules displaya single icon plus optional text or a group of icons
---

The Icon module displays a single icon plus optional text. The and Icon Group module displays a group of icons with no text.

:::info

- To make icons available for selection in Beaver Builder modules that allow them, [they have to be enabled](settings/icons.md#enable-or-disable-icon-sets) in **Settings > Beaver Builder > Icons**. You can also [add custom icon sets](settings/icons.md) or [Font Awesome Pro icons](integrations/font-awesome.md).
- Beaver Builder loads the stylesheet and font files for every icon set you use on a page. For example, if you use one icon from Font Awesome and one icon from Foundation on your page, it has to load both icon sets. This adds load time to your page. If page load time is a concern, limit your icon to one set, or create a custom icon set using only the icons you need on the page.
- Font Awesome 5 icons are not compatible Font Awesome 4. If you have an older site that still has Font Awesome 4 icons in existing layouts, Beaver Builder loads a shim automatically to convert those icons to Font Awesome 5.
- If you use Beaver Builder Theme, you have the option to force Font Awesome 5 icons to load on every page, whether or not they appear in Beaver Builder Theme or page layouts. This setting is useful if you have third-party plugins that use Font Awesome 5 icons. See the [article on the Font Awesome settings in Beaver Builder Theme](/bb-theme/defaults-for-layouts-content/icons/choose-how-font-awesome-icons-load-in-beaver-builder-theme).

:::

## Icon module

The Icon Module lets you insert icons from Font Awesome, Foundation, or
WordPress into your layouts.

The Icon module comes with a text editor, where you can enter and format text
that will appear to the right of the icon. You can add a link, which applies
to both the icon and the text. If you add a background color, it appears as a
circle around the icon, as in the following screenshot.

![](/img/icon-module-1.jpg)

There's also a **Screen reader text** field, where you can enter text intended to appear in the HTML output only to assist screen readers for accessibility. For example, if you use the Font Awesome guitar amp icon enter **guitar amp icon** in the **Screen reader text** field, the HTML output appears like the following:

```html
<i class="fas fa-amp-guitar" aria-hidden="true"></i>
<span class="sr-only">guitar amp icon</span>
```

Another example is to use a large Arrow icon as a pointer to the content below
the fold in a hero image, as shown in the following screenshot example. It
alerts people to keep scrolling, but the icon can also contain a link to the
following content that will result in [smooth scrolling](basics/smooth-scrolling.md) to the linked section if
clicked.

![](/img/icon-module-2.jpg)

### Related modules

You can use single icons with heading text in the Callout module, where you
have more control over whether the text appears to the left or right of the
icon. You can add a link to the icon and heading on the **Call to Action** tab
with **Type** = **None**.

## Icon Group module

The Icon Group Module inserts a group of icons and uniformly space them. You
can add a link to each icon and add adjust the spacing between them. Each icon's settings include a **Screen reader text** field where you can enter text intended to appear in the HTML output only to assist screen readers for accessibility. See the [Icon module](#icon-module) section for details.

Unlike the Icon module, you can't add text, but you have the same style
options for the icons, and you can style them either individually or as a
group.

One good use for an icon group would be to display the icons for various
credit cards. In this example, all of the icons were styled the same color.
Another example is using the Icon group to display social media icons with
links.

![](/img/icon-module-3.jpg)

### Related layouts

There isn't another module that's similar to the Icon Group module, but
another way to group icons in a layout would be to use several Icon modules in
separate columns. Icons in separate columns in most cases will stack
differently from an Icon Group, so you could see which method works best for
you.

## Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab/index.md) for margins, visibility, animations, and advanced HTML settings.
