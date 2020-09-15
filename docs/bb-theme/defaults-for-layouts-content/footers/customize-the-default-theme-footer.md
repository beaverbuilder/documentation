---
id: customize-the-default-theme-footer
title: Customize the default theme footer
sidebar_label: Customize the default theme footer
---

By default, the [Beaver Builder Theme](https://www.wpbeaverbuilder.com/wordpress-framework-theme/) footer shows a single centered column with the following information.

![](/img/customize-the-default-theme-footer-f4abbc2f.png)

1. Copyright symbol and date
2. The WordPress site title, pulled from **Settings > General < Site Title**.  
  This setting is also located at **Appearance > Customize > Settings > Site Identify > Site Title**. In this example, the site title is "My Biz Ltd."
3. Pipe symbol
4. "Powered by Beaver Builder" text with a link

There are two ways to change this default footer: through the **Customize** area of the Beaver Builder Theme, or by adding _copyright.php_ to your child theme and modifying it.

## Change the default footer using Customizer

There are several advantages of using **Customize > Footer > Footer Layout** to modify the default footer text:

  * You can eliminate the footer entirely, or you can change from one footer column to two.
  * You can easily add a menu or social icons to a footer column.
  * You can use the [Beaver Themer [fl_year] shortcode](/bb-theme/defaults-for-layouts-content/shortcode-for-current-date.md) to keep the year updated.

It's very easy and fast. See the [Customizer Footer Tab](/bb-theme/customizer-settings/footer.md#footer-layout) article about footer layout settings.

## Modify the child theme's copyright.php file

You can also customize the footer by overwriting the _copyright.php_ file with one of the same name in your child theme. The following procedure shows how to make a minor change to the "Powered by" statement in _copyright.php_.

:::note **Note**
You must be using a [child theme](/bb-theme/getting-started/do-i-need-to-install-the-beaver-builder-child-theme.md) or your file will be overwritten with every Beaver Builder Theme update.
:::

**To change the "Powered by" statement in the default Beaver Builder Theme footer:**

  1. Using FTP, navigate to _your-site/wp-content/themes/bb-theme-child._
  2. Create a subfolder named _includes_.
  3. Navigate to Beaver Builder parent theme at  _your-site/wp-content/themes/bb-theme/includes_ and copy the _copyright.php_ file, then paste it into the child theme's subfolder you created in the previous step.
  4. In the child theme _includes_ folder, open _copyright.php_ for editing.
  5. Locate the fourth line, which starts with:  

  ```html
  <span id="fl-site-credits">
  ```

  6. Starting with the text "Powered by,"  replace or remove the `Powered by` text, the `<a href>` link, and the link text.  
  In this example, the link was removed and the text changed to the following:  

  ```html
  <span id="fl-site-credits">Website design by Example Designs Ltd.</a></span>
  ```

  7. Save your edits and if necessary copy _copyright.php_ back to the child theme location.

The new information should now display in your footer.

![](/img/customize-the-default-theme-footer-7c5f75ed.png)
