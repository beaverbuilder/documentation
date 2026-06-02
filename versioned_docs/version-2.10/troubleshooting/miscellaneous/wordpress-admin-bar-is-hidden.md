---
id: wordpress-admin-bar-is-hidden
title: WordPress admin bar is hidden
sidebar_label: WordPress admin bar is hidden
---

The WordPress admin bar is displayed by default. This is the bar that appears
across the top of every page of your site when you're logged into WordPress.

Beaver Builder hides the WordPress admin bar with CSS when you are editing in
Beaver Builder. If the admin bar is hidden at other times, it may be due to one
of the following reasons.

  * Another plugin or a non-Beaver-Builder theme may have deliberately hidden it.  
Try deactivating plugins one by one or switching themes to see if it appears.

  * Your user profile may have the option selected to remove the admin toolbar. In the WordPress admin panel, click Users and edit your own profile. For the **Toolbar** setting, make sure **Show Toolbar when viewing site** is selected.
  * If the toolbar disappears while you're customizing your theme with PHP code, or the content disappears but the bar is still there, it could be due to a PHP syntax error, leading to a problem calling the `wp_footer` function in the file *footer.php*. Debug the code for your own customization, or contact the theme developer if you haven't made any changes.
