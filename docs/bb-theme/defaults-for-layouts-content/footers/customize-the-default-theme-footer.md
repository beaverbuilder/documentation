---
id: customize-the-default-theme-footer
title: Change the default theme footer
sidebar_label: Change the default theme footer
---

By default, the [Beaver Builder Theme](https://www.wpbeaverbuilder.com/wordpress-framework-theme/) footer shows a single centered column with the copyright symbol and year, your site title, and the text "Powered by Beaver Builder" with a link:

![](/img/customize-the-default-theme-footer-f4abbc2f-2.png)

This default text appears in the one-column layout at **Customize > Footer > Footer Layout** after you first install the Beaver Builder Theme, but even if you delete it there, it will still appear on your site. That's because this footer content actually comes from the file _your-site/wp-content/themes/bb-theme/includes/copyright.php_.

There's an easy way to change this default footer text without touching the _copyright.php_ file. On the **Customizer > Footer > Footer Layout** tab, you can either configure your own footer layout and content or choose **None** for the **Layout** option to remove the footer entirely. See the [article about how to customize footer layout in the Customizer](/bb-theme/customizer-settings/footer.md#footer-layout).