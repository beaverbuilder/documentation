---
id: load-google-fonts-locally-gdpr
title: Load Google Fonts Locally (GDPR)
sidebar_label: Load Google Fonts Locally (GDPR)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Beaver Builder accesses Google Fonts through its Content Delivery Network (CDN). Google claims to be compliant with GDPR in their use of personal information. If you still want to load Google fonts locally from your own server, this article has the procedure to do so.

:::tip
Beaver Builder includes Font Awesome 5 icons with the plugin and loads them locally.
:::

## Load Google Fonts locally

This tutorial affects both the Beaver Builder plugin and the BB Theme. It changes the way the actual font files are delivered. It doesn’t change the way that fonts are selected in modules and in the Customizer.

The easiest way to generate both the CSS and the web fonts is to use the Google Webfonts Helper site, which we’ve included in the steps here.

1. Create a folder called *`fonts`* in your site’s root directory.

2. Stop all remote calls to Google Fonts made by Beaver Builder by adding the following code to your child theme’s _functions.php_ file.  

  <Tabs>
  <TabItem value="beaverbuilder" label="Beaver Builder" default>
  
  ```php
  // Beaver Builder module enqueued Google Fonts
  add_filter( 'fl_builder_google_fonts_pre_enqueue', function( $fonts ) {
      return array();
  } );
  ```  

  </TabItem>
  <TabItem value="bbtheme" label="BB Theme">
  
  ```php
  // BB Theme enqueued Google Fonts
  add_action( 'wp_head', function() {
      global $wp_styles;
      if ( isset( $wp_styles->queue ) ) {
          foreach ( $wp_styles->queue as $key => $handle ) {
              if ( false !== strpos( $handle, 'fl-builder-google-fonts-' ) ) {
                  unset( $wp_styles->queue[ $key ] );
              }
          }
      }
  }, 101 );
  ```
  
  </TabItem>
  </Tabs>
  
  :::info
  The entire library of Google Fonts will still be present in the typography dropdown menu in Beaver Builder modules and in the BB Theme Customizer options, but because this code stops all remote calls, only the fonts you add with this procedure will work in the rendered page.
  :::

3. Do all of the following steps for each font you plan to add.

4. Go to the [Google Webfonts Helper](https://gwfh.mranftl.com/fonts) site.

5. In the menu on the left, select a Google font.  
  In this tutorial, we’ll select the font called Bungee.

6. In the first two sections, select the charsets and styles you want for that font.

7. In the third section called **Copy CSS**, in the **Customize folder prefix (optional)** field, change the font path to the full URL to the _fonts_ folder, ending with a forward slash, as shown in the following screenshot.   
  This changes the path at various places in the CSS; check to make sure it matches where you placed the _fonts_ folder.  

  ![](/img/developer/how-to-tips--google-font-gdpr--1.jpg)

8. Copy the CSS in the box in the third section.

9. Click the button in the fourth section to download the zip archive of the web font files for that font.   
  The download button is shown in the previous screenshot.

10. Add the CSS to the place where you normally add global CSS rules.  
  See the article for [where to put CSS code](/beaver-builder/styles/custom-code.md)  

  ![](/img/developer/how-to-tips--google-font-gdpr--2.jpg)



11. To complete the process, extract the downloaded .zip file and upload the individual font files (eot, svg, ttf, woff, woff2) to your fonts folder, following the example tree structure provided as a reference.

  ```bash {5}
  /my-website
  ├── /wp-admin
  ├── /wp-content
  ├── /wp-includes
  ├── /fonts
  ├── .htaccess
  ├── index.php
  ├── license.txt
  ├── readme.html
  ├── wp-activate.php
  ├── wp-blog-header.php
  ├── wp-comments-post.php
  ├── wp-config-sample.php
  ├── wp-config.php
  ├── wp-content
  ├── wp-cron.php
  ├── wp-includes
  ├── wp-links-opml.php
  ├── wp-load.php
  ├── wp-login.php
  ├── wp-mail.php
  ├── wp-settings.php
  ├── wp-signup.php
  ├── wp-trackback.php
  └── xmlrpc.php
  ```

12. Test by adding the font to a Beaver Builder module, such as a Heading module, to see if the correct Google font shows up. If you’re using the Beaver Builder Theme, you can test by selecting that font in **Customize > General > Headings** or **Customize > General > Text**.  

Remember that although you’re still seeing the full Google font list, only the
ones you’ve uploaded to your site and provided the CSS for will work.
