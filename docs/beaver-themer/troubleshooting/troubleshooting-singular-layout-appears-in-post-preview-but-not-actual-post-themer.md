---
id: troubleshooting-singular-layout-appears-in-post-preview-but-not-actual-post-themer
title: Singular layout appears in post preview but not actual post
sidebar_label: Singular layout appears in post preview but not actual post
---

If you have a Singular Themer layout type that appears when you preview a post but does not work when you view the actual post. It's likely caused by the theme template being used on that page or post.

## 1. Already Using Beaver Builder

A Beaver Themer layout will not appear if Beaver Builder is already active on a Page or Post. To correct this, navigate to the WordPress Edit Screen for your page or post and switch to the WordPress Editor. When you return to the page or post, the Beaver Themer layout should now be applied.

## 2. Themer Override

You can use Beaver Builder to either override the Beaver Themer layout or edit only the Post Content module.

If you use the Override Layout option, you can revert back to the Beaver Themer Singular layout by navigate to the WordPress Edit Screen for your page or post and switch to the WordPress Editor. When you return to the page or post, the Beaver Themer layout should now be applied.

:::tip
You can determine whether your page or post is using the Override Layout option by looking for a green dot next to Themer Override in the Tools Menu.
:::

## 3. Theme Page Template

There are usually a few page and post templates available in your theme. The template selection field appears on the WordPress Edit Screen. For Singular Beaver Themer layouts, some templates other than **Default** may cause the Beaver Themer layout not to display.

You can fix the problem by changing the template of your page or post to the **Default** template from the WordPress Edit Screen.

### Standard Editor (Gutenberg)

If you use the WordPress standard editor (Gutenberg), your post's template can be found in the **Template** section of the WordPress Edit Screen.

### Classic Editor

If you use the Classic Editor plugin, you can find which template is assigned to your post under the **Post Attributes** section.

:::info
If your Singular layout applies to a page, you can find out what template is assigned in the **Page Attributes** section.
:::
