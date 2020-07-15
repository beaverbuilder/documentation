---
id: custom-css
title: Where to add custom CSS
sidebar_label: Custom CSS
---

Many of these Knowledge Base articles have CSS code that you can copy and
paste, or perhaps you want to create your own CSS. Where should you put it?

## Restrict custom CSS to a single Beaver Builder page

This procedure applies if you only want your CSS to apply to the content
layout on a single Beaver Builder page. For example, suppose you have a
contact form and know that you only want your custom CSS to apply to that form
on that single page.

**To add CSS code that is restricted to a single Beaver Builder page or
post:**

  1. Click the title bar in the upper left corner to open the **Tools** menu, then click **Layout CSS & JavaScript**.
  2. On the **CSS** tab, enter your CSS code.
  3. Click **Save**.

You'll see a green dot next to the **Layout CSS & JavaScript menu item** in
the **Tools** menu on any page for which you have custom code.

:::tip **Tip**
See the Related Links for how to add a custom ID or class selectors
to your Beaver Builder rows, columns, or modules.
:::

## Add custom CSS to apply site-wide

There are several ways to add custom CSS that applies site-wide, but there are
slight variations in the behavior with each method.

### 1. Site-wide rules for content area layouts

You can add site-wide rules right in your Beaver Builder editing screen. The
rules will apply to the content area of every page, whether or not the page or
post is built with Beaver Builder.

:::tip **Tip**
See [this article for a diagram](/beaver-builder/getting-started/what-can-i-do-with-beaver-builder.md/#plugin-vs-theme-vs-beaver-themer) of where the content area is on a page or post. Don't use this location for CSS rules that apply to areas controlled by your theme, such as header, footer, and sidebar.
:::

This method is very handy when you're adding custom ID or class selector names
to individual rows, columns, or modules on a page, because you don't have to
leave the Beaver Builder editor to add the rule and they still apply site-
wide, and you can see the site-wide rules from any Beaver Builder editing
page.

On the other hand, you might prefer to keep all your rules in a single place
so you can find them easily later. In that case, you can use one of the other
methods below.

**To add a site-wide CSS code for content area layouts:**

1. Click the title bar in the upper left corner to open the **Tools** menu, then click **Global settings**.
2. On the **CSS** tab, enter your CSS code.
3. Click **Save** and preview the result.  
This code will now appear in **Tools > Global settings** on any Page Beaver
page, but the CSS rules will apply to all content areas of your site, whether
or not they were built with Beaver Builder.

You'll see a green dot next to the **Global Settings** menu item in the
**Tools** menu to remind you that you have custom code. Since it's global,
you can edit this code on any Beaver Builder editing page.

### 2. Site-wide rules set on the Customize > Additional CSS tab

This method applies the CSS code everywhere on your site: Beaver Builder and
non-Beaver Builder content areas and any theme.

The **Customize > Additional CSS** tab in Customizer is actually a WordPress
option, it's not provided by the Beaver Builder Theme. See the [article on the Additional CSS tab](/bb-theme/customizer-settings/additional-css.md) for more details about how that tab functions.

:::note **Notes**
* Although the **Customize > Additional CSS** tab exists in every WordPress installation, the code placed there is theme-specific. It disappears when you switch themes and comes back if you return to the old theme. If you want to migrate code to a new theme, copy and paste it manually.

* The CSS you enter at **Customize > Additional CSS** is stored in the database. If a custom CSS rule contains a `url` attribute, the relative path to a file in your WordPress installation may need to change. In most cases, if you are pointing to any directory within the *`wp-content`* directory, the relative path should start with *`wp-content`*.
:::

### 3. *`style.css`* (any theme)

Like Method 2, this method applies the CSS code everywhere on your site:
Beaver Builder and non-Beaver Builder content areas and any theme.

You can add site-wide CSS rules to a *`style.css`* file in your child theme's
CSS. You can edit *`style.css`* by going to the WordPress admin panel and
clicking **Appearance > Editor**.

The advantage of this method is that you'll have a larger editing screen than
for Method 2.

:::tip **Tips**
* Edit *`style.css`* only in a child theme, or you'll lose your work when the parent theme gets updated.

* The path to *`style.css`* is *`< site-root>/wp-content/themes/<child-theme>/`*. Any relative path you use in your CSS rules is relative to that location.

* Some security plugins set read-only permissions on *`style.css`* so you can't edit it at **Appearance > Editor**. In that case, you'll have to download the file and edit it in a text editor or use the editor in cPanel.

* If you switch themes and want to keep the CSS rules in *`style.css`* , copy the *`style.css`* file from your old child theme and upload it to your new child theme directory. Note that not all of the CSS rules that applied to the old theme will apply to the new one.
:::

## CSS Troubleshooting Tips

* Invalid CSS is ignored when the page loads, so if you add a rule that seems to have no effect, check for validation errors. It can be as simple as a missing semicolon.
* Alternatively, for a rule that has no effect, try adding **!important** before the semicolon of the declaration. For example:

  ```markup    
  h1, h2, h3, h4 {
    font-size: 120% !important;
  }
  ```

* Another possibility is that the rule applies to the wrong `<div>` level. Use your browser's **Inspect code** feature to identify where the default rule applies and try adding those selectors to your rule.
