---
id: about-this-release
title: About this release
sidebar_label: About this release
description: Describes the features in this Beaver Themer release.
---

Here are the new features  for Beaver Themer 1.4-alphha. <!-- Features for the latest alpha version (alpha.2) are labeled. -->

:::warning **Warning**
Using alpha releases in a production environment is highly discouraged. The risk of bugs is high and features can be changed or removed based on testing and feedback. See [this article](/general/alpha-and-beta-releases.md/#install-an-alpha-or-beta-plugin-release) for information about installing prerelease versions.
:::

### Singular layouts can have Beaver Builder layouts in the post content area

You can now have both a Singular Beaver Themer layout and a Beaver Builder layout in the content area of the same post. This is illustrated in the following screenshot. The Themer Singular layout usually includes a Post Content module, into which the post content is dynamically inserted. The post content itself is created with the WordPress editor, or, as of Beaver Themer 1.4-alpha, with the Beaver Builder editor. In the screenshot, the post content area was created with a Beaver Builder layout with a Text Editor module and a Photo module in two columns.

![Singular Themer layout with Beaver Builder post content layout](/img/themer-1-4-features-1.jpg)

#### Prerequisite

To use this feature, the **Posts** post type must be enabled for Beaver Builder, as shown in [this article](/beaver-builder/management-migration/control-which-post-types-can-use-beaver-builder.md).

#### Create a Beaver Builder layout for a post with a Singular layout assigned

When you choose to edit a single post in Beaver Builder, a message is displayed as the editor opens, asking if you want to continue to apply the Singular Themer layout to this post. If you choose to override the Themer Singular layout, the post layout outside the content area is controlled by your theme. The Beaver Builder editor then opens for you to create your post content layout.

#### Change whether the Themer Singular layout is applied to a post with a Beaver Builder content layout

You can change your decision later about whether to apply the Singular layout to this post. In the Beaver Builder editor for this post content, open the **Tools** menu and choose **Themer override**. The same choice box is displayed, asking you to choose whether to override or use the Themer Singular layout for this page.
