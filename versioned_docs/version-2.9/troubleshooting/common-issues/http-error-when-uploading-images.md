---
id: http-error-when-uploading-images
title: HTTP error when uploading images
sidebar_label: HTTP error when uploading images
---

When you get an HTTP error when trying to upload an image in a Beaver Builder
module, it's most likely due to a mismatch in forcing SSL on your site. If
your site has an SSL certificate and your site's  _wp-config.php_ file
contains the following line:

```php
define('FORCE_SSL_ADMIN', true);
```

then make sure that you have also set both URLs in **Settings > General** to
use `https:`, as shown in the following screenshot.

![](/img/troubleshoot-http-error.png)
