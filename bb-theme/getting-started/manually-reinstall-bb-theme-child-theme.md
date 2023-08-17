---
id: manually-reinstall-bb-theme-child-theme
title: Manually reinstall BB Theme
sidebar_label: Manually reinstall BB Theme
---

Ordinarily, you can install and update the BB Theme through
the WordPress admin panel. Use these instructions if you need to manually
reinstall your BB Theme for any reason.

:::warning **Warning:**
The following procedure requires that you are able to FTP to
your website and know the basics of deleting and uploading files with FTP.
The procedure is not difficult, but you will put your website at risk if
you're not sure about the instructions.

**Back up your website completely before making any modifications or changes.**
:::

## Reinstall the Beaver Builder Theme manually

  1. Log into Beaver Builder’s [My Account](https://www.wpbeaverbuilder.com/my-account/) page and download the Beaver Builder Page Builder Theme to your desktop. Find the zip file you downloaded and extract the bb-theme folder.
  2. Delete the existing Beaver Builder Theme in one of the following ways.  

    * On the WordPress admin panel, click **Appearance > Themes**. Click the Beaver Builder (parent) theme icon and then delete the theme. Don't delete the Beaver Builder child theme.
    * Using FTP, navigate to the  *wp-content/themes*  directory in your site installation and delete the  *bb-theme*  folder.
  3. Using FTP, upload the *bb-theme* folder from your local system to the  *wp-content/themes/* folder in your site installation.
  4. On the WordPress admin panel, choose **Appearance** > **Themes**  and find the newly uploaded Beaver Builder Theme in the list.
  5. If you're using the child theme, you're done. If you were using the Beaver Builder parent theme that you reinstalled, click **Activate.**

## Reinstall the Beaver Builder child theme manually

Ordinarily, **you should not reinstall the child theme** because you will
likely lose any customizations you have made.

If you do need to reinstall the child theme, note that it could be your
customizations that are causing the problems that require that you reinstall.
If you want to remove your customizations and restore a clean child theme,
follow the instructions for installing Beaver Builder Theme, but download the
child theme and use the *wp-content/bb-theme-child* folder.

Here are some tips if you want to reinstall the child theme and preserve your
customizations. If you continue to have issues after trying to preserve your
customizations, the best thing is to do a clean child theme install and put
the customizations back one by one.

  * Make a copy of the *wp-content/themes/bb-theme-child* folder before you start.
  * Don't delete the existing files. That way any extra files you added will be preserved.
  * Download the child theme from Beaver Builder’s [My Account](https://www.wpbeaverbuilder.com/my-account/) page and extract the *bb-theme-child* folder.
  * Upload the new files and overwrite older files only. That way if you created any new customized files they will still be there.
  * Check the contents of the files in your copy of the previous installation to look for customizations. Compare them with the new files if necessary.
