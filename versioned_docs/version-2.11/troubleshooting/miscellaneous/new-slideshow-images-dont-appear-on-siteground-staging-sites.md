---
id: new-slideshow-images-dont-appear-on-siteground-staging-sites
title: "New slideshow images don't appear on SiteGround Staging sites"
sidebar_label: "New slideshow images don't appear on SiteGround Staging sites"
---

Some SiteGround web hosting plans have a Staging feature in cPanel. It's a
very handy feature, but there's an idiosyncrasy that has one specific effect
in Beaver Builder.

In a SiteGround staging site, the WordPress address URL and site address URL
in **Settings > General** are not changed to point to the staging site. Beaver
Builder and Beaver Themer plugin code is written in such a way that this URL
mismatch only causes a problem when new images are added to the staging site
in a Slideshow module or as a Slideshow row background. These URLs cause
Beaver Builder to look to the main site for images, but it doesn't find the
new ones because they haven't been added there yet.

The good news is that it's only on the staging site that you can't see new
images in a slideshow. Once you push your staging site live, the images you
added to the Media Library will appear, since the new images are now copied
over to your main site. Also, this issue applies only to the Slideshow module
and row background, not to the Content Slider or any other module or type of
row background image.

SiteGround has agreed to implement a workaround for this problem in their
Staging code. In the meantime, if you need to see newly added slideshow images
on your SiteGround staging site, you can add the following line to the *wp-
config.php* file in the staging location and substitute the correct staging
site URL, and then remove it before you push the changes back to your main
site.

```php
define('WP_SITEURL','http://stagingnn.example.com');
```    

Replace the staging number and domain in the URL with the correct one for your
staging site.

Where can you find the *wp-config.php* file? SiteGround staging sites are
located in your home directory in the staging folder. For example, if your
staging URL shows 'staging13' as the subdomain, then the location is
*/staging/13*.
