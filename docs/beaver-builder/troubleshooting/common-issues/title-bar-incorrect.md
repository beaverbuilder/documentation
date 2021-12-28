---
id: title-bar-incorrect
title: Incorrect Title Bar causes wrong page to display after publishing.
sidebar_label: Title Bar Incorrect
---

# Incorrect Title Bar and redirect after publishing to wrong page
The Beaver Builder UI shows you what page you are editing in the top left.  We refer to this as the Title Bar.  Sometimes users experience issues where the Title Bar does not show the correct Title information for the post/page they are editing. Users might also find that when this happens and they publish changes, instead of being taken to the post/page they were editing, they are redirected to the incorrect post/page that was listed in the Title Bar.

[Image Here]

## The Cause
The cause is custom code that uses [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/) but does not [reset the query properly](https://developer.wordpress.org/reference/classes/wp_query/#usage). This custom code is in the theme or a plugin that the site uses.

## The Solution
If the jQuery comes from custom code in your site, you must [reset the query properly](https://developer.wordpress.org/reference/classes/wp_query/#more-information). If the problem is coming from a theme or plugin, contact the developer to correct the code.
