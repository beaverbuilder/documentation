---
id: themer-singular-layout-author-bio-module
title: Author Bio module
sidebar_label: Author Bio module
---

The Author Bio module is in the **Post modules** category, which appears only when you're editing a Singular-type themer layout in Themer. It displays a box with information about the author, drawn from that user's profile.

![](/img/themer-singular-layout-author-bio-module-44d853ac.png)

The Author Bio module is identical to the **Author box** setting in the Beaver Builder Theme, available at **Customize > Content > Post layout**, but in this module, you can vary text and background color and image size, plus the usual settings on the **Advanced** tab. It is only available when you're designing a Singular Themer layout.

##  Under the hood

The Author Bio module pulls information from the post author's WordPress user
profile, specifically the following fields:

  * **Display name publicly as**  
  This field maps to the post author's name in the bio box

  * **Biographical info**  
  This field displays the post author's bio in the bio box.

  * **Profile picture**  
  The post author's photo come from the **Profile picture** field in that author's user profile. By default, WordPress uses the user's Gravatar as the profile picture. If you use a plugin that lets users upload their own image or use one from the Media Library for their profile picture, that image is used.

:::info 
If any of this information is missing from the user profile, the bio box still displays, but without that object.
:::
