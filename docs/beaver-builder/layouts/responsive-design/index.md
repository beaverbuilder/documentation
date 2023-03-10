---
id: index
title: Responsive Design
sidebar_label: Responsive Design
description: In this section, you will find articles that describe how to use Beaver Builder's responsive tools in order to create layouts that look great on all devices.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section, you will find articles that describe how to use Beaver Builder's responsive tools in order to create layouts that look great on all devices.

:::tip Free Course
Check out our [free responsive design course](https://courses.wpbeaverbuilder.com/view/courses/page-builder-course) to learn more about the responsive editor and other features that ensure your layouts look great on all devices.
:::

## Responsive Behavior

Layouts created with Beaver Builder are fully responsive out of the box, which means they automatically adjust to fit different screen sizes, ensuring that your layouts will look great on any device. It is also possible to fine-tune your responsive layouts even further with [Beaver Builder's responsive features](#responsive-features).

You can see how your layouts adapt to different screen sizes in the screenshots below.

<Tabs>
<TabItem value="large" label="Large" default>

The screenshot below shows how your website appears on a large and extra large devices.

![Extra Large & Large device layout view](/img/beaver-builder/responsive--index--1.jpg)

</TabItem>
<TabItem value="medium" label="Medium">

The screenshot below shows how your website appears on a medium devices.

![Medium device layout view](/img/beaver-builder/responsive--index--2.jpg)

</TabItem>
<TabItem value="small" label="Small">

The screenshot below shows how your website appears on a small devices.

![Small device layout view](/img/beaver-builder/responsive--index--3.jpg)

</TabItem>
</Tabs>

## Responsive Features

Beaver Builder provides the following features to fine-tune your responsive layouts further.

* You can preview and edit your layouts in a way that ensures they look great on all devices using the [Responsive Editor mode](editor.md). In addition, you can set custom width and height values to preview your website in a variety of widths and heights.

* With [Custom Breakpoints](breakpoints.md#custom-breakpoints), you can set your own preferred widths for different device sizes overriding [Beaver Builder's default breakpoint](breakpoints.md) values.

* Using [Visibility](advanced-tab/visibility.md) options, you can hide specific [nodes](getting-started/how-it-works.md#nodes) (rows, columns, and modules) on your website for selected devices, allowing you to customize your user experience accordingly.

* By using the [Responsive Toggle](toggle.md), you can define different row, column, and module settings per device, such as margins, padding, and even background images.

* [Columns stack](columns/stacking.md) automatically for small devices due to the limited viewing area, and one column is usually the best design. You can avoid and control column stacking by setting custom column widths for each device size, or by reversed column stacking order.

## In this section

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
