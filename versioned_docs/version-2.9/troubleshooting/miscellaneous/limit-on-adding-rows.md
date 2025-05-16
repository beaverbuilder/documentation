---
id: limit-on-adding-rows
title: Limit on adding rows?
sidebar_label: Limit on adding rows?
---

Beaver Builder has no limit on the number of rows you can use in a layout. If you find that you can't add rows to a page beyond a certain point, check
for the following:

  * Are you trying nest columns? You can't recursively nest columns. If you keep trying to drag a module into another column and it doesn't appear there, you've probably exceeded the nesting limit.  
One way to solve this if you have a complex column structure is to create your
layout with blank columns, then drag your modules into that new structure.
It's easier to keep track of what's nested.

  * If it seems like you've hit a row limit, where you can add or save any new rows you add, try increasing the value of the `post_max_vars` value in a *php.ini* file.   
If you're not sure how to do this, your hosting provider should be able to
help.
