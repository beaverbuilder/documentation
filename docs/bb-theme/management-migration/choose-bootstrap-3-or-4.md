---
id: choose-bootstrap-3-or-4
title: Choose Bootstrap 3 or 4
sidebar_label: Choose Bootstrap 3 or 4
description: Describes the bootstrap settings in the Beaver Builder Theme Customizer.
---

Beaver Builder Theme is built on the Bootstrap framework, and Bootstrap is transitioning from Version 3 to Version 4. Here's a [good technical summary of the changes in Bootstrap 4](https://getbootstrap.com/docs/4.0/migration/). Note in particular the change in browser support.

:::note **Note**
The Beaver Builder Theme Version 1.7.9 upgraded to Bootstrap Version 4.6.0.
:::

In **Customize > General > Layout**, there's a **Framework** field with settings to help in the eventual transition to Bootstrap 4 or to choose which version of Bootstrap you want if you're having any issues. You can choose from the following settings:

* **Minimal Bootstrap 3**  
  The default setting, and the one to keep if you're not sure. It loads a minimal version of Bootstrap 3 with the functionality required to ensure that the theme works as it does now.
* **Minimal Bootstrap 4**  
  Loads a minimal version of Bootstrap 4.
* **Full Bootstrap 3**  
  Loads the full version of Bootstrap 3.
* **Full Bootstrap 4**  
  Loads the full version of Bootstrap 4.

:::tip **Tip**
The Minimal Bootstrap is a lightweight build that only contains the CSS needed for the grid system and basic styling. This includes:

* Grid
* Print Styles
* Typography
* Code
* Tables
* Forms
* Navs
* Navbar

Full Bootstrap includes all CSS and JavaScript with the exception of [Popper.js](https://popper.js.org/). To use popper.js with the BB Theme you will need to [enqueue the script](https://developer.wordpress.org/reference/functions/wp_enqueue_script/).
:::

If you have a new site and want to use Bootstrap 4 features and don't mind the loss of support for older systems, you can try choosing Bootstrap 4. If you have existing customizations using Bootstrap 3 or Bootstrap 4 and need to ensure your layouts are not broken, choose the appropriate version.
