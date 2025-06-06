---
id: display-subset-typography-controls
title: Limit Typography section controls
sidebar_label: Limit Typography section controls
---

You can add code that displays only a subset of the **Typography** section in modules that include it. For example, if you add the following code to a modules typography array, it will disable font size controls for mobile device settings.

```
'disabled' => array( 'responsive' => array( 'font_size' ) )
```