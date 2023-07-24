---
id: event-cost
title: Event Cost module
sidebar_label: 'Singular: Event Cost'
description: The article covers the Event Cost module which displays an event's cost.
---

The Event Cost module is based on the Beaver Builder [Text Editor module](/beaver-builder/layouts/modules/text). It uses an instance of the classic WordPress editor and displays the [event cost](https://theeventscalendar.com/knowledgebase/k/creating-an-event/#Event_Cost) if one is added to your events. A value of "Free" is returned when "0" is entered as the event cost.

It does this by automatically inserting the [`the_event_calendar_cost`](../field-connections.md#event-cost) field connection into the text area, as shown in the image below.

![](/img/beaver-themer/integrations--tec--event-cost--1.jpg)

You can use the classic text editor to add text, HTML, or shortcodes before or after the field connection. This lets you add any additional information you want to display. You can also use the toolbar options to format the event cost. For more control, use the settings on the **Style** tab.

## Availability

The Event Cost module appears in **The Events Calendar** section of the **Themer modules** group in the Content Panel when you're editing a [Singular-type](../../../layout-types-modules/singular-layout-type/themer-singular-layout-type.md) Themer layout.

## Style tab

The **Style** tab has a variety of settings that apply to the [`the_event_calendar_cost`](../field-connections.md#event-cost) field connection and any other text in the module, such as text color and the Beaver Builder [Typography section](/beaver-builder/styles/typography/typography.md), which gives you many choices not available in the text editor, starting with font family.

## The Advanced tab

There are all the usual [Advanced tab](/beaver-builder/layouts/advanced-tab) settings for margins, visibility, animations, and advanced HTML settings.
