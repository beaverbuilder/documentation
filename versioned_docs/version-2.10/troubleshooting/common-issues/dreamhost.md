---
id: dreamhost
title: DreamHost and module repeater settings
sidebar_label: DreamHost & module repeater settings
---

If you're hosting your websites with [DreamHost](https://www.dreamhost.com/) and try to use modules which have repeater options (Content Slider, Testimonials, etc) you won't be able to add more than one item.

To resolve this, add the following line to the *wp-config.php* file in your WordPress home directory:

```php
define( 'FL_BUILDER_MODSEC_FIX', true );
```
