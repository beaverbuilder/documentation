---
id: visibility
title: Visibility
sidebar_label: Visibility
description: The Visibility section in the Advanced tab lets you determine when your rows, columns or modules display in your layout using breakpoints and conditional logic.
---

The **Visibility** section in the Advanced tab lets you determine when your rows, columns or modules display in your layout using breakpoints and conditional logic.

![Visibility section in the Advanced tab](/img/beaver-builder/advanced-tab--visibility--1.jpg)

:::info
The **Stacking Order** option is only available for [Columns](columns/index.md).
:::

## Breakpoint

By default, every row, column, and module is visible on every device size. You can use the [Breakpoint](responsive/breakpoints.md) setting to hide individual rows, columns, and modules for certain device sizes. In the [Global Settings](user-interface/global-settings.md#medium-device-breakpoint), you can view the default breakpoints and set custom values.

### Device Toggle Icons

Using the device toggle icons, you can quickly select which devices display or hide a row, column, or module. Simply click the device icon to toggle whether the element is displayed (blue) or hidden (gray) for those devices.

You can choose one of the following device toggle icons:

* **Extra Large Device**  
	The element will be visible or hidden for desktop computers or TVs with a browser.

* **Large Device**  
	The element will be visible or hidden for small desktop computers, laptops, and landscape tablets.

* **Medium Device**  
	The element will be visible or hidden for devices like small tablets.

* **Small Device**  
	The element will be visible or hidden for devices like portrait tablets, and smartphones.
	
:::tip
By default, all device toggle icons are enabled (blue), displaying the row, column, or module at all times.
:::

### Multi-selection

The device toggle supports multi-selection and allows you to select more than one device. As a result, you are not limited to preset combinations, such as Large & Medium or Medium & Small, and can create any combination you wish.

It is possible, for example, to display a row on Extra Large, Large, and Small devices and hide the row on Medium devices. In addition, a Heading module can be hidden on Extra Large and Small devices, but displayed on Large and Medium devices.

![Device Toggle Combinations](/img/beaver-builder/advanced-tab--visibility--2.jpg)

## Stacking Order (Columns)

The **Stacking Order** option is only available for columns and lets you easily reverse the stacking order of columns.

See the [Columns Stacking](columns/stacking.md) article for more information.

## Display

The **Display** option lets you display your row, column or module based certain conditions such as never, always, logged out users, logged in users and conditional logic (requires Beaver Themer).

### Never

The row, column or module is only visible to the user editing the page. This is useful if the design isn't complete and ready for publishing.

### Always

The row, column or module will always be visible for all users.

### Logged Out Users

The row, column or module will only be visible for logged out users.

### Logged In Users

The row, column or module will only be visible for logged in users. If you choose to show an element only when a user is logged in, you can also enter a [capability](https://wordpress.org/support/article/roles-and-capabilities/) the user must have. This is useful for limiting the row, column or module to specific users roles.

### Conditional Logic

The Conditional Logic option is only available if you have Beaver Themer installed. This lets you fine-tune visibility using conditional logic.

## Visibility Rules Indicator

If you limit visibility, an Eye icon will appear when hovering your mouse cursor over a row, column, or module, as shown in the following screenshot:

![Visibility Rules Indicator](/img/beaver-builder/advanced-tab--visibility--3.jpg)
